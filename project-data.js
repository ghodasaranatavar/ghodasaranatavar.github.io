const projectData = [
    {
        "id": 1,
        "title": "Salesforce SMS Automation & Lead Engagement Platform",
        "challenge": {
            "icon": "ph ph-chats-circle",
            "title": "Stagnant Lead Engagement",
            "description": "Manual follow-ups were causing 40% of real estate leads to go cold before an agent could reach them."
        },
        "niche": "Real Estate & Sales Automation",
        "myRole": "Lead Salesforce Architect & Integration Engineer",
        "technicalComplexity": [
            "High-Volume Asynchronous Processing",
            "Real-Time API Orchestration",
            "Event-Driven Workflows"
        ],
        "whoIsThisFor": "Designed for sales organizations requiring automated lead engagement and high-volume communication without manual coordination.",
        "metricsPreview": [
            "85% Faster Lead Engagement",
            "10k+ Automated Daily SMS",
            "Zero Manual Response Tracking"
        ],
        "client": {
            "industry": "Real Estate Technology",
            "size": "Enterprise",
            "location": "Remote"
        },
        "businessContext": "A high-growth real estate organization struggling to manage thousands of incoming leads across distributed sales teams.",
        "operationalProblem": "Manual SMS outreach within Salesforce was slowing down lead engagement. Sales reps were manually tracking responses, leading to 40% of leads going cold due to delayed follow-ups.",
        "solutionStrategy": "Engineered a scalable Twilio-Salesforce integration that replaces manual outreach with automated, response-based branching workflows. The system uses Apex and LWC to handle high-volume messaging and real-time response listeners.",
        "objective": [
            "Eliminate manual SMS operations in Salesforce Cadence Builder",
            "Implement automated 'Yes/No' branching logic for lead routing",
            "Provide real-time visibility into outreach performance",
            "Support scalable outbound communication for 100+ agents"
        ],
        "solution": {
            "description": "Architected a metadata-driven SMS platform using Apex, LWC, and Twilio, enabling automated sales cadences with intelligent response handling.",
            "highlights": [
                "Built scalable bulk processing architecture using Apex Queueables and Twilio Messaging API",
                "Designed reactive LWC recipient selection tools with dynamic template mapping",
                "Developed a response-listener framework that triggers automated lead routing based on SMS keywords",
                "Optimized high-volume processing to handle 10,000+ outbound messages daily without governor limit issues",
                "Implemented real-time delivery status tracking and engagement dashboards"
            ]
        },
        "techStack": {
            "salesforce": [
                "Sales Cloud",
                "High Velocity Sales",
                "Apex",
                "LWC"
            ],
            "tools": [
                "Flow Builder",
                "REST API",
                "Queueable Apex"
            ],
            "integrations": [
                "Twilio Messaging API",
                "Twilio Webhooks"
            ]
        },
        "results": [
            {
                "metric": "85% Reduction",
                "label": "Manual Outreach Time"
            },
            {
                "metric": "-70%",
                "label": "Missed Follow-up Opportunities"
            },
            {
                "metric": "+40h",
                "label": "Time Saved Per Week"
            },
            {
                "metric": "10,000+",
                "label": "Automated Daily Messages"
            }
        ],
        "feedback": "Amazing experience with Natvarlal. He completed the tasks in a timely manner without any carry-over. He understood the requirements very well.",
        "takeaways": [
            "Asynchronous processing is critical for high-volume communication systems.",
            "Response-based automation dramatically improves sales team throughput.",
            "Real-time visibility reduces lead leakage by 60%."
        ],
        "gallery": [
            {
                "url": "assets/images/projects/sms-flow.png",
                "caption": "Event-Driven SMS Automation Logic"
            }
        ],
        "seo": {
            "description": "Scalable Salesforce SMS automation platform using Twilio for high-volume real estate lead engagement and response tracking.",
            "keywords": "Salesforce, SMS Automation, Twilio Integration, Real Estate CRM, Lead Engagement, Apex"
        },
        "homepageFeatured": {
            "isFeatured": true,
            "outcome": "Qualify Leads 24/7 and Reduce Missed Opportunities by 70%",
            "metrics": [
                {
                    "icon": "ph ph-check-circle",
                    "value": "-70% Missed Leads"
                },
                {
                    "icon": "ph ph-clock",
                    "value": "+40h Saved/Week"
                }
            ],
            "icon": "ph ph-rocket-launch",
            "accentColor": "var(--lab-palette-primary-main)"
        }
    },
    {
        "id": 2,
        "title": "Enterprise Gemini AI Research & OCR Builder Integration",
        "challenge": {
            "icon": "ph ph-brain",
            "title": "Research Information Overload",
            "description": "Sales teams were losing 10+ hours weekly on manual account research and fragmented insight gathering."
        },
        "niche": "AI-Powered CRM Intelligence",
        "myRole": "AI Solutions Architect",
        "technicalComplexity": [
            "Generative AI Integration",
            "Prompt Engineering Framework",
            "Reactive UI Design"
        ],
        "whoIsThisFor": "Best for organizations needing to turn raw CRM data into structured research insights using Generative AI within the Salesforce UI.",
        "metricsPreview": [
            "90% Faster Account Research",
            "Standardized AI Prompts",
            "Structured Research Storage"
        ],
        "client": {
            "industry": "Professional Services / SaaS",
            "size": "Mid-size",
            "location": "Remote"
        },
        "businessContext": "A professional services team spending 10+ hours weekly per agent on manual account research and insight gathering.",
        "operationalProblem": "Teams were using ChatGPT externally, leading to fragmented data, inconsistent research quality, and a lack of structured storage within Salesforce for long-term account intelligence.",
        "solutionStrategy": "Built a native Salesforce-Gemini AI integration that centralizes prompt management and research storage. This allowed agents to trigger research directly from account records and save structured insights back to the database.",
        "objective": [
            "Centralize AI prompt management to ensure research consistency",
            "Eliminate external copy-pasting of AI insights",
            "Enable structured storage of AI-generated account research",
            "Improve research speed and quality across the organization"
        ],
        "solution": {
            "description": "Developed a custom Salesforce AI platform (OCR Builder) integrating Google Gemini API with a reusable prompt framework and reactive LWC interfaces.",
            "highlights": [
                "Built 'OCR Builder' - a custom engine for extracting structured data from documents using Gemini AI",
                "Designed a metadata-driven prompt manager allowing admins to update AI instructions without code",
                "Built reactive LWC research interfaces that provide real-time AI response rendering",
                "Implemented secure Apex REST callouts with robust JSON parsing for Gemini response mapping",
                "Enabled editable AI-generated insights for human-in-the-loop verification",
                "Architected a custom data model for historical research tracking and versioning"
            ]
        },
        "techStack": {
            "salesforce": [
                "Sales Cloud",
                "Experience Cloud",
                "Apex",
                "LWC"
            ],
            "tools": [
                "REST API",
                "Custom Metadata Types",
                "JSON Parsing"
            ],
            "integrations": [
                "Google Gemini AI API"
            ]
        },
        "results": [
            {
                "metric": "+45%",
                "label": "Research Accuracy Gain"
            },
            {
                "metric": "10h -> 1h",
                "label": "Weekly Research Time"
            },
            {
                "metric": "0",
                "label": "Page Reloads Required"
            },
            {
                "metric": "100%",
                "label": "Research Standardization"
            }
        ],
        "feedback": "Natavar was one of the best contractors I have hired. He was quick to respond and very knowledgeable when it came to Salesforce. I would recommend him to anyone.",
        "takeaways": [
            "In-platform AI reduces context switching and improves user adoption.",
            "Metadata-driven prompt management enables rapid AI experimentation.",
            "Structured storage is essential for turning AI outputs into long-term business intelligence."
        ],
        "gallery": [
            {
                "url": "assets/images/projects/OCR Builder.png",
                "caption": "OCR Builder - AI Research & Insights Interface"
            },
            {
                "url": "assets/images/projects/OCR Builder.svg",
                "caption": "OCR Builder - AI Research & Insights Architecture"
            },
            {
                "url": "assets/images/projects/Cadence Builder.svg",
                "caption": "New Detail Visual"
            }
        ],
        "seo": {
            "description": "Enterprise Salesforce integration with Google Gemini AI for automated account research and structured insight generation.",
            "keywords": "Salesforce, Gemini AI Integration, Generative AI CRM, Prompt Engineering, Account Research"
        },
        "homepageFeatured": {
            "isFeatured": true,
            "outcome": "Increase Research Accuracy by 45% and Automate Client Insights",
            "metrics": [
                {
                    "icon": "ph ph-chart-line-up",
                    "value": "+45% Accuracy"
                },
                {
                    "icon": "ph ph-lightning",
                    "value": "0 Page Reloads"
                }
            ],
            "icon": "ph ph-robot",
            "accentColor": "var(--lab-palette-accent-pink)"
        }
    },
    {
        "id": 3,
        "title": "Scalable Enterprise Automation & Metadata Framework",
        "challenge": {
            "icon": "ph ph-stack",
            "title": "Technical Debt & Deployment Latency",
            "description": "Hardcoded business logic in enterprise environments was causing frequent failures and expensive maintenance cycles."
        },
        "niche": "Enterprise System Stability",
        "myRole": "Salesforce Architect",
        "technicalComplexity": [
            "Metadata-Driven Architecture",
            "Batch Apex Optimization",
            "Scalable System Design"
        ],
        "whoIsThisFor": "Enterprises managing high-volume data processing who need to replace unstable, hardcoded workflows with a scalable, configuration-based engine.",
        "metricsPreview": [
            "99.9% Batch Job Stability",
            "Zero Hardcoded Logic",
            "60% Faster Process Onboarding"
        ],
        "client": {
            "industry": "IT Services",
            "size": "Enterprise",
            "location": "Global"
        },
        "businessContext": "An enterprise Salesforce environment plagued by failing batch jobs and expensive maintenance due to hardcoded business logic.",
        "operationalProblem": "Frequent scheduler failures and manual intervention requirements were slowing down business operations. Every process change required a full deployment cycle.",
        "solutionStrategy": "Re-architected the automation layer using a metadata-driven framework. This decoupled business logic from Apex code, allowing admins to configure field mappings and processing rules without developer involvement.",
        "objective": [
            "Stabilize high-volume batch and scheduler execution",
            "Replace hardcoded logic with configurable Metadata Types",
            "Reduce deployment frequency for simple business process changes",
            "Automate error handling and operational notifications"
        ],
        "solution": {
            "description": "Engineered a scalable automation engine leveraging Custom Metadata and asynchronous Apex to stabilize global enterprise operations.",
            "highlights": [
                "Architected a metadata-driven field mapping framework for dynamic record processing",
                "Optimized Batch Apex and Queueable chains to handle millions of records daily",
                "Implemented a custom error-logging framework with automated Slack/Email alerts",
                "Built configuration interfaces for admins to manage business rules without code",
                "Streamlined API synchronization with external enterprise systems via secure REST endpoints"
            ]
        },
        "techStack": {
            "salesforce": [
                "Sales Cloud",
                "Service Cloud",
                "Apex"
            ],
            "tools": [
                "Batch Apex",
                "Queueable Apex",
                "Custom Metadata",
                "Flow"
            ],
            "integrations": [
                "Enterprise REST APIs"
            ]
        },
        "results": [
            {
                "metric": "99.9%",
                "label": "System Stability Gain"
            },
            {
                "metric": "60% Faster",
                "label": "Process Delivery Speed"
            },
            {
                "metric": "Zero",
                "label": "Manual Intervention"
            },
            {
                "metric": "Millions",
                "label": "Daily Records Processed"
            }
        ],
        "feedback": "Committed and Quick Response on Issues addressed. Will definitely hire Natavar again for all requirements of salesforce. Good understanding on scope and Quality of work is very good.",
        "takeaways": [
            "Configuration over code reduces long-term technical debt.",
            "Asynchronous optimization is the foundation of enterprise stability.",
            "Automated error handling is critical for mission-critical systems."
        ],
        "seo": {
            "description": "Scalable enterprise Salesforce automation using metadata-driven architecture to improve system stability and batch processing.",
            "keywords": "Salesforce Automation, Metadata-Driven, Batch Apex, Enterprise CRM, System Stability"
        },
        "gallery": [],
        "homepageFeatured": {
            "isFeatured": true,
            "outcome": "Decouple Logic from Code and Improve System Reliability by 99.9%",
            "metrics": [
                {
                    "icon": "ph ph-shield-check",
                    "value": "99.9% Stability"
                },
                {
                    "icon": "ph ph-gauge",
                    "value": "60% Faster Delivery"
                }
            ],
            "icon": "ph ph-gear-six",
            "accentColor": "var(--lab-palette-accent-green)"
        }
    },
    {
        "id": 4,
        "title": "Global Certification & LMS Experience Platform",
        "challenge": {
            "icon": "ph ph-certificate",
            "title": "Manual Certification Backlogs",
            "description": "Paper-based certification workflows were creating weeks of delays and poor document visibility for students."
        },
        "niche": "Education & Onboarding Automation",
        "myRole": "Senior Salesforce Developer",
        "technicalComplexity": [
            "Experience Cloud Customization",
            "Azure File Orchestration",
            "Automated PDF Generation"
        ],
        "whoIsThisFor": "Organizations managing global training, certifications, and document-heavy onboarding workflows.",
        "metricsPreview": [
            "70% Faster Certification",
            "Automated Document Workflows",
            "Unified Training Experience"
        ],
        "client": {
            "industry": "Global Training & Education",
            "size": "Enterprise",
            "location": "Global"
        },
        "businessContext": "A global training organization managing thousands of certifications and training documents manually across different regions.",
        "operationalProblem": "Certification processing was fragmented. Applicants had to email documents, and staff manually generated PDFs, leading to weeks of delay in issuing certifications and poor document visibility.",
        "solutionStrategy": "Built a centralized Experience Cloud portal that automated the entire lifecycle\u2014from application and document upload (Azure) to automated PDF certificate generation and delivery.",
        "objective": [
            "Centralize the applicant experience into a secure portal",
            "Automate document storage using Azure File Integration",
            "Eliminate manual PDF certificate generation",
            "Provide real-time visibility into application status"
        ],
        "solution": {
            "description": "Developed a comprehensive LMS and Certification platform using Experience Cloud, integrating Azure for document storage and custom PDF engines.",
            "highlights": [
                "Built custom Experience Cloud components for high-conversion application workflows",
                "Integrated Azure File Storage API for secure, scalable document management",
                "Developed an automated PDF generation engine for instant certificate delivery",
                "Implemented complex state-machine logic for multi-stage application approvals",
                "Optimized Apex test coverage and deployment pipelines for global stability"
            ]
        },
        "techStack": {
            "salesforce": [
                "Experience Cloud",
                "Sales Cloud",
                "Apex",
                "LWC"
            ],
            "tools": [
                "PDF Generation",
                "Flow Orchestration",
                "Azure Integration"
            ],
            "integrations": [
                "Azure Storage API",
                "Payment Gateways"
            ]
        },
        "results": [
            {
                "metric": "70% Faster",
                "label": "Certification Issuance"
            },
            {
                "metric": "100%",
                "label": "Document Visibility"
            },
            {
                "metric": "Automated",
                "label": "PDF Workflow"
            },
            {
                "metric": "Global",
                "label": "Operational Reach"
            }
        ],
        "feedback": "Natvar is a very experienced Salesforce developer and did a great job in my Production org and Partner Community. I will be hiring him again when another project comes up",
        "takeaways": [
            "Experience Cloud is a powerful tool for customer self-service automation.",
            "Integrated storage solutions (Azure) solve Salesforce's file size limitations.",
            "Workflow automation is the key to scaling global education programs."
        ],
        "gallery": [
            {
                "url": "assets/images/projects/LMS - Training Program - White.png",
                "caption": "LMS & Certification - Student Dashboard"
            },
            {
                "url": "assets/images/projects/Yoga Alliance.svg",
                "caption": "Yoga Alliance - LMS & Certification Portal Architecture"
            }
        ],
        "seo": {
            "description": "Global training and certification platform built on Salesforce Experience Cloud with Azure file integration and automated PDF generation.",
            "keywords": "Experience Cloud, LMS, Certification Platform, Azure Integration, PDF Automation, Salesforce Education"
        }
    },
    {
        "id": 5,
        "title": "Enterprise Opportunity & Document Orchestration Platform",
        "challenge": {
            "icon": "ph ph-folders",
            "title": "Disconnected Document Silos",
            "description": "Lack of real-time sync between CRM records and SharePoint was causing version control chaos and file search overhead."
        },
        "niche": "Strategic Sales & Document Management",
        "myRole": "Salesforce Technical Architect",
        "technicalComplexity": [
            "Recursive SharePoint Integration",
            "OAuth API Orchestration",
            "Dynamic Data Table Design"
        ],
        "whoIsThisFor": "Enterprises needing to sync complex CRM opportunities with external document management systems like SharePoint.",
        "metricsPreview": [
            "Unified Document View",
            "Secure OAuth Integration",
            "Automated Sales Workflows"
        ],
        "client": {
            "industry": "Enterprise Services",
            "size": "Enterprise",
            "location": "Global"
        },
        "businessContext": "A sales organization where opportunity data lived in Salesforce, but supporting documents were scattered across unorganized SharePoint folders.",
        "operationalProblem": "Sales teams were losing hours looking for proposals and resumes. There was no real-time sync between CRM records and SharePoint folders, leading to version control issues and operational delays.",
        "solutionStrategy": "Architected a recursive SharePoint-Salesforce integration. Using Apex and secure OAuth, I built a system that automatically creates folder structures in SharePoint based on Salesforce record metadata and displays them natively in the UI.",
        "objective": [
            "Centralize SharePoint documents within the Salesforce record view",
            "Automate folder creation and recursive synchronization",
            "Implement secure, per-user OAuth authentication",
            "Simplify proposal and resume management for sales teams"
        ],
        "solution": {
            "description": "Designed a secure document orchestration platform integrating Microsoft SharePoint with Salesforce using recursive API logic and reactive LWC components.",
            "highlights": [
                "Developed a recursive folder rendering engine to mirror SharePoint hierarchies in LWC",
                "Implemented secure OAuth 2.0 authentication for SharePoint API access",
                "Built metadata-driven field mapping to sync Salesforce record data with SharePoint properties",
                "Developed an automated resume parser integration for recruitment workflows",
                "Optimized Lightning Data Table rendering for large file directories"
            ]
        },
        "techStack": {
            "salesforce": [
                "Sales Cloud",
                "Apex",
                "LWC",
                "SOQL"
            ],
            "tools": [
                "OAuth 2.0",
                "Recursive JS/Apex",
                "REST API"
            ],
            "integrations": [
                "Microsoft SharePoint API",
                "Graph API"
            ]
        },
        "results": [
            {
                "metric": "Unified",
                "label": "Document & CRM Strategy"
            },
            {
                "metric": "Automated",
                "label": "Folder Management"
            },
            {
                "metric": "Secure",
                "label": "API Orchestration"
            },
            {
                "metric": "Eliminated",
                "label": "File Search Overhead"
            }
        ],
        "feedback": "Greatly helped me out with this, really knows a lot when it comes to Salesforce. I will be contacting him in the future if I need help",
        "takeaways": [
            "Recursive logic is essential for mirroring complex external file structures.",
            "Secure authentication (OAuth) is non-negotiable for enterprise document sync.",
            "Metadata-driven mapping improves long-term integration flexibility."
        ],
        "seo": {
            "description": "Enterprise Salesforce SharePoint integration for recursive document orchestration and automated opportunity workflows.",
            "keywords": "SharePoint Integration, Document Management, OAuth, Salesforce Opportunity, Enterprise CRM"
        },
        "gallery": []
    },
    {
        "id": 6,
        "title": "Enterprise Real Estate CRM & MLS Automation Ecosystem",
        "challenge": {
            "icon": "ph ph-exclude",
            "title": "Data Fragmentation Chaos",
            "description": "Managing leads across 5+ disconnected tools was killing productivity and resulting in significant lead leakage."
        },
        "niche": "Real Estate Tech / Transaction Automation",
        "myRole": "Lead Solutions Architect",
        "technicalComplexity": [
            "Multi-Source API Synchronization",
            "Custom Cadence Builder",
            "Digital Signature Orchestration"
        ],
        "whoIsThisFor": "Real estate brokerages and firms needing a unified platform for lead engagement, MLS property data, and transaction management.",
        "metricsPreview": [
            "Unified MLS Property Sync",
            "Automated Sales Cadences",
            "Paperless Transactions"
        ],
        "client": {
            "industry": "Real Estate Technology",
            "size": "Enterprise",
            "location": "Remote"
        },
        "businessContext": "A large brokerage using 5+ disconnected tools for leads, MLS data, calling, signing, and accounting.",
        "operationalProblem": "Data fragmentation was killing productivity. Agents were manually re-entering data into different systems, lead follow-ups were missed, and transaction visibility was non-existent.",
        "solutionStrategy": "Architected a massive 'Single Source of Truth' on Salesforce. This involved building a custom Cadence Builder for automated follow-ups, integrating 3 different MLS APIs, and orchestrating digital signing and accounting workflows.",
        "objective": [
            "Consolidate 5+ tools into a single Salesforce ecosystem",
            "Automate property data synchronization from Bridge & Zillow",
            "Build a custom Cadence engine for timezone-aware SMS/Calling",
            "Enable end-to-end digital transaction and commission management"
        ],
        "solution": {
            "description": "Developed a comprehensive Real Estate ecosystem integrating MLS data, communication services, and digital signing into a unified Salesforce platform.",
            "highlights": [
                "Integrated Bridge Interactive and Zillow APIs for real-time MLS property synchronization",
                "Built a custom 'Cadence Builder' LWC allowing agents to design multi-step automation flows",
                "Orchestrated digital signing workflows with NaturalForms and OpenSign webhooks",
                "Developed timezone-aware SMS/Call automation using Twilio and Dialpad",
                "Integrated QuickBooks for automated commission tracking and financial reporting"
            ]
        },
        "techStack": {
            "salesforce": [
                "Sales Cloud",
                "Experience Cloud",
                "Service Cloud",
                "Apex"
            ],
            "tools": [
                "LWC",
                "Flow Builder",
                "Webhooks",
                "Custom Cadence Logic"
            ],
            "integrations": [
                "Bridge Interactive",
                "Zillow",
                "Twilio",
                "QuickBooks",
                "NaturalForms"
            ]
        },
        "results": [
            {
                "metric": "Unified",
                "label": "Real Estate Ecosystem"
            },
            {
                "metric": "Automated",
                "label": "Lead-to-Close Workflow"
            },
            {
                "metric": "Real-Time",
                "label": "MLS Property Sync"
            },
            {
                "metric": "Paperless",
                "label": "Transaction Management"
            }
        ],
        "feedback": "Natavar is easy to work with and has good critical thinking skills. He will think about what is good for the client, beyond just the exact project scope.",
        "takeaways": [
            "Ecosystem consolidation is the ultimate productivity multiplier.",
            "Custom cadence engines allow for highly specific industry workflows.",
            "API orchestration across 10+ platforms requires robust error handling and logging."
        ],
        "gallery": [
            {
                "url": "assets/images/projects/Cadence Builder Features - White.png",
                "caption": "Custom Cadence Builder - Enterprise Feature Set"
            },
            {
                "url": "assets/images/projects/Cadence Builder.svg",
                "caption": "Custom Cadence Builder - Automation Flow Interface"
            }
        ],
        "seo": {
            "description": "Unified Real Estate CRM ecosystem on Salesforce with MLS synchronization, custom cadences, and transaction automation.",
            "keywords": "Real Estate CRM, MLS Sync, Bridge Interactive, Twilio, Transaction Automation, Salesforce Brokerage"
        }
    },
    {
        "id": 7,
        "title": "Healthcare eCommerce Order & Shipment Automation",
        "challenge": {
            "icon": "ph ph-headset",
            "title": "Support Ticket Bottlenecks",
            "description": "High volumes of manual order tracking inquiries were overwhelming the support team and slowing down fulfillment."
        },
        "niche": "Medical Supply Chain / eCommerce",
        "myRole": "Salesforce Developer & Integration Specialist",
        "technicalComplexity": [
            "ShipStation API Integration",
            "Custom Email Orchestration",
            "Lead-to-Order Automation"
        ],
        "whoIsThisFor": "Medical and dental suppliers needing to automate order fulfillment and customer communication within Salesforce.",
        "metricsPreview": [
            "Automated Shipment Sync",
            "Self-Service Order Portal",
            "Lead Capture Integration"
        ],
        "client": {
            "industry": "Healthcare / Dental eCommerce",
            "size": "Mid-size",
            "location": "Remote"
        },
        "businessContext": "A dental supplier struggling to keep up with order fulfillment and customer inquiries via email.",
        "operationalProblem": "Orders were manually tracked in ShipStation and Salesforce separately. Customers were calling to ask for tracking numbers, and leads from their WordPress site were manually entered by staff.",
        "solutionStrategy": "Built an automated order management bridge. Integrated ShipStation for tracking sync, WordPress for automated lead capture, and Experience Cloud to give customers a self-service portal for tracking their own shipments.",
        "objective": [
            "Automate shipment tracking sync between ShipStation and Salesforce",
            "Centralize customer communication through a custom email composer",
            "Eliminate manual data entry for WordPress web leads",
            "Improve customer experience with a self-service tracking portal"
        ],
        "solution": {
            "description": "Developed an eCommerce automation platform connecting WordPress leads, Salesforce CRM, and ShipStation fulfillment into a unified workflow.",
            "highlights": [
                "Integrated ShipStation APIs for real-time shipment status and tracking number sync",
                "Built a custom LWC Email Composer for personalized customer notifications",
                "Developed a WordPress-to-Salesforce Lead capture bridge using Web-to-Lead and APIs",
                "Designed an Experience Cloud portal for customer order history and tracking",
                "Automated the order lifecycle from lead capture to shipment delivery"
            ]
        },
        "techStack": {
            "salesforce": [
                "Sales Cloud",
                "Experience Cloud",
                "Apex",
                "LWC"
            ],
            "tools": [
                "REST API",
                "Email Service",
                "Flow Builder"
            ],
            "integrations": [
                "ShipStation API",
                "WordPress API",
                "Web-to-Lead"
            ]
        },
        "results": [
            {
                "metric": "Automated",
                "label": "Shipment Tracking"
            },
            {
                "metric": "Self-Service",
                "label": "Customer Experience"
            },
            {
                "metric": "Real-Time",
                "label": "Lead Capture"
            },
            {
                "metric": "Reduced",
                "label": "Customer Support Calls"
            }
        ],
        "feedback": "He was really helpful and really knowledgeable, a great communicator, and was able to provide helpful documentation. Will hire again!!",
        "takeaways": [
            "Integrating the fulfillment layer (ShipStation) is critical for eCommerce visibility.",
            "Customer self-service significantly reduces operational support overhead.",
            "Lead-to-order automation accelerates the sales cycle."
        ],
        "seo": {
            "description": "Healthcare eCommerce automation on Salesforce Experience Cloud integrating ShipStation and WordPress lead capture.",
            "keywords": "Salesforce eCommerce, ShipStation Integration, Healthcare CRM, Order Management, Experience Cloud"
        },
        "gallery": []
    },
    {
        "id": 8,
        "title": "Public Sector Licensing & Permit Modernization",
        "challenge": {
            "icon": "ph ph-buildings",
            "title": "Legacy Permit Hurdles",
            "description": "Slow, multi-department paper approvals were causing months of permit backlogs for state citizens."
        },
        "niche": "Government Solutions / Compliance",
        "myRole": "Technical Solutions Consultant",
        "technicalComplexity": [
            "Public Sector Solutions (PSS)",
            "OmniStudio",
            "Complex Approval Orchestration"
        ],
        "whoIsThisFor": "Government agencies requiring a modernized, digital approach to citizen licensing and permit management.",
        "metricsPreview": [
            "Digital Citizen Portal",
            "Automated Permit Approvals",
            "Compliance Visibility"
        ],
        "client": {
            "industry": "Government / Public Sector",
            "size": "Enterprise",
            "location": "Remote"
        },
        "businessContext": "A government agency processing thousands of paper-based permits and licenses through manual, multi-department approvals.",
        "operationalProblem": "Permit approvals were taking months. Citizens had no way to track status, and agency staff were overwhelmed by paper files and disconnected departmental silos.",
        "solutionStrategy": "Implemented Salesforce Public Sector Solutions (PSS) to digitize the entire permit lifecycle. I built a citizen portal for applications, automated the routing of approvals between departments, and enabled digital compliance tracking.",
        "objective": [
            "Digitize the manual permit application process",
            "Enable citizen self-service and application tracking",
            "Automate complex multi-department approval workflows",
            "Provide operational visibility into permit processing backlogs"
        ],
        "solution": {
            "description": "Modernized government licensing operations using Salesforce Public Sector Solutions, OmniStudio, and automated approval orchestration.",
            "highlights": [
                "Implemented PSS data model for licensing, permitting, and compliance",
                "Built citizen-facing Experience Cloud portals for application submission",
                "Developed automated approval workflows using Flow and OmniStudio",
                "Designed inspection scheduling and field-staff status management tools",
                "Optimized role-based access to ensure public sector security and compliance"
            ]
        },
        "techStack": {
            "salesforce": [
                "Public Sector Solutions",
                "Experience Cloud",
                "OmniStudio"
            ],
            "tools": [
                "Apex",
                "LWC",
                "Flow Builder",
                "Compliance Tracking"
            ],
            "integrations": [
                "Government Compliance APIs",
                "External Document Storage"
            ]
        },
        "results": [
            {
                "metric": "Months -> Days",
                "label": "Permit Approval Time"
            },
            {
                "metric": "100% Digital",
                "label": "Citizen Application Experience"
            },
            {
                "metric": "Centralized",
                "label": "Agency Operational Visibility"
            },
            {
                "metric": "Automated",
                "label": "Compliance Verification"
            }
        ],
        "feedback": "Natavar was very quick with his experience and helped me out to fix the issue in no time. I recommend him to everyone.",
        "takeaways": [
            "Public Sector Solutions accelerates government digital transformation initiatives.",
            "Citizen self-service portals improve operational efficiency and transparency.",
            "Workflow automation significantly reduces permit processing delays.",
            "Secure role-based architecture is critical for government platforms."
        ],
        "seo": {
            "description": "Modernizing government licensing and permitting with Salesforce Public Sector Solutions and OmniStudio for citizen self-service.",
            "keywords": "Public Sector Solutions, Government CRM, OmniStudio, Permit Management, Licensing Automation"
        },
        "gallery": []
    }
];

// Export to window for global access
window.projectData = projectData;

// Backward Compatibility Alias
window.PORTFOLIO_DATA = {
    projects: projectData
};
