/**
 * ================================================================================
 * MODULE SPECIFICATION (RULE[user_global]): Case Study Static Data Repository
 * 1. Implementation Code: c:/xampp/htdocs/profile/project-data.js
 * 2. Folder Structure:
 *    c:/xampp/htdocs/profile/
 *      - project-data.js
 *      - project-detail.js
 *      - project-detail.html
 * 3. API Routes: N/A (Static JS repository)
 * 4. Browser Testing Instructions:
 *    - Verify database arrays are loaded inside project-detail.js by looking up global window.projectData.
 *    - Open browser dev console on project-detail.html and type `window.projectData` to view values.
 * 5. Expected Output: Fully loaded array of project objects with meta metadata, names, niches, and complexity tags.
 * ================================================================================
 */

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
                "url": "assets/images/projects/1.Salesforce SMS Automation & Lead Engagement Platform Blue.png",
                "caption": "Event-Driven SMS Automation Logic",
                "showOnHub": true,
                "showOnDetail": true
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
        },
        "detailFeatured": false,
        "hubFeatured": false,
        "aiConfig": {
            "title": "SMS Automation Advisor",
            "primaryCTA": "Generate SMS Strategy",
            "tools": [
                "roi-estimator",
                "discovery-call-prep",
                "architect-assistant",
                "agenda-generator"
            ],
            "context": "Lead engagement automation for Real Estate using Twilio and Salesforce."
        },
        "architecture": "graph TD\n    subgraph Salesforce\n        Lead[Lead/Contact] --> Cadence[Sales Cadence]\n        Cadence --> ApexQ[Apex Queueable]\n        ApexQ --> Outbound[Twilio REST Outbound]\n    end\n    Outbound --> Twilio[Twilio API]\n    Twilio --> Recipient[Mobile Recipient]\n    Recipient --> Reply[SMS Reply]\n    Reply --> Webhook[Twilio Webhook]\n    subgraph Salesforce\n        Webhook --> Listener[Apex REST Listener]\n        Listener --> Router[Intelligent Lead Router]\n        Router --> Task[Create Task/Update Status]\n    end"
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
            "industry": "Professional Services",
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
                "url": "assets/images/projects/2.Gemini_ResearchAI_with_Blue.svg",
                "caption": "OCR Builder - AI Research & Insights Interface",
                "showOnHub": true,
                "showOnDetail": true
            }
        ],
        "seo": {
            "description": "Enterprise Salesforce integration with Google Gemini AI for automated account research and structured insight generation.",
            "keywords": "Enterprise, Gemini, AI, Research, &, OCR, Builder, Integration, Salesforce, Architecture"
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
        },
        "detailFeatured": false,
        "hubFeatured": false,
        "aiConfig": {
            "title": "AI Research Architect",
            "primaryCTA": "Plan AI Implementation",
            "tools": [
                "cloud-recommendation",
                "integration-advisor",
                "architect-assistant",
                "roi-estimator"
            ],
            "context": "Enterprise Gemini AI integration for research and OCR automation."
        },
        "architecture": "graph LR\n    subgraph Salesforce_UI\n        LWC[LWC Research Panel] --> PromptMgr[Metadata Prompt Manager]\n    end\n    subgraph Salesforce_Backend\n        PromptMgr --> ApexREST[Apex REST Callout]\n    end\n    ApexREST --> Gemini[Google Gemini AI API]\n    Gemini --> ApexREST\n    subgraph Salesforce_Backend\n        ApexREST --> Parser[JSON Response Parser]\n        Parser --> Storage[Structured Research Storage]\n    end\n    Storage --> LWC"
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
            "location": "Remote"
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
        "gallery": [
            {
                "url": "assets/images/projects/3.Scalable Enterprise Automation & Metadata Framework Blue.png",
                "caption": "Project Visual",
                "showOnHub": true,
                "showOnDetail": true
            }
        ],
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
        },
        "detailFeatured": true,
        "hubFeatured": false,
        "aiConfig": {
            "title": "Enterprise Logic Consultant",
            "primaryCTA": "Optimize System Stability",
            "tools": [
                "architect-assistant",
                "integration-advisor",
                "agenda-generator",
                "discovery-call-prep"
            ],
            "context": "Scalable metadata-driven frameworks and batch optimization."
        },
        "architecture": "graph TD\n    subgraph Configuration\n        Config[\"Custom Metadata Types\"] --> Mapping[\"Dynamic Field Mappings\"]\n    end\n    subgraph Execution_Engine\n        Trigger[\"Trigger / Flow\"] --> Dispatcher[\"Queueable Dispatcher\"]\n        Dispatcher --> Batch[\"Batch Apex Execution\"]\n        Batch --> Engine[\"Dynamic Action Engine\"]\n        Mapping --> Engine\n    end\n    subgraph Outputs\n        Engine --> APIs[\"Enterprise REST APIs\"]\n        Engine --> Log[\"Custom Error Logger\"]\n        Log --> Slack[\"Slack/Email Alerts\"]\n    end"
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
                "url": "assets/images/projects/4.Global Certification & LMS Experience Platform - Blue.png",
                "caption": "LMS & Certification - Student Dashboard",
                "showOnHub": true,
                "showOnDetail": true
            }
        ],
        "seo": {
            "description": "Global training and certification platform built on Salesforce Experience Cloud with Azure file integration and automated PDF generation.",
            "keywords": "Experience Cloud, LMS, Certification Platform, Azure Integration, PDF Automation, Salesforce Education"
        },
        "homepageFeatured": {
            "isFeatured": false
        },
        "detailFeatured": false,
        "hubFeatured": false,
        "architecture": "graph LR\n    subgraph Client_Experience\n        User[\"Applicant (Experience Cloud Portal)\"] --> Upload[\"LWC Upload Component\"]\n        User --> Form[\"Application Form LWC\"]\n    end\n    subgraph File_Management\n        Upload --> AzureREST[\"Azure Storage REST Callout\"]\n        AzureREST --> AzureBlob[\"Azure Blob Storage\"]\n    end\n    subgraph Application_Flow\n        Form --> Approval[\"State-Machine Approval Flow\"]\n        Approval --> TriggerPDF[\"Apex PDF Trigger\"]\n    end\n    subgraph Certificate_Delivery\n        TriggerPDF --> PDFEngine[\"Automated PDF Engine\"]\n        PDFEngine --> Email[\"Instant Certificate Delivery Email\"]\n    end"
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
        "gallery": [
            {
                "url": "assets/images/projects/5.Opportunity & Document Orchestration Blue.svg",
                "caption": "Project Visual",
                "showOnHub": true,
                "showOnDetail": true
            }
        ],
        "homepageFeatured": {
            "isFeatured": false
        },
        "detailFeatured": false,
        "hubFeatured": false,
        "architecture": "graph TD\n    subgraph Salesforce_UI\n        LWC[\"LWC Document Explorer\"] --> Auth[\"OAuth 2.0 Auth Handler\"]\n    end\n    subgraph SharePoint_API\n        Auth --> GraphAPI[\"MS Graph API / SharePoint\"]\n    end\n    subgraph Folder_Orchestration\n        OppTrigger[\"Opportunity Creation Flow\"] --> ApexOrch[\"Apex Folder Orchestrator\"]\n        ApexOrch --> RecursiveSync[\"Recursive Folder Builder (Graph API)\"]\n        RecursiveSync --> SharePointFolder[\"SharePoint Folder Hierarchy\"]\n    end\n    subgraph Native_Document_Viewer\n        SharePointFolder --> LWC\n    end"
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
                "url": "assets/images/projects/6.Real Estate CRM & MLS Automation Blue.png",
                "caption": "Custom Cadence Builder - Enterprise Feature Set",
                "showOnHub": true,
                "showOnDetail": true
            }
        ],
        "seo": {
            "description": "Unified Real Estate CRM ecosystem on Salesforce with MLS synchronization, custom cadences, and transaction automation.",
            "keywords": "Real Estate CRM, MLS Sync, Bridge Interactive, Twilio, Transaction Automation, Salesforce Brokerage"
        },
        "homepageFeatured": {
            "isFeatured": false
        },
        "detailFeatured": false,
        "hubFeatured": true,
        "architecture": "graph TD\n    subgraph Property_Sync\n        Bridge[\"Bridge Interactive API\"] --> MLS[\"MLS Property Sync Engine\"]\n        Zillow[\"Zillow API\"] --> MLS\n        MLS --> SFDb[\"Salesforce Database\"]\n    end\n    subgraph Lead_Nurture\n        SFDb --> Cadence[\"Custom Cadence Builder LWC\"]\n        Cadence --> TwilioAPI[\"Twilio SMS/Call API\"]\n    end\n    subgraph Transaction_Flow\n        SFDb --> OpenSign[\"NaturalForms / OpenSign Webhooks\"]\n        OpenSign --> Transaction[\"Digital Transaction Management\"]\n        Transaction --> QB[\"QuickBooks API (Commission Sync)\"]\n    end"
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
        "gallery": [
            {
                "url": "assets/images/projects/7.Healthcare eCommerce Order & Shipment Automation Blue.svg",
                "caption": "Healthcare Order Lifecycle & Shipment Tracking Automation",
                "showOnHub": true,
                "showOnDetail": true
            }
        ],
        "homepageFeatured": {
            "isFeatured": false
        },
        "detailFeatured": false,
        "hubFeatured": false,
        "architecture": "graph LR\n    subgraph Lead_Inflow\n        WP[\"WordPress Dental Site\"] --> W2L[\"Web-to-Lead / REST API\"]\n        W2L --> SF[\"Salesforce CRM\"]\n    end\n    subgraph Order_Fulfillment\n        SF --> OrderAPI[\"ShipStation REST API\"]\n        OrderAPI --> ShipStation[\"ShipStation Fulfillment\"]\n    end\n    subgraph Shipping_Sync\n        ShipStation --> Webhook[\"Shipment Tracking Webhook\"]\n        Webhook --> TrackingSync[\"Apex Tracking Sync Engine\"]\n        TrackingSync --> Portal[\"Experience Cloud Customer Portal\"]\n    end"
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
        "gallery": [
            {
                "url": "assets/images/projects/8.Public Sector Licensing & Permit Modernization Blue.png",
                "caption": "Project Visual",
                "showOnHub": true,
                "showOnDetail": true
            }
        ],
        "homepageFeatured": {
            "isFeatured": false
        },
        "detailFeatured": false,
        "hubFeatured": false,
        "architecture": "graph TD\n    subgraph Citizen_Experience\n        Citizen[\"Citizen (Experience Cloud)\"] --> App[\"OmniScript Form (OmniStudio)\"]\n    end\n    subgraph Public_Sector_Solutions\n        App --> PSS[\"PSS Data Model (Licenses/Permits)\"]\n        PSS --> Routing[\"Flow / OmniStudio Integration Procedures\"]\n    end\n    subgraph Regulatory_Compliance\n        Routing --> Approval[\"Multi-Department Approval Matrix\"]\n        Approval --> Schedule[\"Field Inspector Scheduler LWC\"]\n        Schedule --> Verify[\"Compliance Verification & Permit Issuance\"]\n    end"
    },
    {
        "id": 9,
        "title": "Slack → Salesforce → QuickBooks Time Workforce Automation",
        "challenge": {
            "icon": "ph ph-timer",
            "title": "Disconnected Workforce Time Tracking",
            "description": "Manual timesheet entry across Slack, Salesforce, and payroll systems was creating payroll inaccuracies and operational inefficiencies."
        },
        "niche": "Field Service / Workforce Automation",
        "myRole": "Lead Salesforce Integration Architect & Automation Engineer",
        "technicalComplexity": [
            "Slack Workflow Automation",
            "QuickBooks Time API Synchronization",
            "Event-Driven Workforce Tracking"
        ],
        "whoIsThisFor": "Organizations using Slack and Salesforce Field Service Lightning that require automated employee time tracking and payroll synchronization.",
        "metricsPreview": [
            "Automated Clock-In/Out Tracking",
            "Real-Time QBT Synchronization",
            "Zero Manual Timesheets"
        ],
        "client": {
            "industry": "Field Service Operations",
            "size": "Enterprise",
            "location": "Remote"
        },
        "businessContext": "A field service organization managing distributed employees through Slack while tracking workforce operations in Salesforce and payroll in QuickBooks Time.",
        "operationalProblem": "Employees were manually entering timesheets after completing work, causing payroll discrepancies, missing labor visibility, and delayed reporting.",
        "solutionStrategy": "Architected a Slack-to-Salesforce workforce automation platform integrated with QuickBooks Time to automate employee clock-in, clock-out, and timesheet synchronization workflows.",
        "objective": [
            "Automate employee clock-in and clock-out workflows from Slack",
            "Synchronize Slack users and channels into Salesforce automatically",
            "Create and maintain QuickBooks Time users and job codes dynamically",
            "Eliminate manual timesheet entry processes",
            "Provide real-time workforce visibility through Salesforce dashboards",
            "Establish Twilio SMS integrations for automated two-way customer messaging",
            "Build call tracking setup with direct source-to-lead attribution in Salesforce",
            "Integrate Wix website lead intake with automated CRM capture and pipeline routing"
        ],
        "solution": {
            "description": "Developed a real-time workforce automation ecosystem integrating Slack, Salesforce Field Service Lightning, and QuickBooks Time using asynchronous event-driven architecture.",
            "highlights": [
                "Built Slack slash-command and interactive workflows for workforce clock-in and clock-out operations",
                "Developed Salesforce middleware layer for Slack event ingestion and synchronization",
                "Implemented automated QuickBooks Time user provisioning and job code synchronization",
                "Built Queueable Apex synchronization framework for scalable timesheet processing",
                "Designed Salesforce dashboards for labor analytics and workforce visibility",
                "Implemented retry-based error handling and audit logging framework for failed API operations",
                "Enabled mobile and desktop workforce tracking without requiring additional applications",
                "Developed Wix lead capture webhook processing engine for immediate CRM entry",
                "Integrated Twilio SMS Gateway for two-way notifications and status alerts",
                "Implemented call tracking log ingestion, transforming calls directly to routed CRM leads",
                "Configured Mailchimp marketing sync for automated list updating and campaign tracking"
            ]
        },
        "techStack": {
            "salesforce": [
                "Field Service Lightning",
                "Sales Cloud",
                "Service Cloud",
                "Apex",
                "LWC"
            ],
            "tools": [
                "Queueable Apex",
                "Platform Events",
                "Named Credentials",
                "REST APIs",
                "Flow Builder"
            ],
            "integrations": [
                "Slack API",
                "Slack Events API",
                "QuickBooks Time API",
                "Webhooks",
                "Twilio Messaging API",
                "Wix Integration",
                "Call Tracking API",
                "Mailchimp API"
            ]
        },
        "results": [
            {
                "metric": "100% Automated",
                "label": "Timesheet Synchronization"
            },
            {
                "metric": "Real-Time",
                "label": "Workforce Visibility"
            },
            {
                "metric": "Zero Manual Entry",
                "label": "Payroll Tracking"
            },
            {
                "metric": "Centralized",
                "label": "Slack-to-QBT Operations"
            }
        ],
        "feedback": "Natavar architected an extremely scalable workforce tracking system integrating Slack, Salesforce, and QuickBooks Time. The automation significantly reduced payroll overhead and improved operational visibility across our field teams.",
        "takeaways": [
            "Slack can serve as a workforce operations interface beyond communication.",
            "Event-driven synchronization reduces payroll processing overhead.",
            "Real-time labor tracking improves operational visibility and profitability.",
            "Automated retry mechanisms are critical for enterprise-grade API orchestration."
        ],
        "gallery": [],
        "seo": {
            "description": "Slack, Salesforce Field Service Lightning, and QuickBooks Time integration for automated workforce tracking and payroll synchronization.",
            "keywords": "Slack Integration, Salesforce Field Service Lightning, QuickBooks Time API, Workforce Automation, Payroll Automation, Wix Integration, Twilio SMS, Call Tracking, Mailchimp Sync"
        },
        "homepageFeatured": {
            "isFeatured": false
        },
        "detailFeatured": false,
        "hubFeatured": false,
        "aiConfig": {
            "title": "Workforce Automation Consultant",
            "primaryCTA": "Generate Workforce Integration Strategy",
            "tools": [
                "integration-advisor",
                "architect-assistant",
                "roi-estimator",
                "discovery-call-prep"
            ],
            "context": "Slack-based workforce automation integrated with Salesforce and QuickBooks Time."
        },
        "architecture": "graph TD\n    subgraph Slack_Workspace\n        Employee[\"Employee (Slack Mobile/Desktop)\"] --> ClockIn[\"Clock In / Clock Out Action\"]\n    end\n\n    subgraph Salesforce_Platform\n        ClockIn --> SlackAPI[\"Slack Events API\"]\n        SlackAPI --> Listener[\"Apex REST Listener\"]\n\n        Listener --> UserSync[\"Slack User Sync\"]\n        Listener --> ChannelSync[\"Slack Channel Sync\"]\n        Listener --> TimeLog[\"Time Log Records\"]\n\n        TimeLog --> Queueable[\"Queueable Sync Engine\"]\n    end\n\n    subgraph QuickBooks_Time\n        Queueable --> QBTUser[\"QBT User Creation\"]\n        Queueable --> QBTJob[\"QBT Job Code Creation\"]\n\n        QBTUser --> Timesheet[\"QBT Timesheet Creation\"]\n        QBTJob --> Timesheet\n\n        Timesheet --> ClockOut[\"Timesheet Update on Clock Out\"]\n    end\n\n    subgraph Monitoring\n        Queueable --> Audit[\"Audit Logs\"]\n        Queueable --> Retry[\"Retry/Error Workflow\"]\n        Audit --> Dashboard[\"Salesforce Dashboards\"]\n    end"
    },
    {
        "id": 10,
        "title": "Field Service Lightning ↔ Xero Invoice Synchronization for Passive Fire Protection Operations",
        "challenge": {
            "icon": "ph ph-fire-extinguisher",
            "title": "Disconnected Field Service Billing Operations",
            "description": "Manual invoice reconciliation between field technicians, Salesforce Field Service Lightning, and Xero accounting workflows was causing billing delays, compliance risks, and revenue leakage."
        },
        "niche": "Passive Fire Protection / Field Service Automation",
        "myRole": "Salesforce Field Service & Financial Integration Architect",
        "technicalComplexity": [
            "Field Service Lightning Automation",
            "Two-Way Xero Synchronization",
            "Real-Time Work Order Billing",
            "Compliance-Driven Financial Workflows"
        ],
        "whoIsThisFor": "Passive fire protection contractors managing inspections, compliance services, installations, and maintenance operations using Salesforce Field Service Lightning and Xero accounting.",
        "metricsPreview": [
            "Automated Work Order Billing",
            "Real-Time Invoice Synchronization",
            "Technician-to-Accounting Automation"
        ],
        "client": {
            "industry": "Passive Fire Protection & Compliance Services",
            "size": "Enterprise",
            "location": "Remote"
        },
        "businessContext": "A passive fire protection contractor managing inspections, service appointments, compliance reports, technician dispatching, and invoicing across Salesforce Field Service Lightning and Xero accounting systems.",
        "operationalProblem": "Field technicians completed fire inspection and maintenance work orders in Salesforce, but finance teams manually recreated invoices in Xero. Delayed invoice processing, inconsistent tax calculations, and disconnected field operations created operational bottlenecks and compliance risks.",
        "solutionStrategy": "Architected a real-time Field Service Lightning and Xero synchronization platform enabling automated invoice generation directly from completed service appointments and work orders with bidirectional accounting synchronization.",
        "objective": [
            "Automate invoice generation directly from completed field service work orders",
            "Synchronize service line items, labor hours, and materials into Xero automatically",
            "Enable bidirectional invoice synchronization between Salesforce and Xero",
            "Provide technicians and finance teams with real-time billing visibility",
            "Reduce manual accounting reconciliation for compliance operations",
            "Centralize field operations, invoicing, and financial reporting",
            "Design Salesforce-based estimate system featuring a flat-rate + add-ons product catalog",
            "Orchestrate DocuSign integration for automated digital estimate approvals",
            "Implement QuickBooks Online integration for bidirectional invoice creation and synchronization"
        ],
        "solution": {
            "description": "Developed a comprehensive field-service financial automation platform integrating Salesforce Field Service Lightning with Xero Accounting APIs for passive fire protection operations.",
            "highlights": [
                "Built custom invoice generation workflows directly from Field Service Work Orders and Service Appointments",
                "Developed technician-driven billing workflows using Lightning Web Components",
                "Implemented automated Xero contact and customer account synchronization",
                "Built two-way invoice synchronization between Salesforce and Xero accounting systems",
                "Enabled automatic synchronization of labor hours, inspection services, compliance fees, and material costs",
                "Designed financial dashboards for service revenue, technician billing, and compliance reporting",
                "Implemented retry-based error handling and audit tracking for financial synchronization operations",
                "Integrated field-service completion workflows with real-time invoice generation pipelines",
                "Built Salesforce-based estimate system integrated with dynamic flat-rate product and service catalogs",
                "Orchestrated DocuSign API integration, allowing clients to sign estimates and auto-generate work orders",
                "Developed a QuickBooks Online synchronization engine for real-time invoice and customer mapping"
            ]
        },
        "techStack": {
            "salesforce": [
                "Field Service Lightning",
                "Sales Cloud",
                "Service Cloud",
                "Apex",
                "LWC"
            ],
            "tools": [
                "Queueable Apex",
                "Platform Events",
                "Named Credentials",
                "REST APIs",
                "Flow Builder"
            ],
            "integrations": [
                "Xero Accounting API",
                "OAuth 2.0",
                "Webhooks",
                "QuickBooks Online API",
                "DocuSign API"
            ]
        },
        "results": [
            {
                "metric": "100% Automated",
                "label": "Work Order Billing"
            },
            {
                "metric": "Real-Time",
                "label": "Invoice Synchronization"
            },
            {
                "metric": "Reduced",
                "label": "Accounting Reconciliation"
            },
            {
                "metric": "Centralized",
                "label": "Field-to-Finance Operations"
            }
        ],
        "feedback": "Natavar successfully connected our field technicians, dispatch workflows, and accounting operations into a single real-time billing ecosystem. Invoice processing became dramatically faster and more reliable.",
        "takeaways": [
            "Field Service Lightning becomes significantly more powerful when tightly integrated with accounting systems.",
            "Automated invoice orchestration reduces revenue leakage in field operations.",
            "Real-time synchronization improves operational and compliance visibility.",
            "Bidirectional financial synchronization requires strong audit tracking and retry mechanisms."
        ],
        "gallery": [],
        "seo": {
            "description": "Salesforce Field Service Lightning and Xero integration for passive fire protection contractors with automated work order billing and invoice synchronization.",
            "keywords": "Field Service Lightning, Xero Integration, Passive Fire Protection, Salesforce Work Orders, Invoice Automation, Compliance Billing, QuickBooks Online, DocuSign Integration, Flat-rate Catalog"
        },
        "homepageFeatured": {
            "isFeatured": false
        },
        "detailFeatured": false,
        "hubFeatured": true,
        "aiConfig": {
            "title": "Field Service Financial Automation Consultant",
            "primaryCTA": "Generate Field Service Billing Strategy",
            "tools": [
                "integration-advisor",
                "architect-assistant",
                "roi-estimator",
                "agenda-generator"
            ],
            "context": "Field Service Lightning and Xero accounting automation for passive fire protection contractors."
        },
        "architecture": "graph TD\n    subgraph Field_Service_Operations\n        Technician[\"Field Technician\"] --> Appointment[\"Service Appointment Completion\"]\n        Appointment --> WorkOrder[\"Field Service Work Order\"]\n        WorkOrder --> InvoiceWizard[\"Invoice Generation Wizard (LWC)\"]\n    end\n\n    subgraph Salesforce_Platform\n        InvoiceWizard --> Invoice[\"Salesforce Invoice Record\"]\n        Invoice --> LineItems[\"Labor / Materials / Compliance Fees\"]\n        Invoice --> Trigger[\"Invoice Sync Trigger\"]\n        Trigger --> Queueable[\"Queueable Sync Engine\"]\n    end\n\n    subgraph Xero_Accounting\n        Queueable --> ContactSync[\"Xero Customer Sync\"]\n        ContactSync --> XeroAPI[\"Xero Accounting API\"]\n        XeroAPI --> XeroInvoice[\"Xero Invoice Creation\"]\n        XeroInvoice --> Totals[\"Tax & Total Calculations\"]\n    end\n\n    subgraph Two_Way_Synchronization\n        XeroInvoice --> Webhook[\"Xero Webhooks\"]\n        Webhook --> ReverseSync[\"Salesforce Reverse Sync\"]\n        ReverseSync --> Invoice\n    end\n\n    subgraph Monitoring_Analytics\n        Queueable --> Audit[\"Audit Logs\"]\n        Queueable --> Retry[\"Retry/Error Workflow\"]\n        Audit --> Dashboard[\"Revenue & Billing Dashboards\"]\n    end"
    },
    {
        "id": 11,
        "title": "Salesforce Field Service Lightning ↔ Dashpivot Work Order Automation",
        "challenge": {
            "icon": "ph ph-tree-evergreen",
            "title": "Disconnected Landscaping Field Operations",
            "description": "Landscaping contractors were struggling with disconnected inspection forms, OHS documentation, field evidence tracking, and manual work order completion processes."
        },
        "niche": "Landscaping Operations / Field Service Automation",
        "myRole": "Salesforce Field Service & Integration Architect",
        "technicalComplexity": [
            "Field Service Lightning Automation",
            "Dashpivot API Orchestration",
            "Document Synchronization Workflows",
            "Mobile Field Operations"
        ],
        "whoIsThisFor": "Landscaping contractors using Salesforce Field Service Lightning for managing inspections, OHS compliance, field documentation, and work order lifecycle automation.",
        "metricsPreview": [
            "Automated Work Order Lifecycle",
            "Real-Time Field Documentation",
            "Mobile Inspection Synchronization"
        ],
        "client": {
            "industry": "Landscaping & Field Service Operations",
            "size": "Enterprise",
            "location": "Remote"
        },
        "businessContext": "A landscaping contractor managing large-scale field operations, inspections, OHS compliance workflows, claims processing, and field documentation using Salesforce Field Service Lightning.",
        "operationalProblem": "Field technicians were manually uploading inspection photos, OHS forms, signatures, and completion reports into multiple disconnected systems. Operations teams lacked real-time visibility into field-service progress and compliance workflows.",
        "solutionStrategy": "Architected a fully automated Salesforce Field Service Lightning and Dashpivot integration ecosystem enabling real-time inspection synchronization, OHS tracking, claims handling, and automated work order PDF generation.",
        "objective": [
            "Automate Dashpivot form creation directly from Salesforce Work Orders",
            "Synchronize field inspection data and documents into Salesforce automatically",
            "Enable real-time OHS and claim tracking workflows",
            "Automate work order lifecycle progression based on field submissions",
            "Generate final PDF completion reports automatically",
            "Provide centralized field-service operational visibility",
            "Build an Experience Cloud customer portal for self-service job, estimate, and invoice tracking",
            "Configure scheduling & dispatch board with optimization rules for field technicians",
            "Develop data migration pipeline to import customers, jobs, and invoices from legacy systems"
        ],
        "solution": {
            "description": "Developed a scalable field-service automation platform integrating Salesforce Field Service Lightning with Dashpivot APIs for landscaping contractors and mobile field operations.",
            "highlights": [
                "Built automated Dashpivot form provisioning directly from Salesforce Work Orders",
                "Implemented secure JWT-based authentication framework for Dashpivot API integration",
                "Developed scheduler-based synchronization engine for field-service form updates",
                "Enabled automatic synchronization of site photos, OHS documents, signatures, and inspection evidence",
                "Built dynamic JSON parsing framework for Dashpivot form response processing",
                "Automated work order lifecycle progression based on inspection and approval completion",
                "Integrated Dashpivot PDF export workflows directly into Salesforce Work Order completion process",
                "Designed operational dashboards for OHS tracking, inspection progress, and claims visibility",
                "Implemented retry-based API synchronization and document retrieval framework",
                "Designed Experience Cloud customer portal with secure login for viewing estimates, jobs, and invoices",
                "Configured Field Service Dispatch Board with scheduling automation rules and tech mobile app setup",
                "Developed data migration scripts to import 10,000+ historical records from old software"
            ]
        },
        "techStack": {
            "salesforce": [
                "Field Service Lightning",
                "Service Cloud",
                "Sales Cloud",
                "Apex",
                "LWC"
            ],
            "tools": [
                "Queueable Apex",
                "Scheduled Apex",
                "JWT Authentication",
                "REST APIs",
                "Flow Builder"
            ],
            "integrations": [
                "Dashpivot API",
                "PDF Export APIs",
                "Webhooks",
                "Experience Cloud",
                "Data Loader",
                "Legacy Import Tools"
            ]
        },
        "results": [
            {
                "metric": "Automated",
                "label": "Field Documentation Workflows"
            },
            {
                "metric": "Real-Time",
                "label": "Inspection Visibility"
            },
            {
                "metric": "Centralized",
                "label": "OHS & Claims Tracking"
            },
            {
                "metric": "Paperless",
                "label": "Work Order Completion"
            }
        ],
        "feedback": "Natavar successfully streamlined our landscaping field operations by connecting Salesforce Field Service Lightning and Dashpivot into a single operational ecosystem. Inspection tracking and compliance visibility improved dramatically.",
        "takeaways": [
            "Field-service organizations benefit significantly from real-time document synchronization.",
            "Automated lifecycle progression improves operational efficiency and compliance tracking.",
            "Mobile-first inspection workflows reduce field-service administration overhead.",
            "Audit logging and retry mechanisms are essential for enterprise field-service integrations."
        ],
        "gallery": [],
        "seo": {
            "description": "Salesforce Field Service Lightning and Dashpivot integration for landscaping contractors with automated inspections, OHS workflows, and work order lifecycle automation.",
            "keywords": "Dashpivot Integration, Salesforce Field Service Lightning, Landscaping Contractors, OHS Tracking, Inspection Automation, Work Order Management, Experience Cloud, Customer Portal, Scheduling & Dispatch, Data Migration"
        },
        "homepageFeatured": {
            "isFeatured": false
        },
        "detailFeatured": false,
        "hubFeatured": true,
        "aiConfig": {
            "title": "Field Operations Automation Consultant",
            "primaryCTA": "Generate Field Service Integration Strategy",
            "tools": [
                "integration-advisor",
                "architect-assistant",
                "roi-estimator",
                "agenda-generator"
            ],
            "context": "Salesforce Field Service Lightning and Dashpivot automation for landscaping contractors."
        },
        "architecture": "graph TD\n    subgraph Salesforce_Field_Service\n        Ops[\"Operations Team\"] --> WorkOrder[\"Field Service Work Order\"]\n        WorkOrder --> Trigger[\"Dashpivot Sync Trigger\"]\n    end\n\n    subgraph Integration_Engine\n        Trigger --> ApexAPI[\"Apex REST Integration\"]\n        ApexAPI --> JWT[\"JWT Authentication\"]\n    end\n\n    subgraph Dashpivot_Platform\n        JWT --> Forms[\"Dashpivot Inspection Forms\"]\n        Forms --> Technician[\"Mobile Field Technicians\"]\n        Technician --> Uploads[\"Photos / OHS Docs / Signatures\"]\n    end\n\n    subgraph Salesforce_Synchronization\n        Scheduler[\"Scheduled Apex Polling\"] --> DashpivotAPI[\"Dashpivot APIs\"]\n        DashpivotAPI --> Parser[\"Dynamic JSON Parser\"]\n        Parser --> WorkOrderUpdates[\"Work Order Status Updates\"]\n    end\n\n    subgraph Completion_Workflow\n        WorkOrderUpdates --> PDFExport[\"Dashpivot PDF Export API\"]\n        PDFExport --> PDF[\"Final Work Order PDF\"]\n        PDF --> SalesforceAttach[\"Attach PDF to Work Order\"]\n    end\n\n    subgraph Monitoring_Analytics\n        Parser --> Audit[\"Audit Logs\"]\n        Parser --> Retry[\"Retry/Error Handling\"]\n        Audit --> Dashboard[\"Operational Dashboards\"]\n    end"
    },
	{
        "id": 12,
        "title": "Enterprise B2B Commerce Cloud Checkout & SSO Ecosystem",
        "challenge": {
            "icon": "ph ph-shopping-cart-simple",
            "title": "High Checkout Abandonment & Siloed Portals",
            "description": "Wholesale buyers faced high friction due to duplicate login barriers and rigid checkout flows, leading to a 35% cart abandonment rate."
        },
        "niche": "B2B Commerce & Identity Access Management",
        "myRole": "Lead B2B Commerce Architect & SSO Specialist",
        "technicalComplexity": [
            "Custom LWC Checkout Flow",
            "Auth-Based Single Sign-On (SSO)",
            "Real-time ERP Pricing Sync"
        ],
        "whoIsThisFor": "Wholesale distributors and B2B manufacturers looking to simplify client purchasing and unify partner portal security.",
        "metricsPreview": [
            "40% Faster Checkout Process",
            "99.9% Authentication Uptime",
            "$2M Annual Order Value Uplift"
        ],
        "client": {
            "industry": "Industrial Supply Distribution",
            "size": "Enterprise",
            "location": "Global / Multi-region"
        },
        "businessContext": "The client operated a complex B2B catalog across multiple geographic divisions with strict, customer-specific pricing matrix rules.",
        "operationalProblem": "Duplicate client records across systems required buyers to re-authenticate when shifting from marketing sites to purchasing portals. Furthermore, legacy Aura components in checkout did not support dynamic calculations, causing order backlogs.",
        "solutionStrategy": "Designed a secure Single Sign-On (SSO) architecture utilizing Salesforce Community as the Identity Provider (IdP) with SAML/OIDC. Built a reactive checkout workflow using custom LWC components that dynamically pull real-time pricing from SAP via middleware APIs.",
        "objective": [
            "Establish seamless SSO across customer and partner portals",
            "Develop custom LWC checkout components replacing legacy layouts",
            "Orchestrate real-time pricing and tax integrations with SAP ERP",
            "Ensure high transactional throughput and zero cart state loss"
        ],
        "solution": {
            "description": "Architected and delivered a modernized checkout pipeline on B2B Commerce with unified identity security, boosting client adoption and sales efficiency.",
            "highlights": [
                "Configured Auth-based SSO with Salesforce Community as IdP, enabling federated logins for 5,000+ corporate buyers",
                "Developed responsive, modular checkout LWCs, streamlining the checkout wizard steps from 6 screens to 3",
                "Implemented high-concurrency Apex handlers executing asynchronous pricing checks on ERP databases",
                "Built client-side validation rules enforcing wholesale Purchase Order formatting limits",
                "Architected custom error boundary controls in LWC to maintain offline cart persistence during system sync delays"
            ]
        },
        "techStack": {
            "salesforce": [
                "Commerce Cloud (B2B)",
                "Experience Cloud",
                "Apex",
                "Lightning Web Components"
            ],
            "tools": [
                "Flow Builder",
                "Identity Provider (IdP)",
                "Connected Apps",
                "SAML/OIDC"
            ],
            "integrations": [
                "SAP ERP Gateway API",
                "Vertex Tax Engine REST API"
            ]
        },
        "results": [
            {
                "metric": "-35%",
                "label": "Cart Abandonment Rate"
            },
            {
                "metric": "99.99%",
                "label": "SSO Sign-in Reliability"
            },
            {
                "metric": "+40h",
                "label": "Weekly Admin Support Saved"
            },
            {
                "metric": "10,000+",
                "label": "Daily Checkout Transactions"
            }
        ],
        "feedback": "The checkout redesign and SSO integration solved a major bottleneck. Buyer adoption skyrocketed, and manual order adjustments have dropped to nearly zero.",
        "takeaways": [
            "SSO is the cornerstone of partner loyalty in B2B portals.",
            "Modular LWC architecture allows decoupling checkout steps from underlying pricing logic.",
            "Caching static ERP prices at the Apex layer mitigates governor limit issues under peak load."
        ],
        "gallery": [],
        "seo": {
            "description": "Enterprise-grade B2B Commerce Cloud checkout modernization and Auth-based SSO integration for global industrial distributors.",
            "keywords": "B2B Commerce Cloud, SSO, Salesforce Community, LWC Checkout, ERP Integration, Identity Management"
        },
        "homepageFeatured": {
            "isFeatured": true,
            "outcome": "Streamline wholesale purchases and secure partner portals with 99.9% SSO reliability.",
            "metrics": [
                {
                    "icon": "ph ph-shopping-bag",
                    "value": "-35% Abandonment"
                },
                {
                    "icon": "ph ph-key",
                    "value": "99.9% SSO Uptime"
                }
            ],
            "icon": "ph ph-shopping-cart",
            "accentColor": "var(--lab-palette-primary-main)"
        },
        "detailFeatured": true,
        "hubFeatured": true,
        "architecture": "graph TD\n    subgraph Corporate_Buyer\n        User[Buyer Browser] -->|Auth Request| SSO[SAML/OIDC SSO]\n    end\n    subgraph Salesforce_Experience_Cloud\n        SSO -->|Federated Access| IdP[Salesforce Identity Provider]\n        IdP -->|Render UI| Portal[B2B Community Portal]\n        Portal -->|LWC Checkout| ApexController[Apex Controller]\n    end\n    subgraph Middleware_Layer\n        ApexController -->|Secure REST Callout| Mule[MuleSoft ESB]\n    end\n    subgraph Backend_Systems\n        Mule -->|Query Pricing| SAP[SAP ERP Database]\n        Mule -->|Query Tax| Vertex[Vertex Tax Engine]\n    end\n    Vertex -->|Tax Payload| Mule\n    SAP -->|Pricing Matrix| Mule\n    Mule -->|JSON Response| ApexController\n    ApexController -->|Reactive Update| Portal",
        "aiConfig": {
            "title": "B2B Commerce Architect",
            "primaryCTA": "Analyze Checkout Flow",
            "tools": [
                "roi-estimator",
                "architect-assistant"
            ],
            "context": "B2B Commerce checkout and SSO architecture integration."
        }
    },
    {
        "id": 13,
        "title": "Salesforce Service Cloud & Einstein Bot Engagement Platform",
        "challenge": {
            "icon": "ph ph-headset",
            "title": "Overwhelming Customer Support Ticket Spikes",
            "description": "SaaS support teams were experiencing high volumes of routine inquiries, resulting in 48-hour response delays and low agent utilization."
        },
        "niche": "Conversational AI & Customer Support Automation",
        "myRole": "Service Cloud Architect & Conversational AI Engineer",
        "technicalComplexity": [
            "Einstein Bot Dialog Scripting",
            "Digital Engagement Channels",
            "LWC Snap-ins & Presence Routing"
        ],
        "whoIsThisFor": "High-volume customer support operations aiming to automate ticket deflection and route escalations dynamically.",
        "metricsPreview": [
            "65% Support Case Deflection",
            "24/7 Agent Availability",
            "94% Customer CSAT Score"
        ],
        "client": {
            "industry": "SaaS & Software Technology",
            "size": "Enterprise",
            "location": "Global / Remote Support"
        },
        "businessContext": "A leading global SaaS enterprise with over 100k active subscribers saw exponential chat support inquiries.",
        "operationalProblem": "Agents spent 70% of their shifts answering basic account recovery and password reset requests. The native chat interface did not collect pre-chat context, leading to long triage times and misrouted tickets.",
        "solutionStrategy": "Configured an enterprise Service Cloud solution implementing Live Agent, Einstein Bots, and digital engagement routes. Resolved bot capabilities gaps by designing custom Apex callout actions that query the core subscriber DB.",
        "objective": [
            "Deflect routine customer queries using conversational AI",
            "Route high-priority support issues automatically to specialized tiers",
            "Design custom pre-chat and message snap-in interfaces",
            "Provide agents with Einstein Sales Opportunity indicators on screen"
        ],
        "solution": {
            "description": "Engineered a robust, bot-assisted support ecosystem using Service Cloud and custom LWC snap-ins that provides instant solutions to customers and reduces triage delays.",
            "highlights": [
                "Deployed Einstein Bots across Web, SMS, and WhatsApp channels with customized chat flows",
                "Developed invocable Apex methods that bypassed Einstein Bot limits, querying Salesforce database variables on the fly",
                "Designed pre-chat and message snap-in LWCs to capture key details (emails, products) before agent routing",
                "Configured Omni-Channel routing workflows, presence statuses, and skills-based agent assignments",
                "Configured Einstein Opportunity scoring models, displaying high-value sales recommendations directly to support agents"
            ]
        },
        "techStack": {
            "salesforce": [
                "Service Cloud",
                "Digital Engagement",
                "Einstein Bots",
                "Apex",
                "LWC"
            ],
            "tools": [
                "Omni-Channel",
                "Skills-Based Routing",
                "Pre-chat Snap-ins",
                "Chatter"
            ],
            "integrations": [
                "WhatsApp Business API",
                "Twilio Messaging Gateway",
                "SaaS Licensing REST API"
            ]
        },
        "results": [
            {
                "metric": "65%",
                "label": "Deflection of Basic Support Cases"
            },
            {
                "metric": "-50%",
                "label": "Average Support Response Time"
            },
            {
                "metric": "94%",
                "label": "Customer CSAT Score Increase"
            },
            {
                "metric": "15,000+",
                "label": "Automated Chats Handled Monthly"
            }
        ],
        "feedback": "The combination of Einstein bots and smart Omni-Channel routing saved our support organization. Response delays have evaporated and agent morale has dramatically improved.",
        "takeaways": [
            "Einstein bots should gather metadata rather than try to solve complex problems directly.",
            "Using Invocable Apex in bots enables seamless, real-time CRM updates.",
            "Omni-channel presence tracking gives supervisor teams full staffing visibility."
        ],
        "gallery": [],
        "seo": {
            "description": "Enterprise Service Cloud setup with Einstein Bots, Omni-Channel routing, and customized digital engagement snap-ins.",
            "keywords": "Service Cloud, Einstein Bot, Digital Engagement, Live Agent, LWC Snap-in, Omni-Channel Routing"
        },
        "homepageFeatured": {
            "isFeatured": true,
            "outcome": "Automate support ticket deflection by 65% with Einstein Chatbots and skills-based routing.",
            "metrics": [
                {
                    "icon": "ph ph-chats",
                    "value": "65% Deflection Rate"
                },
                {
                    "icon": "ph ph-clock",
                    "value": "-50% Triage Time"
                }
            ],
            "icon": "ph ph-robot",
            "accentColor": "var(--lab-palette-accent-pink)"
        },
        "detailFeatured": true,
        "hubFeatured": false,
        "architecture": "graph TD\n    subgraph Chat_Channels\n        Customer[Customer on Web/WhatsApp/SMS] -->|Initiates Chat| SnapIn[LWC Pre-chat Snap-in]\n    end\n    subgraph Bot_Deflection\n        SnapIn -->|Launches Dialog| Einstein[Einstein Bot Engine]\n        Einstein -->|Query CRM Data| Invocable[Invocable Apex Handler]\n        Invocable -->|Check Entitlements| DB[(Salesforce DB)]\n    end\n    subgraph Live_Agent_Escalation\n        Einstein -->|Failed Resolution| Router[Omni-Channel Router]\n        Router -->|Skills-Based Check| Queue[Specialized Support Queue]\n        Queue -->|Assign Activity| Agent[Support Agent Console]\n        Agent -->|Suggest Offer| Score[Einstein Opportunity Score]\n    end",
        "aiConfig": {
            "title": "Conversational AI Consultant",
            "primaryCTA": "Design Bot Architecture",
            "tools": [
                "architect-assistant",
                "discovery-call-prep"
            ],
            "context": "Service Cloud and Einstein Bot automation architecture."
        }
    },
    {
        "id": 14,
        "title": "Experience Cloud Vehicle Reimbursement & Mileage Automation Platform",
        "challenge": {
            "icon": "ph ph-car",
            "title": "Manual Expense Tracking & Tax Inefficiencies",
            "description": "Field employees were receiving fixed, taxable car allowances while manually logging miles, resulting in $1M+ in excess tax costs and audit risks."
        },
        "niche": "Field Operations & Travel Automation",
        "myRole": "Lead Solutions Architect & Integration Engineer",
        "technicalComplexity": [
            "AngularJS Experience Cloud UI",
            "TripLog API Integration",
            "Bulkified Scheduled Batch Apex"
        ],
        "whoIsThisFor": "Enterprises with nationwide field forces seeking to automate travel compliance and reduce vehicle allowance tax burdens.",
        "metricsPreview": [
            "$1.2M Annual Tax Savings",
            "80% Reduction in Audit Hours",
            "100% Automated Mileage Captures"
        ],
        "client": {
            "industry": "Field Services & Infrastructure",
            "size": "Enterprise (10k+ Employees)",
            "location": "North America"
        },
        "businessContext": "A company with thousands of technicians traveling daily for equipment maintenance was paying taxable flat-rate car allowances, resulting in high tax leakage.",
        "operationalProblem": "Relying on self-reported mileage spreadsheets created security risks, compliance loopholes, and thousands of hours in manual finance reconciliations.",
        "solutionStrategy": "Deployed a customized Experience Cloud portal utilizing AngularJS and Bootstrap. Integrated TripLog REST APIs to automate mileage logging, and built scheduled batch Apex to process monthly calculations.",
        "objective": [
            "Transition taxable car allowances to IRS-compliant reimbursement models",
            "Build a responsive self-service Experience Cloud portal",
            "Automate real-time trip synchronization from mobile devices",
            "Optimize high-volume data batching to prevent governor limit overruns"
        ],
        "solution": {
            "description": "Architected a secure, compliant vehicle reimbursement ecosystem on Salesforce, eliminating manual mileage reports and saving millions in tax expenses.",
            "highlights": [
                "Designed and launched an Experience Cloud community using AngularJS and Bootstrap for the front-end interface",
                "Integrated TripLog REST APIs for real-time mobile tracking and trip data ingestion",
                "Developed bulkified Apex triggers and scheduled batch classes processing 200,000+ travel logs monthly",
                "Configured secure Sharing Rules and Permission Sets protecting employee financial data",
                "Built automated email alert templates communicating reimbursement status to users"
            ]
        },
        "techStack": {
            "salesforce": [
                "Experience Cloud",
                "Sales Cloud",
                "Apex",
                "SOQL/SOSL"
            ],
            "tools": [
                "Scheduled Batches",
                "Bulkified Triggers",
                "Sharing Settings",
                "Email Templates"
            ],
            "integrations": [
                "TripLog REST API",
                "IRS Tax Compliance Engine"
            ]
        },
        "results": [
            {
                "metric": "$1.2M",
                "label": "Annual Tax Savings"
            },
            {
                "metric": "-80%",
                "label": "Expense Auditing Time"
            },
            {
                "metric": "100%",
                "label": "Mileage Sync Compliance"
            },
            {
                "metric": "200k+",
                "label": "Monthly Logged Trips"
            }
        ],
        "feedback": "The mileage automation saved us over a million dollars in taxes in the first year alone. The interface is intuitive, and our field reps love the instant tracking.",
        "takeaways": [
            "Replacing manual tracking with automated GPS integrations eliminates expense padding.",
            "Experience Cloud customization with AngularJS enables a modern web experience within Salesforce.",
            "Batch Apex design is critical when processing high-volume calculations on strict schedules."
        ],
        "gallery": [],
        "seo": {
            "description": "Experience Cloud travel expense portal integrating TripLog REST APIs and Batch Apex for automated vehicle reimbursement.",
            "keywords": "Experience Cloud, TripLog API, Vehicle Reimbursement, Batch Apex, Salesforce Integration, IRS Compliance"
        },
        "homepageFeatured": {
            "isFeatured": true,
            "outcome": "Automate travel compliance and save $1.2M in annual tax liabilities with automated mileage sync.",
            "metrics": [
                {
                    "icon": "ph ph-money",
                    "value": "$1.2M Saved"
                },
                {
                    "icon": "ph ph-checkbox",
                    "value": "100% Tax Compliant"
                }
            ],
            "icon": "ph ph-car",
            "accentColor": "var(--lab-palette-accent-green)"
        },
        "detailFeatured": true,
        "hubFeatured": false,
        "architecture": "graph TD\n    subgraph Mobile_Device\n        Reps[Field Rep App] -->|Logs Mileage| TripLog[TripLog Cloud Engine]\n    end\n    subgraph Experience_Cloud_Portal\n        Portal[AngularJS Portal Interface] -->|View/Adjust Logs| ApexController[Apex Integration Controller]\n    end\n    subgraph Salesforce_Core\n        ApexController -->|Fetch Updates| SyncJob[Scheduled Apex Batch]\n        SyncJob -->|GET Request| TripLog\n        TripLog -->|Trip Data Payload| SyncJob\n        SyncJob -->|Bulk Upsert| TravelLogs[Travel Log Objects]\n        TravelLogs -->|Triggers Payout Logic| ReimbursementEngine[Reimbursement Calc Engine]\n        ReimbursementEngine -->|Create Record| Reimbursement[Reimbursement Record]\n    end",
        "aiConfig": {
            "title": "Mileage System Architect",
            "primaryCTA": "Design Expense Model",
            "tools": [
                "roi-estimator",
                "architect-assistant"
            ],
            "context": "Salesforce Experience Cloud vehicle reimbursement and TripLog integration."
        }
    },
    {
        "id": 15,
        "title": "Salesforce ERP & Accounting Synchronization Hub (MYOB & Jiwa)",
        "challenge": {
            "icon": "ph ph-plugs",
            "title": "Disconnected Sales & Accounting Pipelines",
            "description": "Siloed financial records in MYOB and project costings in Jiwa ERP led to manual data sync errors, duplicate invoicing, and a 45-day Days Sales Outstanding (DSO) delay."
        },
        "niche": "ERP Integration & Financial Orchestration",
        "myRole": "Lead Integration Architect & Developer",
        "technicalComplexity": [
            "Bi-directional REST Sync",
            "Asynchronous Processing Queues",
            "Dynamic SOQL/SOSL Queries"
        ],
        "whoIsThisFor": "Enterprises needing to bridge CRM sales operations with financial ledger and resource management ERPs.",
        "metricsPreview": [
            "15-Day DSO Reduction",
            "99.9% Financial Sync Uptime",
            "Zero Double-Keying Efforts"
        ],
        "client": {
            "industry": "Logistics & Professional Services",
            "size": "Enterprise",
            "location": "APAC Region"
        },
        "businessContext": "The client managed complex customer contracts requiring real-time updates on client payments, invoice reminders, and resource planning across departments.",
        "operationalProblem": "Sales reps frequently closed deals for accounts that had unpaid bills, while project estimators spent 10+ hours weekly manually duplicating data across MYOB and Jiwa systems.",
        "solutionStrategy": "Engineered a centralized Sales Cloud Integration Hub utilizing secure Apex REST endpoints, scheduled synchronization routines, and automated email alerts to align CRM with MYOB and Jiwa ERP databases.",
        "objective": [
            "Automate invoice tracking and payment sync from MYOB",
            "Bridge project estimation inputs from Jiwa ERP to Salesforce",
            "Develop asynchronous synchronization processes for high volumes",
            "Provide real-time dashboard visibility into payment statuses"
        ],
        "solution": {
            "description": "Delivered a high-integrity, real-time integration hub connecting Salesforce Sales Cloud with MYOB and Jiwa ERP platforms.",
            "highlights": [
                "Built secure Apex REST interfaces handling bidirectional transactions for accounts and products",
                "Developed automated workflow rules triggering client payment notifications and updates",
                "Programmed scheduled batch routines managing large ledger sync volumes with zero API timeouts",
                "Constructed custom SOQL/SOSL query libraries extracting complex account payment structures",
                "Designed CRM reporting dashboards displaying active jobs, payments, and receivables data"
            ]
        },
        "techStack": {
            "salesforce": [
                "Sales Cloud",
                "Apex",
                "SOQL/SOSL"
            ],
            "tools": [
                "Scheduled Batches",
                "Workflow Rules",
                "Developer Console",
                "Data Loader"
            ],
            "integrations": [
                "MYOB Accounting API",
                "Jiwa ERP REST API",
                "JSON Webhooks"
            ]
        },
        "results": [
            {
                "metric": "-15 Days",
                "label": "Days Sales Outstanding (DSO)"
            },
            {
                "metric": "99.99%",
                "label": "Data Ledger Accuracy"
            },
            {
                "metric": "+25h",
                "label": "Weekly Admin Hours Saved"
            },
            {
                "metric": "Zero",
                "label": "Duplicate Invoices Sent"
            }
        ],
        "feedback": "The MYOB and Jiwa integration brought complete financial visibility to our sales team. We've eliminated manual billing errors and accelerated payment cycles.",
        "takeaways": [
            "Tightly aligning accounting and CRM systems drives down DSO metrics.",
            "Using custom integration queues in Apex prevents transaction failures under API load.",
            "Synchronizing product catalogs ensures absolute pricing alignment across departments."
        ],
        "gallery": [],
        "seo": {
            "description": "Sales Cloud integration with MYOB Accounting and Jiwa ERP, automating invoicing and customer payments.",
            "keywords": "MYOB Integration, Jiwa ERP, Salesforce REST API, Financial Sync, Apex Batch, Accounting CRM"
        },
        "homepageFeatured": {
            "isFeatured": false
        },
        "detailFeatured": false,
        "hubFeatured": false,
        "architecture": "graph LR\n    subgraph Salesforce_CRM\n        Opp[Closed-Won Opportunity] -->|Trigger Outbound| ApexQ[Queueable Sync Engine]\n        InvoiceObj[Invoice Custom Object] -->|Update UI| Dash[Financial Dashboard]\n    end\n    subgraph Middleware\n        ApexQ -->|REST JSON Payload| API[MuleSoft Integration Router]\n    end\n    subgraph ERP_Systems\n        API -->|Create Customer Invoice| MYOB[MYOB Accounting]\n        API -->|Query Job Costings| Jiwa[Jiwa ERP]\n    end\n    MYOB -->|Payment Confirmation| API\n    Jiwa -->|Resource Allocations| API\n    API -->|Sync Data| InvoiceObj",
        "aiConfig": {
            "title": "ERP Integration Lead",
            "primaryCTA": "Design ERP Sync Hub",
            "tools": [
                "integration-advisor",
                "architect-assistant"
            ],
            "context": "MYOB and Jiwa ERP integration with Sales Cloud."
        }
    },
    {
        "id": 16,
        "title": "Salesforce Customer Service & Warranty Portal",
        "challenge": {
            "icon": "ph ph-wrench",
            "title": "Frictional Warranty Claim Processing",
            "description": "Manual email and phone-based product warranty registrations and repair requests led to processing backlogs, missing inventory updates, and delayed service responses."
        },
        "niche": "Customer Experience & Warranty Operations",
        "myRole": "Salesforce Consultant & Lead Developer",
        "technicalComplexity": [
            "Visualforce Page Design",
            "JSON Request/Response Handling",
            "Apex Triggers & Approval Processes"
        ],
        "whoIsThisFor": "Manufacturers and retail networks wanting to automate post-purchase support, product tracking, and repair approvals.",
        "metricsPreview": [
            "50% Case Backlog Reduction",
            "30% Faster Claim Decisions",
            "4.8/5 Customer Portal CSAT"
        ],
        "client": {
            "industry": "Consumer Electronics & Appliances",
            "size": "Enterprise",
            "location": "USA / National Retail"
        },
        "businessContext": "The client distributed hardware products nationally, requiring an efficient self-service pipeline for clients to log product registrations and submit repairs.",
        "operationalProblem": "Support staff were manually checking purchase orders and warranty terms. The lack of structured inputs meant incomplete claims delayed repair approvals by weeks.",
        "solutionStrategy": "Implemented Experience Cloud integrated with Service Cloud. Developed customized Visualforce layouts, complex validation rules, and multi-department approvals to automate the claims lifecycle.",
        "objective": [
            "Digitize warranty registration and service requests via a customer portal",
            "Automate claim routing based on product classification rules",
            "Build customized Visualforce screens for detail entry",
            "Establish incoming JSON parsing routines for tracking integration updates"
        ],
        "solution": {
            "description": "Built a comprehensive customer warranty lifecycle portal on Experience Cloud, automating validation checks and streamlining claim decisions.",
            "highlights": [
                "Designed responsive Visualforce pages providing a seamless interface for customers",
                "Developed Apex controllers and Triggers enforcing automated warranty validations",
                "Configured multi-tier Approval Processes routing claims based on product price",
                "Created JSON parser logic mapping incoming logistics payloads to case files",
                "Established custom report types tracking claim processing times and agent loads"
            ]
        },
        "techStack": {
            "salesforce": [
                "Service Cloud",
                "Experience Cloud",
                "Apex",
                "Visualforce Pages"
            ],
            "tools": [
                "Approval Processes",
                "Validation Rules",
                "Page Layouts",
                "Custom Fields"
            ],
            "integrations": [
                "Logistics Tracking API",
                "Product Master Database API"
            ]
        },
        "results": [
            {
                "metric": "-50%",
                "label": "Claims Processing Backlog"
            },
            {
                "metric": "30% Faster",
                "label": "Claim Resolution Times"
            },
            {
                "metric": "4.8/5",
                "label": "Customer CSAT Score"
            },
            {
                "metric": "100%",
                "label": "Product Traceability"
            }
        ],
        "feedback": "The warranty portal automated our entire service department. Customers log their own repairs, and the approval matrix handles validation in minutes instead of days.",
        "takeaways": [
            "Enabling self-service registrations lowers call center volumes.",
            "Using JSON contracts for third-party logistics updates ensures robust tracking visibility.",
            "Automated validations prevent incorrect information from entering the triage queue."
        ],
        "gallery": [],
        "seo": {
            "description": "Salesforce Service Cloud and Experience Cloud portal for automated warranty registration and case management.",
            "keywords": "Warranty Portal, Service Cloud, Experience Cloud, Visualforce, Apex Claims, Case Management"
        },
        "homepageFeatured": {
            "isFeatured": false
        },
        "detailFeatured": false,
        "hubFeatured": false,
        "architecture": "graph TD\n    subgraph Customer_Portal\n        User[Customer Browser] -->|Submits Claim| VF[Visualforce Claim Screen]\n        VF -->|Execute Checks| ApexCtrl[Apex Portal Controller]\n    end\n    subgraph Case_Automation\n        ApexCtrl -->|Insert Case| Case[Case Record]\n        Case -->|Trigger Rules| Route[Case Assignment Rules]\n        Route -->|Auto Assign| Queue[Regional Repair Queue]\n    end\n    subgraph Verification_Logistics\n        Case -->|Validate Age| Approval[Warranty Approval Process]\n        Approval -->|Auto-Approve / Manual Review| Decision{Claim Approved?}\n        Decision -->|Yes| Shipping[JSON Integration: Logistics Shipping Label]\n    end",
        "aiConfig": {
            "title": "Service Operations Architect",
            "primaryCTA": "Design Claims Portal",
            "tools": [
                "roi-estimator",
                "architect-assistant"
            ],
            "context": "Service Cloud and Experience Cloud warranty portal setup."
        }
    },
    {
        "id": 17,
        "title": "Salesforce Autodesk Subscription Management Integration",
        "challenge": {
            "icon": "ph ph-arrows-clockwise",
            "title": "High Customer Churn & Manual Renewal Audits",
            "description": "Siloed Autodesk license data forced account managers to manually track software expirations, resulting in missed renewal windows and customer subscription churn."
        },
        "niche": "Subscription Lifecycle & API Integration",
        "myRole": "Integration Architect",
        "technicalComplexity": [
            "REST API Integrations",
            "Asynchronous Processing Engine",
            "Automated Renewal Opportunity Triggers"
        ],
        "whoIsThisFor": "VARs and software resellers aiming to automate renewal pipeline creations and subscription data updates.",
        "metricsPreview": [
            "98% Subscription Renewal Rate",
            "$2.5M Revenue Churn Defended",
            "Zero Manual License Audits"
        ],
        "client": {
            "industry": "Software Value-Added Reseller (VAR)",
            "size": "Enterprise",
            "location": "North America"
        },
        "businessContext": "The client distributed thousands of Autodesk subscriptions across multiple business segments, requiring automated renewal management.",
        "operationalProblem": "Manually monitoring Autodesk contract end-dates resulted in sales reps missing renewal targets, while client licensing gaps disrupted client projects.",
        "solutionStrategy": "Developed a real-time Autodesk API integration with Sales Cloud. Designed JSON payload handling scripts and programmed automated workflows to trigger renewal opportunities 90 days before subscription expiry.",
        "objective": [
            "Integrate Autodesk REST API to sync licensing records",
            "Automate renewal opportunity generation in Salesforce",
            "Develop validation rules maintaining data ledger alignment",
            "Establish Apex triggers for dynamic Account association mappings"
        ],
        "solution": {
            "description": "Architected a real-time Autodesk integration framework, automating renewal generation, decreasing contract admin effort, and defending core recurring revenues.",
            "highlights": [
                "Built Apex REST callout modules querying Autodesk APIs with OAuth authentication",
                "Developed asynchronous scheduled Apex jobs processing subscription contract databases",
                "Programmed triggers creating renewal opportunities with correct product line items",
                "Configured page layouts, custom fields, and record types tracking active license states",
                "Implemented robust error logging tracking REST callout timeouts and system status"
            ]
        },
        "techStack": {
            "salesforce": [
                "Sales Cloud",
                "Apex",
                "SOQL/SOSL"
            ],
            "tools": [
                "Apex Triggers",
                "Scheduled Apex",
                "Workflow Rules",
                "Validation Rules"
            ],
            "integrations": [
                "Autodesk Subscription API",
                "REST JSON Webhooks"
            ]
        },
        "results": [
            {
                "metric": "98%",
                "label": "Renewal Capture Rate"
            },
            {
                "metric": "$2.5M",
                "label": "Annual Revenue Defended"
            },
            {
                "metric": "Zero",
                "label": "Manual License Audits"
            },
            {
                "metric": "+30h",
                "label": "Monthly Rep Time Restored"
            }
        ],
        "feedback": "The Autodesk integration modernized our sales cycle. Renewals generate automatically, allowing our team to focus on customer engagement instead of spreadsheet audits.",
        "takeaways": [
            "Integrating subscription events directly into opportunities prevents pipeline leakage.",
            "Using custom metadata configurations allows updating external API routes without code deployments.",
            "Scheduled batch processing handles license imports without reaching Salesforce limits."
        ],
        "gallery": [],
        "seo": {
            "description": "Salesforce Sales Cloud integration with Autodesk Subscription API for automated renewals and license management.",
            "keywords": "Autodesk Integration, Subscription Management, Renewal Automation, Sales Cloud, REST API, Contract Renewal"
        },
        "homepageFeatured": {
            "isFeatured": false
        },
        "detailFeatured": false,
        "hubFeatured": true,
        "architecture": "graph LR\n    subgraph Autodesk_Cloud\n        Licensing[Autodesk License DB] -->|Contract Expiry Event| Webhook[Autodesk Webhook Gateway]\n    end\n    subgraph Salesforce_REST_Gateway\n        Webhook -->|POST Request: JSON Payload| Auth[OAuth 2.0 Auth Provider]\n        Auth -->|Ingest Data| APIListener[Apex REST API Listener]\n    end\n    subgraph Opportunity_Orchestration\n        APIListener -->|Verify Accounts| AccountMatcher[Apex Account Matcher]\n        AccountMatcher -->|Update Asset Status| AssetObj[Asset Record]\n        AssetObj -->|Contract Expiry <= 90 Days| OppGenerator[Apex Opportunity Generator]\n        OppGenerator -->|Create Renewal| RenewOpp[Renewal Opportunity Record]\n    end",
        "aiConfig": {
            "title": "Subscription Architect",
            "primaryCTA": "Design Renewal Flow",
            "tools": [
                "integration-advisor",
                "architect-assistant"
            ],
            "context": "Autodesk API integration and subscription management workflow."
        }
    },
    {
        "id": 18,
        "title": "Salesforce Social Media Engagement Automation",
        "challenge": {
            "icon": "ph ph-share-network",
            "title": "Delayed Social Crisis Responses",
            "description": "Fragmented social media channels prevented customer service teams from seeing critical brand mentions and customer issues, causing public PR risks."
        },
        "niche": "Social CRM & Brand Engagement",
        "myRole": "Salesforce Integration Engineer",
        "technicalComplexity": [
            "Facebook Graph API Callouts",
            "LinkedIn API Posting Engines",
            "Chatter Feed Post Ingestions"
        ],
        "whoIsThisFor": "Consumer brands and marketing departments wanting to centralize social tracking and respond directly from Salesforce.",
        "metricsPreview": [
            "15-Min Response SLA Achieved",
            "40% Higher Social Conversions",
            "Zero Missed Brand Mentions"
        ],
        "client": {
            "industry": "Digital Media & Brand Management",
            "size": "Enterprise",
            "location": "Remote Support"
        },
        "businessContext": "A major enterprise managing global consumer brands had disconnected social marketing channels and customer support teams.",
        "operationalProblem": "Support representatives could not track client issues raised on corporate Facebook or LinkedIn pages, leading to public complaints going unresolved.",
        "solutionStrategy": "Engineered a Social CRM automation hub integrating Facebook Graph and LinkedIn REST APIs with Salesforce, parsing incoming payloads to auto-generate Cases and log updates in Chatter.",
        "objective": [
            "Bridge Facebook and LinkedIn REST APIs with Sales Cloud",
            "Parse incoming social payloads into structured JSON streams",
            "Automate Salesforce Case creation for negative customer mentions",
            "Post CRM marketing updates directly to external pages"
        ],
        "solution": {
            "description": "Delivered a centralized Social Media CRM Hub, allowing representatives to track brand updates, resolve issues, and engage customers directly from Salesforce.",
            "highlights": [
                "Developed secure REST integration scripts parsing Facebook Page Webhooks",
                "Programmed LinkedIn API callouts facilitating corporate post publishings",
                "Coded Apex handlers translating raw JSON social events into Chatter Feed items",
                "Configured assignment rule engines directing negative mentions to Support teams",
                "Wrote optimized SOQL queries mapping social profiles to existing Contacts"
            ]
        },
        "techStack": {
            "salesforce": [
                "Sales Cloud",
                "Service Cloud",
                "Apex",
                "Chatter API"
            ],
            "tools": [
                "Apex Triggers",
                "JSON Parsing Engine",
                "Connected Apps",
                "Custom Settings"
            ],
            "integrations": [
                "Facebook Graph API",
                "LinkedIn Developer API"
            ]
        },
        "results": [
            {
                "metric": "15 Min",
                "label": "Critical Response SLA"
            },
            {
                "metric": "+40%",
                "label": "Customer Resolution Speed"
            },
            {
                "metric": "100%",
                "label": "Social Ticket Visibility"
            },
            {
                "metric": "10,000+",
                "label": "Social Chats Logged"
            }
        ],
        "feedback": "The social integration brought our customer service directly into the digital age. We now resolve public customer issues in minutes instead of days.",
        "takeaways": [
            "Connecting social listening directly to CRM cases mitigates brand PR risks.",
            "Using scalable webhook listener architectures avoids Salesforce poll limit exhaustion.",
            "Parsing unstructured data into clean JSON schemas ensures database validation compliance."
        ],
        "gallery": [],
        "seo": {
            "description": "Salesforce social integration with Facebook and LinkedIn APIs to automate Chatter postings and Case creation.",
            "keywords": "Social CRM, Facebook Graph API, LinkedIn API, Chatter Automation, Salesforce Case, Webhook Listener"
        },
        "homepageFeatured": {
            "isFeatured": false
        },
        "detailFeatured": false,
        "hubFeatured": false,
        "architecture": "graph TD\n    subgraph External_Social_Platforms\n        FB[Facebook Page Comment] -->|Webhook Event| Listener[Apex REST Webhook Endpoint]\n        LI[LinkedIn Post Mention] -->|Webhook Event| Listener\n    end\n    subgraph Salesforce_Ingest_Engine\n        Listener -->|Parse JSON| PayloadParser[Apex Payload Parser]\n        PayloadParser -->|Sentiment Analysis| Triage{Negative Sentiment?}\n        Triage -->|Yes| CaseCreator[Apex Case Creator]\n        Triage -->|No| ChatterPoster[Chatter Feed Poster]\n    end\n    subgraph Resolution_Workflow\n        CaseCreator -->|Route Case| AgentConsole[Support Agent Console]\n        ChatterPoster -->|Log Update| AccountFeed[Account Chatter Feed]\n        AgentConsole -->|Reply via API| FB\n    end",
        "aiConfig": {
            "title": "Social CRM Architect",
            "primaryCTA": "Design Social Routing",
            "tools": [
                "roi-estimator",
                "architect-assistant"
            ],
            "context": "Facebook and LinkedIn REST integrations with Sales Cloud."
        }
    },
    {
        "id": 19,
        "title": "Salesforce Sage 300 ERP Integration Framework",
        "challenge": {
            "icon": "ph ph-currency-dollar",
            "title": "Manual Opportunity Sync & Accounting Latency",
            "description": "Siloed sales data in Salesforce and billing data in Sage 300 ERP resulted in manual order keying, delayed invoice processing, and financial reporting lags."
        },
        "niche": "Financial Sync & ERP Modernization",
        "myRole": "Lead Integration Developer",
        "technicalComplexity": [
            "One-way ERP Sync Design",
            "Outbound JSON Serializers",
            "Bulkified Apex Queueables"
        ],
        "whoIsThisFor": "B2B suppliers and wholesalers looking to synchronize Salesforce Opportunity and Account details with Sage 300 ERP.",
        "metricsPreview": [
            "100% Billing Sync Accuracy",
            "Zero Manual Order Entries",
            "40% Faster Order Processing"
        ],
        "client": {
            "industry": "Wholesale Distribution & Manufacturing",
            "size": "Enterprise",
            "location": "North America"
        },
        "businessContext": "The client ran a national wholesale operations team requiring real-time order transmissions to Sage 300 (Accpac) ERP upon deal closure.",
        "operationalProblem": "Manually re-keying 100+ opportunities daily from CRM to ERP caused delivery delays, billing errors, and customer disputes.",
        "solutionStrategy": "Architected a secure, robust one-way synchronization engine utilizing Apex Triggers, JSON serialization utilities, and outbound REST callout handlers to sync opportunity objects upon winning.",
        "objective": [
            "Establish automated one-way Opportunity sync from CRM to Sage 300",
            "Serialize complex multi-line opportunities into clean JSON contracts",
            "Develop validation checks preventing incomplete order syncs",
            "Design logging mechanisms audit tracking integration payloads"
        ],
        "solution": {
            "description": "Engineered a high-throughput, transactional integration framework connecting Salesforce with Sage 300 ERP, ensuring zero billing errors and accelerating order fulfillment.",
            "highlights": [
                "Designed custom Apex JSON serialization models mapping Opportunity Line Items to Sage schema",
                "Developed transaction-safe Apex Triggers queueing integration payloads in custom objects",
                "Programmed API callout retry managers handling ERP service downtime gracefully",
                "Constructed custom SOQL libraries extracting customer pricing rules dynamically",
                "Maintained 92%+ unit test coverage implementing robust mock HTTP handlers"
            ]
        },
        "techStack": {
            "salesforce": [
                "Sales Cloud",
                "Apex",
                "SOQL/SOSL"
            ],
            "tools": [
                "Connected Apps",
                "Custom Settings",
                "Workflow Rules",
                "Validation Rules"
            ],
            "integrations": [
                "Sage 300 (Accpac) API",
                "REST Outbound Webhooks"
            ]
        },
        "results": [
            {
                "metric": "100%",
                "label": "Invoice Sync Accuracy"
            },
            {
                "metric": "Zero",
                "label": "Manual Data Entry Errors"
            },
            {
                "metric": "40% Faster",
                "label": "Fulfillment Cycle Times"
            },
            {
                "metric": "92%+",
                "label": "Apex Unit Test Coverage"
            }
        ],
        "feedback": "The Sage 300 integration eliminated our order entry delays. Deals close in Salesforce, and orders appear instantly in our warehouse ledger.",
        "takeaways": [
            "Decoupling API transmissions via database queues protects Salesforce limits.",
            "Using strict JSON contract validators reduces target system exceptions.",
            "Developing detailed audit log tables simplifies debugging across systems."
        ],
        "gallery": [],
        "seo": {
            "description": "Salesforce Sales Cloud integration with Sage 300 (Accpac) ERP for outbound opportunity and ledger synchronization.",
            "keywords": "Sage 300 Integration, Accpac ERP, Salesforce REST Sync, JSON Outbound, Apex Queueable, Opportunity Automation"
        },
        "homepageFeatured": {
            "isFeatured": false
        },
        "detailFeatured": false,
        "hubFeatured": false,
        "architecture": "graph LR\n    subgraph Salesforce_Sales_Cloud\n        Opp[Closed-Won Opportunity] -->|Execute Trigger| QueueManager[Apex Queue Manager]\n        QueueManager -->|Log Record| LogObj[Integration Log Custom]\n        QueueManager -->|Queue Job| Queueable[Apex Queueable Job]\n    end\n    subgraph REST_API_Gateway\n        Queueable -->|Send JSON Payload| SageGateway[Sage 300 API Gateway]\n    end\n    subgraph Sage_300_ERP\n        SageGateway -->|Verify Invoice| Accpac[Accpac ERP Engine]\n        Accpac -->|Generate Ledger Entry| GL[General Ledger]\n    end\n    Accpac -->|Success Response| Queueable",
        "aiConfig": {
            "title": "Financial Integration Architect",
            "primaryCTA": "Plan Sage Sync",
            "tools": [
                "roi-estimator",
                "architect-assistant"
            ],
            "context": "Salesforce Sales Cloud integration with Sage 300 ERP."
        }
    },
    {
        "id": 20,
        "title": "Enterprise Supplier Management & KPI Analytics Platform",
        "challenge": {
            "icon": "ph ph-chart-line-up",
            "title": "Siloed Supplier Operations & Poor Process Transparency",
            "description": "Legacy procurement tools lacked unified operational metrics, causing duplicate billing issues, slow invoice lifecycles, and a lack of executive supplier KPI transparency."
        },
        "niche": "Supply Chain & Process Intelligence",
        "myRole": "Senior Solutions Architect & Analytics Engineer",
        "technicalComplexity": [
            "Google Charts JavaScript Integrations",
            "Duplication Detection Algorithms",
            "RTR/PTP/OTC Process Analytics"
        ],
        "whoIsThisFor": "Procurement directors and supply chain executives wanting to centralize vendor management and measure metric outputs.",
        "metricsPreview": [
            "75% Duplicate Invoice Deflection",
            "50% Faster Vendor Onboarding",
            "Live KPI Dashboards Installed"
        ],
        "client": {
            "industry": "Global Manufacturing & Logistics",
            "size": "Enterprise (20k+ Employees)",
            "location": "USA / Global Offices"
        },
        "businessContext": "The client managed a massive international supplier network (ESM) and wanted to track execution metrics (EPA) across multiple ERP sources.",
        "operationalProblem": "Overlapping invoice submissions across purchase orders (PO) and non-PO lines led to duplicate payment leakage, while management lacked visual tools to analyze team cycle delays.",
        "solutionStrategy": "Developed the Enterprise Supplier Management (ESM) and Enterprise Performance Analytics (EPA) platforms on Salesforce. Built custom duplicate matching algorithms and integrated Google Charts using Visualforce.",
        "objective": [
            "Modernize supply chain processes (PTP, OTC, RTR)",
            "Deploy interactive Google Charts dashboards within Salesforce",
            "Implement duplicate invoice detection and Flip PO tools",
            "Configure customized record types and validation engines"
        ],
        "solution": {
            "description": "Delivered a centralized ESM portal and EPA analytics platform, improving invoice processing, preventing duplicate entries, and providing global KPI visibility.",
            "highlights": [
                "Built custom invoice workflow components managing PO, Credit, and Recurring invoice streams",
                "Developed Apex duplication match rules scanning incoming payloads for repeating variables",
                "Integrated interactive Google Charts widgets using custom Visualforce and JavaScript controllers",
                "Configured assignment rule engines directing help-desk vendor inquiries to correct agents",
                "Designed detailed KPI reporting models tracking RTR, PTP, and OTC processing metrics"
            ]
        },
        "techStack": {
            "salesforce": [
                "Sales Cloud",
                "Apex",
                "SOQL/SOSL",
                "Visualforce Pages"
            ],
            "tools": [
                "Google Charts",
                "Validation Rules",
                "Page Layouts",
                "Custom Metadata"
            ],
            "integrations": [
                "Procurement ERP APIs",
                "External Financial Databases"
            ]
        },
        "results": [
            {
                "metric": "75%",
                "label": "Duplicate Invoice Reductions"
            },
            {
                "metric": "50% Faster",
                "label": "Supplier Onboarding Cycles"
            },
            {
                "metric": "Live",
                "label": "RTR/PTP/OTC KPI Dashboards"
            },
            {
                "metric": "100%",
                "label": "Invoice Auditing Visibility"
            }
        ],
        "feedback": "The ESM portal and Visualforce dashboards centralized our global vendor tracking. We've eliminated duplicate billing leakage and dramatically speeded up onboarding.",
        "takeaways": [
            "Consolidating vendor interactions into a structured CRM portal reduces invoicing friction.",
            "Using JavaScript visualization libraries like Google Charts improves executive system engagement.",
            "Custom matching algorithms are vital when consolidating records from multiple ERP feeds."
        ],
        "gallery": [],
        "seo": {
            "description": "Enterprise Supplier Management (ESM) and KPI Analytics platform with custom invoice workflows and Google Charts.",
            "keywords": "Enterprise Supplier Management, ESM, KPI Analytics, Google Charts, Procure to Pay, Visualforce Dashboards"
        },
        "homepageFeatured": {
            "isFeatured": false
        },
        "detailFeatured": false,
        "hubFeatured": false,
        "architecture": "graph TD\n    subgraph Invoice_Ingestion\n        Vendor[Vendor Invoicing Portal] -->|Upload Invoice| APIListener[Apex API Ingestion Listener]\n    end\n    subgraph Validation_Duplicate_Check\n        APIListener -->|Verify Attributes| DuplicateEngine[Apex Duplicate Match Engine]\n        DuplicateEngine -->|Scan Databases| DB[(Salesforce DB)]\n        DuplicateEngine -->|Check Duplicates| Rule{Is Duplicate?}\n    end\n    subgraph Invoice_Processing\n        Rule -->|Yes| Alert[Flag Invoice & Email Vendor]\n        Rule -->|No| Calc[Process Payments (PO/Non-PO/Credit)]\n    end\n    subgraph Executive_KPI_Analytics\n        Calc -->|Aggregate Metrics| Dashboard[EPA Reporting Engine]\n        Dashboard -->|Render Visuals| VF[Visualforce Google Charts View]\n    end",
        "aiConfig": {
            "title": "Supply Chain Solutions Lead",
            "primaryCTA": "Design ESM Dashboard",
            "tools": [
                "roi-estimator",
                "architect-assistant"
            ],
            "context": "Enterprise Supplier Management and process performance analytics."
        }
    }
];

// Export to window for global access
window.projectData = projectData;

// Backward Compatibility Alias
window.PORTFOLIO_DATA = {
    projects: projectData
};
