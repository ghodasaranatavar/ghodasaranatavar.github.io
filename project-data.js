const projectData = {
    1: {
        title: "Built Bulk SMS Automation for Salesforce Cadence Builder Reducing Manual Effort by 80%",
        client: {
            industry: "Enterprise / Sales Technology",
            size: "Enterprise",
            location: "Global / Remote"
        },
        problem: {
            description: "The client lacked a native way to send bulk SMS messages within the Salesforce Cadence Builder. Sales teams were forced to manually send individual messages, leading to significant delays, data entry errors, and a complete lack of response tracking.",
            impact: "Manual processes were consuming over 40 hours per week per team, causing a bottleneck in the sales pipeline and preventing scalable outreach."
        },
        objective: [
            "Enable multi-recipient SMS filtering and selection",
            "Implement dynamic template-to-recipient mapping",
            "Automate response detection and branching logic",
            "Ensure robust delivery tracking and error handling"
        ],
        solution: {
            description: "I architected and delivered a full-stack enhancement to the Salesforce Cadence Builder. The solution included a custom LWC for recipient selection and an Apex-driven backend that handled bulk dispatch with real-time response listeners.",
            highlights: [
                "Custom LWC UI for dynamic recipient management",
                "Advanced Apex logic for high-volume safe bulk sending",
                "Response Listener that classifies replies (Yes/No/Custom) for branching",
                "Integrated branching logic to route recipients based on their SMS responses"
            ]
        },
        techStack: {
            salesforce: ["Sales Cloud", "Logistics Cloud"],
            tools: ["Apex", "LWC", "Flow Builder", "Twilio SMS", "REST API"],
            integrations: ["Twilio Messaging API", "Salesforce High Velocity Sales"]
        },
        results: [
            { metric: "80%", label: "Reduction in Manual Effort" },
            { metric: "37+", label: "Automated Branching Paths" },
            { metric: "100%", label: "Real-time Response Tracking" },
            { metric: "120hr", label: "Professional Delivery Time" }
        ],
        feedback: "The Bulk SMS functionality transformed our outreach strategy. We can now reach 10x more leads with the same headcount.",
        takeaways: [
            "Scalable architecture is essential for high-volume sales cadences.",
            "User experience in recipient selection directly impacts system adoption.",
            "Reply-based branching is a game-changer for automated sales journeys."
        ]
    },
    2: {
        title: "Built AI-Based Research Insights with Gemini Integration Increasing Research Accuracy by 45%",
        client: {
            industry: "High-Tech / SaaS",
            size: "Startup / Mid-size",
            location: "USA (Remote)"
        },
        problem: {
            description: "The existing Salesforce Gemini integration was limited to single-question research tasks with no ability to manage prompts or store historical research insights effectively. Users had to re-enter prompts repeatedly, leading to inconsistent AI outputs.",
            impact: "Research accuracy was low, and the lack of structured data storage made it impossible to leverage AI insights across different account teams."
        },
        objective: [
            "Implement multi-question and prompt storage on Account records",
            "Develop a reactive UI for real-time question selection",
            "Enable editable prompts for fine-tuned AI interaction",
            "Ensure 85%+ test coverage for backend reliability"
        ],
        solution: {
            description: "I enhanced the existing Gemini integration by rebuilding the data model and UI layers. The new system allows users to select from a library of research questions, modify prompts on-the-fly, and save structured AI responses directly to Salesforce fields.",
            highlights: [
                "Advanced Prompt Management with editable input controls",
                "Reactive Question Counter and real-time search functionality",
                "Structured Gemini response handling for clean UI rendering",
                "Optimized Apex controller with robust JSON parsing and error handling"
            ]
        },
        techStack: {
            salesforce: ["Sales Cloud", "Experience Cloud"],
            tools: ["Apex", "LWC", "Gemini API", "SOQL", "REST Wrappers"],
            integrations: ["Google Gemini Pro AI", "Custom Apex Callouts"]
        },
        results: [
            { metric: "45%", label: "Increase in Research Accuracy" },
            { metric: "0", label: "Page Reloads (Reactive UI)" },
            { metric: "85%+", label: "Apex Unit Test Coverage" },
            { metric: "9hr", label: "Rapid MVP Delivery" }
        ],
        feedback: "The ability to customize prompts before sending them to Gemini has drastically improved the quality of our account research.",
        takeaways: [
            "AI transparency (editable prompts) significantly builds user trust.",
            "Reactive UIs in Salesforce (via LWC) are crucial for high-speed AI tasks.",
            "Robust test classes are non-negotiable for external API integrations."
        ]
    }
};

window.projectData = projectData;
