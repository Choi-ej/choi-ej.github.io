// Résumé content for the site. Edit this file to update the page.

export type Entry = {
  title: string;
  organisation: string;
  location: string;
  period: string;
  context?: string;
  bullets: string[];
};

export type EducationItem = {
  institution: string;
  location: string;
  qualification: string;
  period: string;
  note?: string;
};

// NEXT_PUBLIC_SITE_URL is set in .github/workflows/deploy.yml (https://choi-ej.github.io).
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const profile = {
  name: "Jin Choi",
  headline: "Solutions Engineering · Technical Pre-Sales · AI/ML Engineering",
  location: "Sydney, NSW",
  email: "ejchoi0710@gmail.com",
  linkedin: "https://www.linkedin.com/in/choi-jin/",
  github: "https://github.com/Choi-ej",
  // Set to a file in /public (e.g. "/jin-choi-resume.pdf") to show a download link.
  resumeUrl: undefined as string | undefined,
  title: "Jin Choi - Solutions Engineering, Technical Pre-Sales, AI/ML Engineering",
  description:
    "Master of Computer Science (Cybersecurity) candidate at the University of Sydney with SaaS pre-sales, statistical research, and customer-facing experience.",
};

export const summary = [
  "Master of Computer Science (Cybersecurity) candidate at the University of Sydney, with a developing interest in AI and machine learning.",
  "Experience in SaaS pre-sales, statistical data research and Excel VBA automation, university tutoring and mentoring, and customer-facing roles.",
  "Studied in South Korea, China, Germany and Australia, and worked in South Korea and Australia.",
];

export const experience: Entry[] = [
  {
    title: "IT Solution Architect (Internship)",
    organisation: "Whispir",
    location: "Melbourne, VIC",
    period: "August 2023 - December 2023",
    context: "Australian SaaS platform for enterprise messaging and digital workflows.",
    bullets: [
      "Supported more than five SaaS pre-sales engagements with public-sector, transport and telecommunications customers, working with Sales, Product, Technology and Customer Success.",
      "Gathered the operational requirements of an emergency-services organisation that needed to fill open shifts several days ahead, and helped build a pre-sales demonstration workflow that found open shifts in a spreadsheet, messaged available staff, collected replies, assigned the shift and updated the spreadsheet.",
      "Prepared RFP responses and security questionnaires. Reviewed completed projects, identified recurring questions, rewrote customer-specific answers into general ones and added them to the team’s shared answer library.",
      "Presented in weekly product showcases for technical and non-technical audiences. Revised a prototype after a transport customer’s feedback on sharing rich-message content and supported the follow-up demonstration.",
      "Reproduced a duplicate click-tracking issue in promotional emails reported by Customer Success, identified the cause and resolved it without escalating to Engineering, then reported the outcome back to Customer Success.",
    ],
  },
  {
    title: "Statistics Researcher",
    organisation: "Metrix",
    location: "Seoul, South Korea",
    period: "July 2022 - August 2022",
    context: "Research company working on nationally approved statistics and government AI data projects.",
    bullets: [
      "Processed and quality-checked thousands of survey records using Python and SPSS for government-sponsored statistical research and public reporting.",
      "Built an Excel VBA tool with keyboard-driven labelling and consistent file handling to make repetitive posture-image labelling faster and more consistent on a Seoul CCTV AI project.",
    ],
  },
  {
    title: "Front of House Team Member",
    organisation: "ARIA Restaurant",
    location: "Sydney, NSW",
    period: "November 2025 - Present",
    bullets: [
      "Relay guest requests and timing between the floor, managers and kitchen in a Two-Hat fine-dining restaurant, confirming details during busy service.",
    ],
  },
];

// Most recent first.
export const teaching: Entry[] = [
  {
    title: "PG Connect Advisor",
    organisation: "University of Sydney",
    location: "Sydney, NSW",
    period: "February 2026 - Present",
    bullets: [
      "Mentor six postgraduate engineering students, answering individual enquiries on academic planning, university resources and settling into Sydney. Completed two mentor-training sessions and participated in four programme events.",
    ],
  },
  {
    title: "Math Education Mentor",
    organisation: "Seoul Metropolitan Government (Seoul Learn)",
    location: "Seoul, South Korea",
    period: "September 2021 - January 2022",
    bullets: ["Provided weekly mathematics mentoring and individual goal-setting support to a Year 8 student."],
  },
  {
    title: "Calculus II Tutor",
    organisation: "Dongguk University",
    location: "Seoul, South Korea",
    period: "September 2021 - December 2021",
    bullets: [
      "Ran weekly two-hour tutoring sessions for three first-year science and engineering students. All three achieved an A or higher.",
    ],
  },
  {
    title: "Statistics Education Volunteer Group Leader",
    organisation: "Statistics Korea, Statistics Research Institute",
    location: "South Korea",
    period: "May 2021 - December 2021",
    bullets: [
      "Led statistics and software education for 343 students across five schools, adapting the content to each group’s level.",
    ],
  },
];

// Most recent first, by end date.
export const education: EducationItem[] = [
  {
    institution: "University of Sydney",
    location: "Sydney, NSW",
    qualification: "Master of Computer Science, Cybersecurity Specialisation",
    period: "February 2025 - November 2026 (expected)",
  },
  {
    institution: "Dongguk University",
    location: "Seoul, South Korea",
    qualification: "Bachelor of Science in Statistics, Second Major in Data Science Software",
    period: "March 2021 - February 2024",
    note: "GPA 4.03/4.5, ranked 8th of 35. Full academic scholarship after achieving the highest academic standing in the cohort for one semester.",
  },
  {
    institution: "Cologne University of Applied Sciences",
    location: "Cologne, Germany",
    qualification: "Exchange Student, Data Information Science",
    period: "August 2022 - March 2023",
  },
  {
    institution: "Hanyang Women’s University",
    location: "Seoul, South Korea",
    qualification: "Associate Degree, Computer Science & Information Systems",
    period: "March 2018 - February 2021",
  },
  {
    institution: "Sichuan Normal University",
    location: "Chengdu, China",
    qualification: "Language Exchange Program",
    period: "July 2018 - August 2018",
  },
];

// Most recent first.
export const achievements: { title: string; organisation?: string; period: string; body: string }[] = [
  {
    title: "Hack the Harbour Cybersecurity CTF",
    period: "July 2026",
    body: "Worked on cryptography, reverse engineering and web security challenges in a four-person team, including testing a GenAI-powered website for prompt-injection weaknesses and refining inputs based on the model’s responses until the team recovered the flag. The team placed 3rd of 63.",
  },
  {
    title: "Certificate of Excellence, INFO5990 Professional Practice in IT",
    organisation: "University of Sydney",
    period: "June 2026",
    body: "Nominated as one of the unit’s Best Projects for GlowMatch, a five-member team case study proposing a unified Customer Data Platform for a beauty-tech e-commerce business whose AR virtual try-on, AI chatbot and transaction data were fragmented. Evaluated IT governance structures, justified the proposed solution, and developed the six-month Agile-DevOps implementation roadmap, estimated AUD 660,000 budget and cross-functional resource plan. Also consolidated the team’s work into the final report as editing and formatting coordinator.",
  },
];

export const skills = [
  { label: "Data and analysis", value: "Python, SQL, R, SPSS, Excel VBA" },
  { label: "Web and cloud", value: "JavaScript (jQuery), REST APIs, AWS" },
  { label: "Security", value: "Cryptography, reverse engineering, web security" },
  { label: "Languages", value: "Korean (native), English (professional proficiency)" },
  {
    label: "Certifications",
    value:
      "Engineer Information Processing (2023); Advanced Data Analytics Semi-Professional, ADsP (2022); SQL Developer, SQLD (2021); Computer Specialist in Spreadsheet & Database Level 1 (2021)",
  },
];
