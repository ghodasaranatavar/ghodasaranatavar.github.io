
const projectData = {
    1: {
        title: "AI-Powered Salesforce SMS Automation Platform",
        niche: "Real Estate CRM Automation",
        whoIsThisFor: "Best for sales-driven organizations requiring scalable SMS automation, lead engagement, and real-time response tracking within Salesforce.",
        metricsPreview: [
            "Bulk SMS Automation",
            "Real-Time Response Tracking",
            "Scalable Outreach"
        ],
        client: {
            industry: "Real Estate / Sales Technology",
            size: "Enterprise",
            location: "Global / Remote"
        },
        problem: {
            description: "Sales teams relied on manual SMS outreach within Salesforce Cadence Builder, resulting in delayed responses, inconsistent follow-ups, and limited visibility into customer engagement.",
            impact: "Manual communication workflows reduced outreach scalability, slowed lead engagement, and increased operational overhead across sales teams."
        },
        objective: [
            "Automate bulk SMS operations within Salesforce",
            "Enable response-based branching workflows",
            "Improve delivery tracking and engagement visibility",
            "Support scalable outbound sales communication"
        ],
        solution: {
            description: "Architected a scalable Salesforce SMS automation platform using Apex, LWC, and Twilio integrations to streamline bulk messaging, response tracking, and automated lead routing.",
            highlights: [
                "Designed scalable bulk SMS processing architecture using Apex and Twilio APIs",
                "Built dynamic LWC-based recipient selection and template mapping workflows",
                "Implemented response listener framework for automated Yes/No branching logic",
                "Enabled real-time delivery tracking and engagement visibility",
                "Optimized bulk-safe processing for high-volume outreach operations",
                "Improved sales workflow automation within Salesforce Cadence Builder"
            ]
        },
        techStack: {
            salesforce: ["Sales Cloud", "High Velocity Sales"],
            tools: ["Apex", "LWC", "Flow Builder", "REST API"],
            integrations: ["Twilio Messaging API"]
        },
        results: [
            { metric: "Automated", label: "Bulk SMS Operations" },
            { metric: "Real-Time", label: "Response Tracking" },
            { metric: "Optimized", label: "Lead Engagement Workflows" },
            { metric: "Scalable", label: "Outbound Communication" }
        ],
        feedback: "The automation platform streamlined outbound communication, improved lead engagement workflows, and enabled scalable SMS operations directly within Salesforce.",
        takeaways: [
            "Event-driven response workflows improve sales engagement automation.",
            "Bulk-safe architecture is critical for high-volume communication systems.",
            "Real-time visibility significantly improves follow-up efficiency."
        ]
    },

    2: {
        title: "Salesforce Gemini AI Research & Insights Platform",
        niche: "AI-Powered CRM Intelligence",
        whoIsThisFor: "Best for organizations requiring AI-assisted account research, prompt management, and structured Salesforce-based insight generation.",
        metricsPreview: [
            "AI Prompt Management",
            "Reactive User Experience",
            "Structured Research Insights"
        ],
        client: {
            industry: "Professional Services / SaaS",
            size: "Startup / Mid-size",
            location: "USA / Remote"
        },
        problem: {
            description: "The existing Gemini integration lacked reusable prompt management, structured response storage, and scalable research workflows, resulting in inconsistent AI outputs and repetitive manual research.",
            impact: "Teams experienced fragmented AI usage, inconsistent research quality, and inefficient insight management across Salesforce operations."
        },
        objective: [
            "Implement reusable AI prompt management",
            "Enable structured AI response storage within Salesforce",
            "Improve research workflow efficiency and usability",
            "Stabilize external AI integration processing"
        ],
        solution: {
            description: "Designed and enhanced a Salesforce-based AI research platform integrating Gemini AI with reusable prompts, structured insight storage, and reactive LWC-driven user experiences.",
            highlights: [
                "Architected reusable AI prompt management workflows",
                "Built reactive LWC interfaces for dynamic research operations",
                "Implemented structured Gemini response processing and rendering",
                "Optimized Apex REST integrations with robust JSON handling",
                "Enabled editable prompts for improved AI transparency and control",
                "Improved AI-driven account research scalability within Salesforce"
            ]
        },
        techStack: {
            salesforce: ["Sales Cloud", "Experience Cloud"],
            tools: ["Apex", "LWC", "SOQL", "REST API"],
            integrations: ["Google Gemini AI", "Custom Apex Callouts"]
        },
        results: [
            { metric: "Structured", label: "AI Research Management" },
            { metric: "Reactive", label: "User Experience" },
            { metric: "Optimized", label: "Prompt Processing" },
            { metric: "Stable", label: "AI Integrations" }
        ],
        feedback: "The enhanced Gemini integration improved AI research consistency, usability, and structured insight management across Salesforce teams.",
        takeaways: [
            "Prompt transparency improves trust in AI-driven workflows.",
            "Reactive Salesforce interfaces improve AI adoption and usability.",
            "Structured response management is essential for scalable AI integrations."
        ]
    },

    3: {
        title: "Metadata-Driven Salesforce Automation Platform",
        niche: "Enterprise CRM Automation",
        whoIsThisFor: "Best for enterprises managing high-volume Salesforce operations requiring scalable automation, asynchronous processing, and metadata-driven configurations.",
        metricsPreview: [
            "Metadata-Driven Architecture",
            "Asynchronous Processing",
            "Workflow Automation"
        ],
        client: {
            industry: "IT Services / Enterprise Systems",
            size: "Enterprise",
            location: "Global / Remote"
        },
        problem: {
            description: "Existing business operations relied on unstable batch jobs, hardcoded processing logic, and manual workflows, limiting scalability and increasing operational inefficiencies.",
            impact: "Frequent scheduler failures, inconsistent processing, and manual intervention reduced system reliability and impacted enterprise business operations."
        },
        objective: [
            "Implement metadata-driven processing architecture",
            "Optimize batch and scheduler reliability",
            "Automate operational workflows and notifications",
            "Improve scalability and system stability"
        ],
        solution: {
            description: "Designed a scalable Salesforce automation platform leveraging metadata-driven configurations, asynchronous Apex processing, and workflow automation to stabilize enterprise operations.",
            highlights: [
                "Architected metadata-driven field mapping framework",
                "Optimized Batch Apex and Queueable processing for large-scale operations",
                "Stabilized scheduler execution and asynchronous workflows",
                "Implemented automated notifications and business process automation",
                "Enhanced API synchronization and error handling mechanisms",
                "Improved enterprise system reliability and operational scalability"
            ]
        },
        techStack: {
            salesforce: ["Sales Cloud", "Service Cloud", "Experience Cloud"],
            tools: ["Apex", "Batch Apex", "Queueable Apex", "Scheduler", "Flow Builder", "LWC"],
            integrations: ["REST APIs", "External Enterprise Systems"]
        },
        results: [
            { metric: "Automated", label: "Business Operations" },
            { metric: "Stable", label: "Batch & Scheduler Processing" },
            { metric: "Scalable", label: "Metadata-Driven Architecture" },
            { metric: "Optimized", label: "Enterprise Workflows" }
        ],
        feedback: "The platform significantly improved automation reliability, reduced manual intervention, and stabilized large-scale Salesforce operations.",
        takeaways: [
            "Metadata-driven architecture improves long-term maintainability.",
            "Asynchronous processing is critical for enterprise scalability.",
            "Workflow automation reduces operational dependency on manual processes."
        ]
    },

    4: {
        title: "Salesforce Experience Cloud Training & Certification Platform",
        niche: "Education & Certification Management",
        whoIsThisFor: "Best for organizations managing onboarding, certification workflows, training applications, and document operations within Salesforce Experience Cloud.",
        metricsPreview: [
            "Experience Cloud Workflows",
            "Automated PDF Generation",
            "Azure File Management"
        ],
        client: {
            industry: "Education & Certification Management",
            size: "Enterprise",
            location: "Global / Remote"
        },
        problem: {
            description: "The platform required scalable onboarding, application processing, policy management, and Azure-based document handling for global training and certification operations.",
            impact: "Fragmented onboarding and manual document workflows reduced operational efficiency and created challenges in centralized compliance management."
        },
        objective: [
            "Centralize training and certification workflows",
            "Automate document and PDF operations",
            "Enable Azure-integrated file management",
            "Improve onboarding and application visibility"
        ],
        solution: {
            description: "Designed and enhanced a Salesforce Experience Cloud platform supporting onboarding automation, LMS workflows, Azure-integrated document management, and certification operations.",
            highlights: [
                "Built scalable Experience Cloud workflows for certification management",
                "Implemented onboarding and training application automation",
                "Integrated Azure-based file upload and deletion operations",
                "Developed automated PDF generation and download workflows",
                "Enhanced trainer-program visibility and application tracking",
                "Stabilized deployments and optimized Apex testing operations"
            ]
        },
        techStack: {
            salesforce: ["Experience Cloud", "Sales Cloud"],
            tools: ["Apex", "LWC", "Aura", "Flow Builder", "SOQL", "PDF Generation"],
            integrations: ["Azure File Storage", "Payment Integrations", "REST APIs"]
        },
        results: [
            { metric: "Automated", label: "Document Workflows" },
            { metric: "Centralized", label: "Training Operations" },
            { metric: "Optimized", label: "Application Experience" },
            { metric: "Stable", label: "Deployment Operations" }
        ],
        feedback: "The Experience Cloud platform improved onboarding efficiency, document management, and operational scalability for global certification workflows.",
        takeaways: [
            "Experience Cloud enables scalable onboarding and certification operations.",
            "Integrated document management improves compliance and operational visibility.",
            "Automation significantly improves application processing efficiency."
        ]
    },

    5: {
        title: "Enterprise Opportunity & Document Automation Platform",
        niche: "CRM Automation / Document Management / API Integration",
        whoIsThisFor: "Best for enterprises managing opportunity workflows, SharePoint-based document operations, external integrations, and secure Salesforce-driven business processes.",
        metricsPreview: [
            "Metadata-Driven Automation",
            "Document Visibility",
            "API Synchronization"
        ],
        client: {
            industry: "Enterprise CRM & Document Operations",
            size: "Enterprise",
            location: "Global / Remote"
        },
        problem: {
            description: "The organization required centralized opportunity management, proposal automation, SharePoint integration, and secure API-driven workflows within Salesforce.",
            impact: "Disconnected systems and manual document operations reduced operational visibility, increased overhead, and limited scalability across enterprise business workflows."
        },
        objective: [
            "Automate proposal and opportunity workflows",
            "Centralize SharePoint document operations",
            "Implement secure API integrations and field mapping",
            "Improve scalability and operational visibility"
        ],
        solution: {
            description: "Architected an enterprise Salesforce platform combining opportunity management, SharePoint integration, proposal automation, and secure API orchestration.",
            highlights: [
                "Designed recursive SharePoint folder rendering architecture",
                "Implemented OAuth-based authentication and secure Apex REST integrations",
                "Built metadata-driven field mapping between Salesforce and external systems",
                "Developed proposal initiation and opportunity automation workflows",
                "Enhanced Resume Parser integration and recruitment processing operations",
                "Implemented role hierarchy and profile-based access management",
                "Optimized real-time folder synchronization and Lightning Data Table rendering",
                "Stabilized external API endpoints and enterprise integration workflows"
            ]
        },
        techStack: {
            salesforce: ["Sales Cloud", "Experience Cloud"],
            tools: ["Apex", "LWC", "JavaScript", "SOQL", "REST API"],
            integrations: ["Microsoft SharePoint API", "OAuth", "Indeed APIs", "Custom Integration APIs"]
        },
        results: [
            { metric: "Automated", label: "Opportunity Workflows" },
            { metric: "Centralized", label: "Document Operations" },
            { metric: "Optimized", label: "Recursive Folder Management" },
            { metric: "Stable", label: "API Synchronization" }
        ],
        feedback: "The platform improved proposal automation, document visibility, SharePoint operations, and enterprise integration reliability within Salesforce.",
        takeaways: [
            "Metadata-driven integrations improve scalability and maintainability.",
            "Recursive rendering architectures simplify enterprise document management.",
            "Secure API orchestration improves operational reliability."
        ]
    },
    6: {
        "title": "Enterprise Real Estate CRM & Transaction Automation Platform",
        "niche": "Real Estate CRM / MLS & Sales Automation",
        "whoIsThisFor": "Best for real estate brokerages, agencies, and property management firms requiring centralized lead management, MLS integrations, transaction automation, communication workflows, and digital document operations within Salesforce.",
        "metricsPreview": [
            "MLS Data Synchronization",
            "Automated Sales Cadences",
            "Digital Transaction Management"
        ],
        "client": {
            "industry": "Real Estate Technology",
            "size": "Enterprise",
            "location": "USA / Remote"
        },
        "problem": {
            "description": "The organization relied on disconnected systems for lead management, MLS property synchronization, calling operations, document signing, commission tracking, and accounting workflows, creating operational inefficiencies and inconsistent agent experiences.",
            "impact": "Manual follow-ups, fragmented transaction processes, delayed document execution, and disconnected integrations reduced sales productivity, agent efficiency, and transaction visibility across the business."
        },
        "objective": [
            "Centralize real estate operations within Salesforce",
            "Integrate MLS platforms and property data providers",
            "Automate lead engagement and sales cadences",
            "Enable digital document generation and e-signing workflows",
            "Improve transaction visibility and commission tracking",
            "Integrate accounting and communication platforms"
        ],
        "solution": {
            "description": "Architected and enhanced an enterprise-grade Salesforce platform for real estate operations by integrating MLS systems, communication services, digital document workflows, transaction management, automated cadences, and accounting platforms into a unified CRM ecosystem.",
            "highlights": [
                "Integrated MLS and property data platforms including Bridge Interactive, RealEstateAPI, and Zillow for centralized property synchronization",
                "Developed automated lead engagement workflows with Twilio SMS automation and Dialpad-based calling operations",
                "Built timezone-based automated SMS campaigns and cadence execution for real estate agents",
                "Designed a custom Salesforce Cadence Builder supporting configurable multi-step sales engagement workflows",
                "Implemented custom LWC-based email composer for personalized outbound communication",
                "Integrated NaturalForms via webhooks for automated document generation and signature workflows",
                "Enabled digital signing workflows using NaturalForms, OpenSign, and Documenso integrations",
                "Developed transaction document checklist management for end-to-end real estate deal processing",
                "Implemented commission management workflows and real estate transaction automation",
                "Integrated SharePoint-based document management for centralized file visibility and storage",
                "Built Experience Cloud portals for agent collaboration and operational access",
                "Integrated accounting systems including QuickBooks for financial synchronization and reporting",
                "Designed real-time reports and dashboards for sales, transaction, and operational visibility",
                "Optimized secure REST API integrations, webhook processing, and scalable Apex automation architecture"
            ]
        },
        "techStack": {
            "salesforce": [
                "Sales Cloud",
                "Experience Cloud",
                "Service Cloud"
            ],
            "tools": [
                "Apex",
                "LWC",
                "Flow Builder",
                "SOQL",
                "REST API",
                "Webhook Integrations"
            ],
            "integrations": [
                "Bridge Interactive MLS",
                "RealEstateAPI",
                "Zillow",
                "Twilio",
                "Dialpad",
                "NaturalForms",
                "OpenSign",
                "Documenso",
                "Microsoft SharePoint",
                "QuickBooks"
            ]
        },
        "results": [
            {
                "metric": "Centralized",
                "label": "Real Estate Operations"
            },
            {
                "metric": "Automated",
                "label": "Lead Engagement & Cadences"
            },
            {
                "metric": "Integrated",
                "label": "MLS & Transaction Workflows"
            },
            {
                "metric": "Optimized",
                "label": "Document & E-Sign Operations"
            }
        ],
        "feedback": "The platform streamlined real estate operations by centralizing MLS synchronization, communication workflows, digital transaction processing, and accounting integrations within a scalable Salesforce ecosystem.",
        "takeaways": [
            "Centralized CRM ecosystems significantly improve real estate operational efficiency.",
            "Automated cadences and communication workflows accelerate lead engagement.",
            "Integrated digital signing and document automation streamline transaction lifecycles.",
            "Scalable API-driven architecture improves long-term integration reliability and maintainability."
        ],
        "references": {
            "bridgeDataOutput": "https://bridgedataoutput.com",
            "bridgeApi": "https://api.bridgedataoutput.com/api/v2/OData/har/",
            "realEstateApi": "https://www.realestateapi.com",
            "realEstateSkipTraceApi": "https://api.realestateapi.com/v1/SkipTrace"
        }
    },
    7: {
        title: "Salesforce Experience Cloud Order & Shipment Management Platform",
        niche: "Healthcare eCommerce / Order Management Automation",
        whoIsThisFor: "Best for healthcare distributors, dental suppliers, and eCommerce-driven businesses requiring Salesforce-based order management, shipment tracking, customer portals, and automated communication workflows.",
        metricsPreview: [
            "Shipment Automation",
            "Experience Cloud Order Management",
            "Integrated Customer Engagement"
        ],
        client: {
            industry: "Healthcare / Dental eCommerce",
            size: "Mid-size / Enterprise",
            location: "USA / Remote"
        },
        problem: {
            description: "The organization required a centralized platform for order management, shipment tracking, customer communication, and lead capture across Salesforce Experience Cloud and external platforms.",
            impact: "Disconnected shipment systems, manual communication workflows, and fragmented lead management processes reduced operational visibility, delayed order processing, and impacted customer experience."
        },
        objective: [
            "Centralize order and shipment management within Salesforce",
            "Integrate ShipStation for automated shipment synchronization",
            "Enable custom email communication workflows",
            "Connect Wordpress lead capture with Salesforce",
            "Improve customer self-service experience through Experience Cloud"
        ],
        solution: {
            description: "Designed and enhanced a Salesforce Experience Cloud-based order and shipment management platform integrating ShipStation, Wordpress lead capture, automated email workflows, and customer-facing order operations.",
            highlights: [
                "Developed custom Salesforce email composer for personalized customer communication workflows",
                "Integrated ShipStation APIs for shipment synchronization and tracking automation",
                "Built shipment management workflows for order status visibility and operational tracking",
                "Implemented Wordpress Contact Form and Salesforce Web-to-Lead integration",
                "Designed Experience Cloud-based order management and customer self-service portal",
                "Automated lead capture and customer onboarding workflows",
                "Enhanced order lifecycle visibility using Apex automation and Flow Builder",
                "Implemented secure REST API integrations between Salesforce and external platforms",
                "Optimized customer communication and shipment notification workflows",
                "Improved operational efficiency for dental product order management"
            ]
        },
        techStack: {
            salesforce: [
                "Sales Cloud",
                "Experience Cloud",
                "Service Cloud"
            ],
            tools: [
                "Apex",
                "LWC",
                "Flow Builder",
                "SOQL",
                "REST API",
                "Web-to-Lead"
            ],
            integrations: [
                "ShipStation API",
                "Wordpress Contact Form",
                "Salesforce Web-to-Lead"
            ]
        },
        results: [
            { metric: "Automated", label: "Shipment Processing" },
            { metric: "Centralized", label: "Order Management" },
            { metric: "Integrated", label: "Lead Capture Workflows" },
            { metric: "Optimized", label: "Customer Communication" }
        ],
        feedback: "The platform streamlined order processing, shipment visibility, customer communication, and lead capture operations through a unified Salesforce Experience Cloud ecosystem.",
        takeaways: [
            "Integrated shipment automation significantly improves operational efficiency.",
            "Experience Cloud enables scalable customer self-service operations.",
            "Automated communication workflows improve customer engagement and visibility.",
            "Centralized order and shipment management reduces operational fragmentation."
        ],
        references: {
            website: "https://ihomedental.com/"
        }
    },
    8: {
        title: "Salesforce Public Sector Licensing & Permitting Platform",
        niche: "Government Licensing & Permit Management",
        whoIsThisFor: "Best for government agencies and public sector organizations requiring centralized licensing, permit processing, citizen services, compliance tracking, and workflow automation within Salesforce.",
        metricsPreview: [
            "Permit Workflow Automation",
            "Citizen Self-Service",
            "Public Sector Compliance"
        ],
        client: {
            industry: "USA Government / Public Sector",
            size: "Enterprise",
            location: "USA / Remote"
        },
        problem: {
            description: "The organization required a scalable platform to manage licensing, permitting, inspections, approvals, citizen applications, and compliance workflows across multiple public sector departments.",
            impact: "Manual approval processes, disconnected systems, and fragmented citizen interactions reduced operational efficiency, delayed permit approvals, and limited visibility into government service operations."
        },
        objective: [
            "Centralize licensing and permitting operations",
            "Enable citizen self-service experiences",
            "Automate approval and compliance workflows",
            "Improve operational visibility and case tracking",
            "Support scalable public sector service delivery"
        ],
        solution: {
            description: "Designed and enhanced a Salesforce Public Sector Solutions platform supporting licensing, permitting, inspections, application processing, workflow automation, and citizen engagement for government operations.",
            highlights: [
                "Implemented Salesforce Public Sector Solutions for licensing and permitting workflows",
                "Built Experience Cloud portals for citizen application submission and tracking",
                "Developed automated approval processes using Flow Builder and Apex",
                "Configured permit lifecycle management and compliance tracking",
                "Implemented inspection scheduling and status management workflows",
                "Built dynamic Lightning Web Components for government service operations",
                "Enhanced case management and document handling processes",
                "Optimized role-based access control and secure public sector workflows",
                "Integrated REST APIs for external government and third-party system communication",
                "Improved operational reporting and dashboard visibility for agency teams"
            ]
        },
        techStack: {
            salesforce: [
                "Public Sector Solutions",
                "Experience Cloud",
                "Service Cloud",
                "Sales Cloud"
            ],
            tools: [
                "Apex",
                "LWC",
                "Flow Builder",
                "SOQL",
                "REST API",
                "OmniStudio"
            ],
            integrations: [
                "Government APIs",
                "External Compliance Systems",
                "Document Management Integrations"
            ]
        },
        results: [
            {
                metric: "Automated",
                label: "Permit & License Workflows"
            },
            {
                metric: "Centralized",
                label: "Citizen Service Operations"
            },
            {
                metric: "Optimized",
                label: "Approval & Compliance Tracking"
            },
            {
                metric: "Enhanced",
                label: "Public Sector Visibility"
            }
        ],
        feedback: "The platform improved licensing operations, citizen engagement, workflow automation, and compliance visibility across public sector departments using Salesforce Public Sector Solutions.",
        takeaways: [
            "Public Sector Solutions accelerates government digital transformation initiatives.",
            "Citizen self-service portals improve operational efficiency and transparency.",
            "Workflow automation significantly reduces permit processing delays.",
            "Secure role-based architecture is critical for government platforms."
        ]
    }



};

window.projectData = projectData;