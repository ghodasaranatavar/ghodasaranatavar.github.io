// scheduler.js

document.addEventListener('DOMContentLoaded', () => {
    // ---- Booking API ----
    class BookingAPI {
        static BASE_URL = (() => {
            const host = window.location.hostname;
            const origin = window.location.origin;
            // Dynamic discovery for local development to avoid CORS issues between localhost/127.0.0.1
            if (host === 'localhost' || host === '127.0.0.1' || host === '::1' || host === '') {
                return `${origin}/profile/api/`;
            }
            return 'https://lightcloudcrm.com/api/';
        })();
        static API_KEY = 'LIGHTCLOUD_SECRET_92de8c3f926afd3b';

        static async getAvailability(date, meetingTypeId = 2, timezone = 'UTC') {
            // Fix: Format date as YYYY-MM-DD in local time to avoid timezone shifts from toISOString()
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const dateStr = `${year}-${month}-${day}`;
            
            const url = `${this.BASE_URL}get-slots.php?date=${dateStr}&meeting_type_id=${meetingTypeId}&timezone=${timezone}`;

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.API_KEY
                }
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                throw new Error(errData.error || `Failed to fetch slots (Status: ${response.status})`);
            }

            const data = await response.json();
            return data.slots || [];
        }

        static async getAvailableDays(month, year, meetingTypeId = 2, timezone = 'UTC') {
            const url = `${this.BASE_URL}get-available-days.php?month=${month}&year=${year}&meeting_type_id=${meetingTypeId}&timezone=${timezone}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.API_KEY
                }
            });
            if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                throw new Error(errData.error || `Failed to fetch availability (Status: ${response.status})`);
            }
            const data = await response.json();
            return data.available_dates || [];
        }

        static async lockSlot(slotId, lockedBy) {
            const url = `${this.BASE_URL}lock-slot.php`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.API_KEY
                },
                body: JSON.stringify({
                    slot_id: slotId,
                    locked_by: lockedBy
                })
            });

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.error || 'Failed to lock slot');
            }

            return await response.json();
        }

        static async bookEvent(data) {
            const url = `${this.BASE_URL}book-slot.php`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.API_KEY
                },
                body: JSON.stringify({
                    slot_id: data.slot_id,
                    locked_by: data.locked_by,
                    name: data.name,
                    email: data.email,
                    notes: data.notes,
                    timezone: data.timezone
                })
            });

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.error || 'Failed to book slot');
            }

            return await response.json();
        }
    }

    // ---- State Manager ----
    const StateManager = {
        selectedDate: null,
        selectedTime: null,
        selectedSlotId: null,
        selectedDuration: 30,
        meetingTypeId: 2, // 1: 15m, 2: 30m (Default 30m)
        selectedTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
        userUid: localStorage.getItem('scheduler_uid') || `user_${Math.random().toString(36).substr(2, 9)}`,
        currentMonth: new Date().getMonth(),
        currentYear: new Date().getFullYear(),
        lockTimer: null,
        quill: null,

        reset() {
            this.selectedDate = null;
            this.selectedTime = null;
            this.selectedSlotId = null;
            this.currentMonth = new Date().getMonth();
            this.currentYear = new Date().getFullYear();
            if (this.lockTimer) clearTimeout(this.lockTimer);
            
            // Reset side panel
            if (DOM.slotsSidePanel) {
                DOM.slotsSidePanel.classList.remove('active');
                DOM.slotsContainer.innerHTML = '';
            }

            // Restore sidebar elements
            if (DOM.durationSelector) DOM.durationSelector.style.display = 'flex';
            if (DOM.conferencingInfo) DOM.conferencingInfo.style.display = 'flex';
            
            // Clear Form Fields (Fix for Input Persistence)
            if (DOM.form) {
                DOM.form.reset();
                if (this.quill) this.quill.setContents([]);
                const errorMsg = document.getElementById('booking-error-message');
                if (errorMsg) {
                    errorMsg.style.display = 'none';
                    errorMsg.textContent = '';
                }
            }
        }
    };

    // ---- DOM Elements ----
    const DOM = {
        modal: document.getElementById('custom-scheduler-modal'),
        durationBtns: document.querySelectorAll('.duration-btn'),
        timezoneSelect: document.getElementById('timezone-select'),
        selectedTimezoneDisplay: document.getElementById('scheduler-selected-timezone'),
        closeBtn: document.getElementById('scheduler-modal-close'),
        overlay: document.getElementById('scheduler-modal-overlay'),
        triggers: document.querySelectorAll('.calendly-trigger'),

        steps: [
            document.getElementById('scheduler-step-1'),
            null, // Step 2 removed
            document.getElementById('scheduler-step-3'),
            document.getElementById('scheduler-step-4')
        ],

        calendarContainer: document.getElementById('calendar-container'),
        slotsContainer: document.getElementById('slots-container'),
        slotsDateHeader: document.getElementById('slots-date-header'),
        slotsSidePanel: document.getElementById('slots-side-panel'),

        btnBackToCalendar: null,
        btnBackToSlots: document.getElementById('btn-back-to-slots'),
        btnCloseSuccess: document.getElementById('btn-close-success'),

        selectedDatetimeDisplay: document.getElementById('scheduler-selected-datetime'),
        datetimeText: document.querySelector('.datetime-text'),

        form: document.getElementById('scheduler-booking-form'),
        errorMsg: document.getElementById('booking-error-message'),
        durationSelector: document.getElementById('scheduler-duration-selector'),
        conferencingInfo: document.getElementById('scheduler-conferencing-info')
    };

    // Initialize Quill
    if (!StateManager.quill) {
        StateManager.quill = new Quill('#booking-notes-editor', {
            theme: 'snow',
            placeholder: 'Briefly describe the agenda or questions...',
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline'],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    ['clean']
                ]
            }
        });
    }

    // ---- UI Controller ----
    const UIController = {
        showStep(stepIndex) {
            DOM.steps.forEach((step, index) => {
                if (!step) return; // Skip removed steps
                if (index === stepIndex) {
                    step.classList.add('active');
                } else {
                    step.classList.remove('active');
                }
            });

            // Cleanup sidebar on success step (index 3 corresponds to Step 4)
            if (stepIndex === 3) {
                if (DOM.durationSelector) DOM.durationSelector.style.display = 'none';
                if (DOM.selectedDatetimeDisplay) DOM.selectedDatetimeDisplay.style.display = 'none';
                if (DOM.conferencingInfo) DOM.conferencingInfo.style.display = 'none';
            }
        },

        updateSidebar() {
            if (StateManager.selectedDate && StateManager.selectedTime) {
                const dateStr = StateManager.selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
                DOM.datetimeText.textContent = `${StateManager.selectedTime}, ${dateStr} (${StateManager.selectedDuration} Min)`;
                DOM.selectedTimezoneDisplay.textContent = StateManager.selectedTimezone;
                DOM.selectedDatetimeDisplay.style.display = 'block';
            } else {
                DOM.selectedDatetimeDisplay.style.display = 'none';
            }
        },

        async openModal() {
            StateManager.reset();
            await CalendarEngine.render();
            this.showStep(0);
            this.updateSidebar();
            DOM.modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        },

        closeModal() {
            DOM.modal.classList.remove('active');
            document.body.style.overflow = '';
        },

        populateSuccessDetails(data) {
            const timingEl = document.getElementById('success-detail-timing-merged');
            const emailEl = document.getElementById('success-detail-email');
            const agendaEl = document.getElementById('success-detail-agenda');

            // Merged Meeting Time (Range + Date + Duration)
            if (timingEl) {
                const dateStr = StateManager.selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
                const startTime = StateManager.selectedTime;
                const duration = StateManager.selectedDuration;
                
                // End time calculation
                const parts = startTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
                let timeRange = startTime;
                if (parts) {
                    let hours = parseInt(parts[1]);
                    const minutes = parseInt(parts[2]);
                    const period = parts[3].toUpperCase();
                    if (period === 'PM' && hours !== 12) hours += 12;
                    if (period === 'AM' && hours === 12) hours = 0;
                    const start = new Date();
                    start.setHours(hours, minutes, 0);
                    const end = new Date(start.getTime() + duration * 60000);
                    const formatTime = (d) => d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
                    timeRange = `${formatTime(start)} - ${formatTime(end)}`;
                }
                timingEl.textContent = `${timeRange}, ${dateStr} (${duration} Min) - ${StateManager.selectedTimezone}`;
            }

            if (emailEl) emailEl.textContent = data.email;
            if (agendaEl) {
                agendaEl.innerHTML = data.notes || '<span style="color: #999; font-style: italic;">No agenda provided</span>';
            }
        }
    };

    // ---- Calendar Engine ----
    const CalendarEngine = {
        async render() {
            // Show loading state in calendar
            DOM.calendarContainer.innerHTML = `
                <div style="display:flex; justify-content:center; align-items:center; height:300px;">
                    <i class="ph ph-spinner ph-spin" style="font-size:2rem; color:var(--lab-palette-primary-main);"></i>
                </div>
            `;

            const date = new Date(StateManager.currentYear, StateManager.currentMonth, 1);
            const daysInMonth = new Date(StateManager.currentYear, StateManager.currentMonth + 1, 0).getDate();
            const firstDayIndex = date.getDay();
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            // Fetch available dates for this month
            let availableDates = [];
            try {
                availableDates = await BookingAPI.getAvailableDays(
                    StateManager.currentMonth + 1, 
                    StateManager.currentYear,
                    StateManager.meetingTypeId,
                    StateManager.selectedTimezone
                );
            } catch (e) {
                console.error("Could not fetch available days", e);
            }

            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            let html = `
                <div class="calendar-header">
                    <button id="cal-prev" aria-label="Previous month"><i class="ph ph-caret-left"></i></button>
                    <h3>${monthNames[StateManager.currentMonth]} ${StateManager.currentYear}</h3>
                    <button id="cal-next" aria-label="Next month"><i class="ph ph-caret-right"></i></button>
                </div>
                <div class="calendar-grid">
                    <div class="calendar-day-name">Sun</div>
                    <div class="calendar-day-name">Mon</div>
                    <div class="calendar-day-name">Tue</div>
                    <div class="calendar-day-name">Wed</div>
                    <div class="calendar-day-name">Thu</div>
                    <div class="calendar-day-name">Fri</div>
                    <div class="calendar-day-name">Sat</div>
            `;

            for (let i = 0; i < firstDayIndex; i++) {
                html += `<div class="calendar-day empty"></div>`;
            }

            for (let i = 1; i <= daysInMonth; i++) {
                const iterDate = new Date(StateManager.currentYear, StateManager.currentMonth, i);
                const dateStr = `${StateManager.currentYear}-${String(StateManager.currentMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
                
                let classes = "calendar-day";
                const isAvailable = availableDates.includes(dateStr);

                if (iterDate < today || !isAvailable) {
                    classes += " disabled";
                } else if (iterDate.getTime() === today.getTime()) {
                    classes += " today";
                }

                if (StateManager.selectedDate && iterDate.getTime() === StateManager.selectedDate.getTime()) {
                    classes += " day-active";
                }

                html += `<div class="${classes}" data-day="${i}">${i}</div>`;
            }

            html += `</div>`;
            DOM.calendarContainer.innerHTML = html;

            this.attachEvents();
        },

        attachEvents() {
            const btnPrev = document.getElementById('cal-prev');
            const btnNext = document.getElementById('cal-next');

            const today = new Date();
            if (StateManager.currentYear === today.getFullYear() && StateManager.currentMonth === today.getMonth()) {
                btnPrev.style.opacity = '0.5';
                btnPrev.style.cursor = 'not-allowed';
            } else {
                btnPrev.addEventListener('click', async () => {
                    StateManager.currentMonth--;
                    if (StateManager.currentMonth < 0) {
                        StateManager.currentMonth = 11;
                        StateManager.currentYear--;
                    }
                    await this.render();
                });
            }

            btnNext.addEventListener('click', async () => {
                StateManager.currentMonth++;
                if (StateManager.currentMonth > 11) {
                    StateManager.currentMonth = 0;
                    StateManager.currentYear++;
                }
                await this.render();
            });

            document.querySelectorAll('.calendar-day:not(.empty):not(.disabled)').forEach(day => {
                day.addEventListener('click', async () => {
                    const dayNum = parseInt(day.getAttribute('data-day'));
                    StateManager.selectedDate = new Date(StateManager.currentYear, StateManager.currentMonth, dayNum);
                    await this.render();
                    SlotEngine.loadSlots();
                });
            });
        }
    };

    // ---- Slot Engine ----
    const SlotEngine = {
        formatSlotTime(utcStr) {
            // API returns: YYYY-MM-DD HH:MM:SS (UTC)
            const date = new Date(utcStr.replace(' ', 'T') + 'Z');
            return date.toLocaleTimeString('en-US', {
                timeZone: StateManager.selectedTimezone,
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            });
        },

        async loadSlots() {
            const dateStr = StateManager.selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
            DOM.slotsDateHeader.textContent = dateStr;
            DOM.slotsContainer.innerHTML = `<div style="text-align:center; padding: 20px;"><i class="ph ph-spinner ph-spin" style="font-size: 2rem; color: var(--lab-palette-primary-main);"></i></div>`;
            
            // Show side panel with animation
            if (DOM.slotsSidePanel) {
                DOM.slotsSidePanel.classList.add('active');
            }

            try {
                const slots = await BookingAPI.getAvailability(
                    StateManager.selectedDate,
                    StateManager.meetingTypeId,
                    StateManager.selectedTimezone
                );

                if (!slots || slots.length === 0) {
                    DOM.slotsContainer.innerHTML = `<p style="text-align:center; color: var(--lab-text-secondary); padding: 40px; font-weight: 600;">No Slot available</p>`;
                    return;
                }

                DOM.slotsContainer.innerHTML = '';
                slots.forEach(slot => {
                    const timeLabel = this.formatSlotTime(slot.start_time_utc);
                    const btn = document.createElement('button');
                    btn.className = 'time-slot';
                    btn.textContent = timeLabel;
                    btn.addEventListener('click', () => this.selectSlot(btn, timeLabel, slot.id));
                    DOM.slotsContainer.appendChild(btn);
                });
            } catch (error) {
                DOM.slotsContainer.innerHTML = `<p style="text-align:center; color: var(--lab-palette-accent-pink); padding: 20px;">Error loading slots. Please check if the API is reachable.</p>`;
                console.error('Fetch Error:', error);
                console.error('Target URL:', `${BookingAPI.BASE_URL}get-slots.php`);
            }
        },

        async selectSlot(btn, time, slotId) {
            const originalText = btn.textContent;
            btn.classList.add('locking');
            btn.textContent = 'Locking...';

            try {
                // Ensure UID is saved for booking step
                if (!localStorage.getItem('scheduler_uid')) {
                    localStorage.setItem('scheduler_uid', StateManager.userUid);
                }

                const result = await BookingAPI.lockSlot(slotId, StateManager.userUid);

                if (result.success) {
                    StateManager.selectedTime = time;
                    StateManager.selectedSlotId = slotId;
                    UIController.updateSidebar();
                    UIController.showStep(2); // Go to form (index 2 in steps array)
                }
            } catch (error) {
                alert(error.message || 'Slot is no longer available. Please select another time.');
                this.loadSlots(); // Refresh slots
            } finally {
                btn.classList.remove('locking');
                btn.textContent = originalText;
            }
        }
    };

    // ---- Form Handler ----
    const FormHandler = {
        init() {
            DOM.form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const btn = DOM.form.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;
                btn.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Scheduling...';
                btn.disabled = true;

                // Disable all form fields
                const inputs = DOM.form.querySelectorAll('input, textarea');
                inputs.forEach(input => input.disabled = true);
                if (StateManager.quill) StateManager.quill.enable(false);

                const data = {
                    slot_id: StateManager.selectedSlotId,
                    locked_by: StateManager.userUid,
                    name: document.getElementById('booking-name').value,
                    email: document.getElementById('booking-email').value,
                    notes: StateManager.quill.root.innerHTML, // Use Quill content
                    timezone: StateManager.selectedTimezone
                };
                try {
                    const result = await BookingAPI.bookEvent(data);
                    
                    // Populate detailed success summary card
                    UIController.populateSuccessDetails(data);
                    
                    UIController.showStep(3); // Success step
                } catch (err) {
                    console.error('Booking Error:', err);
                    if (DOM.errorMsg) {
                        DOM.errorMsg.textContent = err.message || 'There was an error booking your event. Please try again.';
                        DOM.errorMsg.style.display = 'flex';
                        DOM.errorMsg.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else {
                        alert(err.message || 'There was an error booking your event. Please try again.');
                    }
                } finally {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    // Re-enable fields
                    const inputs = DOM.form.querySelectorAll('input, textarea');
                    inputs.forEach(input => input.disabled = false);
                    if (StateManager.quill) StateManager.quill.enable(true);
                }
            });
        }
    };

    // ---- Initialization & Extra Setup ----
    const initExtras = () => {
        // Setup Timezones
        const timezones = [
            'Pacific/Honolulu', 'America/Anchorage', 'America/Los_Angeles', 'America/Denver',
            'America/Chicago', 'America/New_York', 'America/Sao_Paulo', 'Europe/London',
            'Europe/Paris', 'Europe/Moscow', 'Asia/Dubai', 'Asia/Kolkata', 'Asia/Bangkok',
            'Asia/Shanghai', 'Asia/Tokyo', 'Australia/Sydney', 'Pacific/Auckland'
        ];

        let foundUserTz = false;

        // Ensure user's tz is in list if possible
        if (StateManager.selectedTimezone && !timezones.includes(StateManager.selectedTimezone)) {
            timezones.push(StateManager.selectedTimezone);
        }

        // Sort alphabetically for ease
        timezones.sort();

        timezones.forEach(tz => {
            const option = document.createElement('option');
            option.value = tz;
            option.textContent = tz.replace(/_/g, ' ');
            if (tz === StateManager.selectedTimezone) {
                option.selected = true;
                foundUserTz = true;
            }
            DOM.timezoneSelect.appendChild(option);
        });

        if (!foundUserTz && DOM.timezoneSelect.options.length > 0) {
            DOM.timezoneSelect.options[0].selected = true;
            StateManager.selectedTimezone = DOM.timezoneSelect.options[0].value;
        }

        DOM.timezoneSelect.addEventListener('change', async (e) => {
            StateManager.selectedTimezone = e.target.value;
            UIController.updateSidebar();
            
            // 1. Refresh calendar availability (timezone shift might change which days are bookable)
            await CalendarEngine.render();
            
            // 2. If a date is already selected, reload the slots for that date in the new timezone
            if (StateManager.selectedDate) {
                SlotEngine.loadSlots();
            }
        });

        // Setup Duration Toggle
        DOM.durationBtns.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                DOM.durationBtns.forEach(b => b.classList.remove('active'));
                const targetBtn = e.currentTarget;
                targetBtn.classList.add('active');

                const duration = parseInt(targetBtn.dataset.duration);
                StateManager.selectedDuration = duration;

                // Map duration to meetingTypeId (1: 15m, 2: 30m)
                StateManager.meetingTypeId = duration === 15 ? 1 : 2;

                UIController.updateSidebar();

                // 1. Refresh calendar availability for the new duration
                await CalendarEngine.render();

                // 2. If a date is already selected, reload the slots for that date
                if (StateManager.selectedDate) {
                    SlotEngine.loadSlots();
                }
            });
        });
    };

    initExtras();

    // ---- Event Listeners (Use Delegation for Reliability) ----
    DOM.triggers.forEach(trigger => {
        trigger.addEventListener('click', async (e) => {
            e.preventDefault();
            await UIController.openModal();
        });
    });

    DOM.closeBtn.addEventListener('click', () => UIController.closeModal());
    DOM.overlay.addEventListener('click', () => UIController.closeModal());

    DOM.btnBackToSlots.addEventListener('click', () => {
        StateManager.selectedTime = null;
        UIController.updateSidebar();
        UIController.showStep(0); // Back to Split View
    });

    DOM.btnCloseSuccess.addEventListener('click', () => {
        UIController.closeModal();
    });

    FormHandler.init();
});
