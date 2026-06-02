import React from 'react';
import {
    FaReact, FaNodeJs, FaPython, FaDocker, FaAws,
    FaGitAlt, FaLinux, FaDatabase, FaWindows, FaCloud, FaServer, FaDesktop,
    FaNetworkWired, FaShieldAlt, FaTerminal, FaGithub, FaJava, FaTicketAlt
} from 'react-icons/fa';
import {
    SiTypescript, SiVite, SiTailwindcss, SiKubernetes, SiTerraform,
    SiMongodb, SiPostgresql, SiRedis, SiVmware,
    SiCitrix, SiGnubash, SiSolidity, SiOracle,
    SiGooglecloud, SiJira
} from 'react-icons/si';
import { TbBrandOffice } from 'react-icons/tb';

export const personalInfo = {
    name: "Rajeev Upadhyay",
    role: "Sr. Software Engineer",
    bio: "Software Engineer with 9+ years of experience across enterprise IT operations, cloud infrastructure, and managed services delivery. Proven track record in 24×7 operational environments — monitoring, incident triage, and runbook-driven response — with hands-on expertise in Azure IaaS, Citrix XenApp/XenDesktop, PowerShell/Python scripting, and ITSM tooling (ServiceNow). Currently operating Softcorp Group LLC delivering cloud and infrastructure solutions to clients across Nepal, India, and the USA. Formerly at Tata Consultancy Services (TCS), managing 3,500+ servers and 5,000+ users in a mission-critical enterprise environment.",
    email: "rajeev.upadhyay@live.in",
    location: "Lucknow, India",
    resumeUrl: "/RAJEEV_UPADHYAY_Resume.pdf",
    resumeDocxUrl: "/Rajeev_Upadhyay_Resume.docx",
    phone: "+1 (929) 266-4560, +91 9044602200",
    github: "https://github.com/rockstarrajeev",
    socials: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/rajeevrockstar/" },
        { name: "GitHub", url: "https://github.com/rockstarrajeev" },
        { name: "X", url: "https://x.com/rajeevrockstar" },
        { name: "YouTube", url: "https://www.youtube.com/@RajeevRockstar" },
        { name: "Instagram", url: "https://www.instagram.com/rockstar_rajeevupadhyay/" },
        { name: "Facebook", url: "https://www.facebook.com/rajeevrohitupadhyay" }
    ]
};

export const skillsData = [
    // Infrastructure & Systems
    { name: 'Windows Server (2012–2022)', level: 95, category: 'Infrastructure' },
    { name: 'Active Directory / GPO / DNS / DHCP', level: 95, category: 'Infrastructure' },
    { name: 'SCCM / WSUS / Intune', level: 90, category: 'Endpoint Management' },
    { name: 'VMware vSphere / Hyper-V', level: 90, category: 'Virtualization' },
    { name: 'Citrix XenApp / XenDesktop 7.x', level: 85, category: 'VDI' },

    // Cloud & Identity
    { name: 'Microsoft 365 / Azure AD (Entra ID)', level: 90, category: 'Cloud' },
    { name: 'Azure IaaS (VMs, V-Nets, Storage)', level: 85, category: 'Cloud' },

    // Scripting & Automation
    { name: 'PowerShell & Python Automation', level: 85, category: 'Scripting' },

    // Monitoring & Ops
    { name: 'SolarWinds (NPM, SAM, NTA)', level: 85, category: 'Monitoring' },

    // Security
    { name: 'Server Hardening / CIS Benchmarks', level: 80, category: 'Security' },
    { name: 'Vulnerability Mgmt / Defender / MFA', level: 80, category: 'Security' },

    // Emerging
    { name: 'Docker / Kubernetes / AI-ML', level: 75, category: 'Emerging Tech' },
];

export const techStack = [
    // Row 1 — Core Infrastructure
    { name: "Windows Server", icon: <FaWindows size={36} className="text-[#00a4ef]" /> },
    { name: "Active Directory", icon: <FaNetworkWired size={36} className="text-[#0078D4]" /> },
    { name: "Azure / Entra ID", icon: <FaCloud size={36} className="text-[#0089D6]" /> },
    { name: "M365 / Office 365", icon: <TbBrandOffice size={36} className="text-[#D83B01]" /> },
    { name: "VMware", icon: <SiVmware size={36} className="text-[#607078] dark:text-slate-300" /> },

    // Row 2 — Operations & Cloud
    { name: "Citrix VDI", icon: <SiCitrix size={36} className="text-[#452170] dark:text-[#B4A0DC]" /> },
    { name: "Linux", icon: <FaLinux size={36} className="text-slate-800 dark:text-slate-200" /> },
    { name: "AWS", icon: <FaAws size={36} className="text-[#FF9900]" /> },
    { name: "Oracle Cloud", icon: <SiOracle size={36} className="text-[#F80000]" /> },
    { name: "Google Cloud", icon: <SiGooglecloud size={36} className="text-[#4285F4]" /> },

    // Row 3 — Scripting, DevOps & Emerging
    { name: "PowerShell", icon: <FaTerminal size={36} className="text-[#012456] dark:text-[#5391FE]" /> },
    { name: "Python", icon: <FaPython size={36} className="text-[#3776AB]" /> },
    { name: "Bash", icon: <SiGnubash size={36} className="text-[#4EAA25] dark:text-[#89E051]" /> },
    { name: "Docker", icon: <FaDocker size={36} className="text-[#2496ED]" /> },
    { name: "Kubernetes", icon: <SiKubernetes size={36} className="text-[#326CE5]" /> },

    // Row 4 — Tools & Ticketing
    { name: "ServiceNow", icon: <FaTicketAlt size={36} className="text-[#81B5A1]" /> },
    { name: "JIRA", icon: <SiJira size={36} className="text-[#0052CC]" /> },
    { name: "Java", icon: <FaJava size={36} className="text-[#ED8B00]" /> },
    { name: "Git", icon: <FaGitAlt size={36} className="text-[#F05032]" /> },
    { name: "Solidity", icon: <SiSolidity size={36} className="text-[#363636] dark:text-slate-300" /> },
];

export const experienceData = [
    {
        id: 1,
        role: "Founder & Independent IT Consultant",
        company: "Softcorp Group LLC (Remote / USA-registered LLC)",
        period: "Jan 2023 – Present",
        description: "Delivering enterprise-grade cloud and infrastructure solutions to clients across Nepal, India, and the USA. Specialist in NOC-style eyes-on-glass monitoring, performance optimization, and robust automated workflows.",
        achievements: [
            "Architected and deployed Azure IaaS environments (VMs, VNets, NSGs, Storage Accounts) via ARM templates and PowerShell, reducing provisioning times by 60%.",
            "Configured Azure Monitor and Log Analytics workspaces with custom KQL queries for dashboards and centralized alerting across client subscriptions.",
            "Authored Azure Automation Runbooks (PowerShell) for scheduled VM start/stop, reducing compute costs by ~30% monthly.",
            "Managed Azure AD tenants, including user/group lifecycle, Conditional Access, MFA enforcement, and hybrid Azure AD Connect sync troubleshooting.",
            "Administered and tuned Citrix XenApp/XenDesktop CVAD environments, improving session reliability and optimizing VDA/profile management.",
            "Built PowerShell frameworks for user provisioning, license management, and notification flows across hybrid AD environments.",
            "Developed Python event-parsing scripts and reusable PowerShell frameworks for automated Windows Server CIS Benchmark hardening scorecards."
        ]
    },
    {
        id: 2,
        role: "Systems Engineer",
        company: "Tata Consultancy Services (TCS), New Delhi, India",
        period: "Jun 2015 – Jun 2021",
        description: "Operated in a NOC-style, 24×7 enterprise environment supporting 3,500+ servers and workstations, upholding strict runbook/SOP-driven incident response and SLA guidelines.",
        achievements: [
            "Operated in a NOC-style environment supporting 3,500+ servers, following strict runbook and SOP-driven incident response procedures.",
            "Configured SolarWinds dashboards and threshold alerts for proactive infrastructure monitoring, reducing P1/P2 MTTR by 35%.",
            "Authored and maintained 30+ SOPs and technical runbooks, significantly improving L1/L2 first-call resolution rates.",
            "Maintained 100% ITIL compliance in ServiceNow for change, incident, and problem management with rigorous shift-handover docs.",
            "Led migration of 1,500+ mailboxes from on-premises Exchange to Microsoft 365, configuring Azure AD Connect and MFA to reduce password resets by 40%.",
            "Enforced Conditional Access policies in Azure AD to protect corporate data from unmanaged device access.",
            "Managed 200+ VMs on VMware ESXi and Hyper-V, improving resource utilization by 25% through consolidation and rightsizing.",
            "Stabilized Citrix XenApp farm (500+ concurrent users), reducing session disconnects by 35% via policy tuning and profile optimization.",
            "Developed PowerShell automation suites for user provisioning, health checks, and weekly compliance reporting, saving 10+ hours weekly.",
            "Built Python log parsers and patch status aggregators, reducing reporting cycle times from 2 days to under 30 minutes.",
            "Orchestrated monthly Windows patching cycles using SCCM/WSUS for 3,500+ endpoints, achieving 98.5% compliance within 48 hours of release.",
            "Administered Active Directory for 5,000+ users, with GPO optimization reducing login-related helpdesk tickets by 30%."
        ]
    }
];

export const educationData = [
    {
        id: 1,
        degree: "Master of Science in Computer Science",
        institution: "Banaras Hindu University (BHU)",
        period: "Dec 2021 – Dec 2023",
    },
    {
        id: 2,
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "University of Lucknow",
        period: "Dec 2011 – Dec 2014",
    }
];

export const projectsData = [
    {
        id: 1,
        title: "Azure Enterprise Landing Zone Architecture",
        category: "Cloud & Infrastructure",
        image: "/azure_architecture.png",
        description: "A highly available, secure, and scalable Azure environment deployed entirely via Infrastructure-as-Code.",
        problem: "Manual deployment of cloud resources led to configuration drift and security compliance gaps.",
        solution: "Architected a Hub-Spoke Azure landing zone using Bicep/ARM templates, Azure Firewall, and VPN Gateways, fully integrated with Azure DevOps CI/CD pipelines.",
        tools: ["Azure", "Bicep", "PowerShell", "Entra ID"],
        github: "https://github.com/rockstarrajeev/azure-enterprise-landing-zone",
        demo: null
    },
    {
        id: 2,
        title: "IT Operations & AD Automation Suite",
        category: "Systems Engineering",
        image: "/enterprise_automation.png",
        description: "A comprehensive framework of PowerShell and Python scripts automating massive-scale system administration.",
        problem: "Helpdesk and L2 teams spent thousands of hours annually on repetitive provisioning and health-check tasks.",
        solution: "Developed modular automation runbooks for zero-touch user lifecycle management in Active Directory, M365 licensing, and automated VMware ESXi health audits.",
        tools: ["PowerShell", "Python", "Active Directory", "VMware"],
        github: "https://github.com/rockstarrajeev/it-operations-ad-automation",
        demo: null
    },
    {
        id: 3,
        title: "Zero-Trust Security & Compliance Auditor",
        category: "Cyber Security",
        image: "/cybersecurity_shield.png",
        description: "Automated compliance auditing framework ensuring adherence to CIS Benchmarks across hybrid environments.",
        problem: "Maintaining compliance across 3,500+ endpoints required significant manual labor and delayed reporting.",
        solution: "Engineered a Python-based compliance engine and PowerShell agents that continuously audit server configurations, flag deviations, and enforce SCCM remediation baselines.",
        tools: ["Python", "SCCM", "Defender", "Intune"],
        github: "https://github.com/rockstarrajeev/zero-trust-compliance-auditor",
        demo: null
    },
    {
        id: 4,
        title: "AI-Driven ITSM Ticket Triage",
        category: "AI & Automation",
        image: "/generated-image2.png",
        description: "An intelligent workflow tool integrated with ServiceNow to autonomously categorize and route IT incidents.",
        problem: "Manual ticket triage in the NOC environment was a major bottleneck for SLA adherence.",
        solution: "Built a Python FastAPI backend leveraging Local LLMs to extract intents from tickets, auto-populate categories, and suggest existing runbook links for L1 engineers.",
        tools: ["Python", "FastAPI", "LLMs", "ServiceNow"],
        github: "https://github.com/rockstarrajeev/ai-itsm-ticket-triage",
        demo: null
    }
];

export const githubRepos = [
    {
        id: 1,
        name: "Portfolio Website",
        description: "My personal portfolio site built with React, Vite, TailwindCSS, and Framer Motion.",
        language: "JavaScript",
        languageColor: "#f1e05a",
        stars: 0,
        url: "https://github.com/rockstarrajeev"
    },
    {
        id: 2,
        name: "AI Workflow Automation",
        description: "Intelligent IT workflow automation using Python, FastAPI, and LLMs for ticket triage and runbook generation.",
        language: "Python",
        languageColor: "#3572A5",
        stars: 0,
        url: "https://github.com/rockstarrajeev"
    },
    {
        id: 3,
        name: "Smart Contract Security",
        description: "Policy-as-Code pipeline for automated smart contract security analysis with Slither and Mythril.",
        language: "Solidity",
        languageColor: "#AA6746",
        stars: 0,
        url: "https://github.com/rockstarrajeev"
    },
    {
        id: 4,
        name: "PowerShell Automation Scripts",
        description: "Collection of PowerShell scripts for Windows Server administration, AD management, and SCCM automation.",
        language: "PowerShell",
        languageColor: "#012456",
        stars: 0,
        url: "https://github.com/rockstarrajeev"
    }
];

export const certificationsData = [
    {
        id: 1,
        name: "Oracle Cloud Infrastructure 2025 AI Foundations Associate (1Z0-1122-25)",
        issuer: "Oracle",
        date: "2025"
    },
    {
        id: 2,
        name: "Build Your Generative AI Productivity Skills",
        issuer: "Microsoft & LinkedIn",
        date: "2024"
    },
    {
        id: 3,
        name: "IIT Madras: The Joy of Computing Using Python",
        issuer: "IIT Madras",
        date: "2023"
    },
    {
        id: 4,
        name: "IIIT Hyderabad: Online Privacy & Cloud Security",
        issuer: "IIIT Hyderabad",
        date: "2022"
    },
    {
        id: 5,
        name: "IIT Kharagpur: Ethical Hacking & Cloud Security",
        issuer: "IIT Kharagpur",
        date: "2022"
    },
    {
        id: 6,
        name: "IELTS Academic English Proficiency",
        issuer: "IELTS",
        date: "2019"
    },
    {
        id: 7,
        name: "ITIL Certified Professional",
        issuer: "AXELOS",
        date: "2018"
    }
];
