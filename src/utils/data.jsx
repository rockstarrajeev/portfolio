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
    role: "Systems Engineer",
    bio: "Results-driven Systems Engineer with over 6 years of experience at Tata Consultancy Services (TCS). Specialist in designing, automating, and managing secure, high-availability Windows infrastructure for enterprise clients. Expertise includes Windows Server administration, Active Directory, Microsoft 365, Azure cloud services, SCCM, VMware virtualization, and Citrix VDI solutions.",
    email: "rajeev.upadhyay@protonmail.com",
    location: "Kapilvastu, Nepal",
    resumeUrl: "/RAJEEV_UPADHYAY_Resume.pdf",
    phone: "+1 (929) 266-4560",
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
        role: "Systems Engineer",
        company: "Tata Consultancy Services (TCS), New Delhi, India",
        period: "June 2015 – June 2021",
        description: "Managed secure, high-availability Windows infrastructure for enterprise clients. Configured custom dashboards in SolarWinds, reducing MTTR for P1/P2 incidents by 35%. Automated ticket triage and incident resolution using Python (FastAPI) and LLMs.",
        achievements: [
            "Achieved 98.5% patch compliance across 3,500+ servers and workstations via SCCM/WSUS.",
            "Administered multi-domain Active Directory for 5,000+ users, reducing helpdesk tickets by 30%.",
            "Maintained 200+ VMs across VMware ESXi and Hyper-V, improving resource utilization by 25%.",
            "Migrated 1,500+ mailboxes from on-premise Exchange to O365 with Azure AD Connect & MFA.",
            "Stabilized Citrix XenApp farm (500+ users), reducing disconnects by 35%.",
            "Saved 10+ hours weekly through PowerShell and Python automation.",
            "Authored 30+ SOPs and technical runbooks for the team."
        ]
    }
];

export const educationData = [
    {
        id: 1,
        degree: "Master of Science in Computer Science",
        institution: "Banaras Hindu University (BHU)",
        period: "2011 – 2023",
    },
    {
        id: 2,
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "University of Lucknow",
        period: "2011 – 2014",
    }
];

export const projectsData = [
    {
        id: 1,
        title: "AI-Driven Workflow Automation",
        category: "AI & Automation",
        image: "/generated-image2.png",
        description: "Built an intelligent workflow automation tool to streamline complex IT processes, minimizing manual intervention.",
        problem: "Manual ticket triage was time-consuming and prone to human error.",
        solution: "Built a Python (FastAPI) backend using LLMs for ticket triage, intent extraction, and automated runbook generation.",
        tools: ["Python", "FastAPI", "LLMs", "MLflow"],
        github: "https://github.com/rockstarrajeev",
        demo: "https://rajeevupadhyay.com/"
    },
    {
        id: 2,
        title: "Policy-as-Code for Smart Contracts",
        category: "Cyber Security",
        image: "/about_2.jpg",
        description: "An automated security analysis pipeline for smart contracts.",
        problem: "Deploying secure smart contracts required manual auditing steps.",
        solution: "Implemented Python-based CI/CD for smart contracts using Slither, Mythril, Brownie, and Hardhat to automatically enforce security policies.",
        tools: ["Python", "Slither", "Mythril", "CI/CD", "Solidity"],
        github: "https://github.com/rockstarrajeev",
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
        name: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
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
        name: "The Joy of Computing Using Python",
        issuer: "IIT Madras",
        date: "2023"
    },
    {
        id: 4,
        name: "Online Privacy",
        issuer: "IIIT Hyderabad",
        date: "2022"
    },
    {
        id: 5,
        name: "Ethical Hacking",
        issuer: "IIT Kharagpur",
        date: "2022"
    },
    {
        id: 6,
        name: "ITIL Certified Professional",
        issuer: "AXELOS",
        date: "2018"
    }
];
