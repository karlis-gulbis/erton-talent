export const DEFAULT_LOCALE = "en" as const;
export const LOCALES = ["en", "da", "no", "fi", "sv"] as const;
export type Locale = typeof LOCALES[number];

const en = {
  "site.title": "Erton Talent",

  "hero.title": "Top-Tier IT Talent from Latvia",
  "hero.subtitle": "Ready to Power Your Projects in Sweden",
  "hero.description": "We connect Swedish companies with skilled and reliable IT specialists from Latvia — fast, flexible, and without the hassle of traditional hiring.",
  "hero.cta": "Contact us",

  "contact.heading": "Contact Us",
  "contact.phoneLabel": "Phone:",
  "contact.emailLabel": "E-Mail:",

  "form.namePlaceholder": "Name",
  "form.lastNamePlaceholder": "Last Name",
  "form.emailPlaceholder": "E-Mail",
  "form.messagePlaceholder": "Message",
  "form.send": "Send",
  "form.sending": "Sending...",
  "form.success": "Message sent successfully",
  "form.error": "Failed to send message",

  "ceo.heading": "Meet our CEO",
  "ceo.videoPlaceholder": "VIDEO",
  "ceo.book": "Book a Free Consultation",
  "ceo.orDirect": "Or contact us directly:",
  "ceo.cta": "Contact us",

  "team.heading": "Meet Our Team",
  "team.subtitle": "We’re here to help — experienced, responsive, and ready to support your goals.",
  "team.roleCEO": "CEO",

  "leaders.heading": "Need Leaders in IT?",
  "leaders.pmTitle": "Swedish-speaking Project Managers",
  "leaders.pmDesc": "For smooth communication and efficient project delivery.",
  "leaders.kamTitle": "Key Account Managers",
  "leaders.kamDesc": "To help manage and grow your most important client relationships.",
  "leaders.seniorTitle": "Senior Manager",
  "leaders.seniorDesc": "With over 10 years of experience leading teams in Germany and the UK.",

  "levels.heading": "Developers at All Levels",
  "levels.subtitle": "We provide English-speaking IT specialists across various roles and seniority levels",
  "levels.seniority": "Seniority levels",
  "levels.junior": "Junior",
  "levels.mid": "Mid-level",
  "levels.expert": "Expert",
  "levels.roles": "Roles",
  "levels.frontend": "Frontend",
  "levels.backend": "Backend",
  "levels.fullstack": "Fullstack",
  "levels.qa": "QA",
  "levels.devops": "DevOps",
  "levels.cloud": "Cloud",
  "levels.support": "Support",
  "levels.sysadmin": "System Admin",
  "levels.ready": "Ready to contribute from day one",

  "how.heading": "How it works",
  "how.subtitle": "IT Hiring, Simplified",
  "how.step1.title": "Tell us what you need",
  "how.step1.desc": "We begin with your tech stack, timeline, and budget.",
  "how.step2.title": "We handpick candidates",
  "how.step2.desc": "Skilled Latvian IT specialists — vetted, available, and ready to join your team.",
  "how.step3.title": "You choose",
  "how.step3.desc": "Interview and select the best fit for your project or organization.",
  "how.step4.title": "We handle the rest",
  "how.step4.desc": "We take care of contracts, administration, and relocation if needed — making the process smooth and stress-free.",

  "success.heading": "Client Success Story",
  "success.bolt.name": "Ronald Abol (Bolt)",
  "success.bolt.quote": "“Erton Services helped us quickly and efficiently find a skilled IT consultant. A very good experience.”",
  "success.postnord.name": "Daniel Ekdahl (PostNord)",
  "success.postnord.quote": "“The process was smooth and fast. We found the right person with Erton’s help.”",
  "success.skanska.name": "Daniel Lyckvik (Skanska)",
  "success.skanska.quote": "“Erton delivered strong IT candidates on short notice – professional and responsive.”",
  "success.incon.name": "Andreas Hammerin (Incon AB)",
  "success.incon.quote": "“Thanks to Erton Services, we found an IT expert who exceeded our expectations.”",

  "why.heading": "Why Latvian Developers? Why Us?",
  "why.subtitle": "Scandinavian Standards. Baltic Efficiency.",
  "why.card1.title": "Skilled & Experienced",
  "why.card1.desc": "All candidates are mid to senior level, ready to contribute from day one.",
  "why.card2.title": "Flexible Contracts",
  "why.card2.desc": "Full-time, part-time, short-term, or long-term.",
  "why.card3.title": "No Admin Hassle",
  "why.card3.desc": "We handle logistics: payroll, taxes, and onboarding.",
  "why.card4.title": "Cultural Fit",
  "why.card4.desc": "Northern European mindset, strong work ethic, fluent in English.",

  "from.heading": "From Construction to Code",
  "from.subtitle": "A Trusted Partner with 10 Years of Experience",
  "from.p1": "For over a decade, we've built trust in the Scandinavian construction industry by delivering reliable teams and smooth project execution.",
  "from.p2": "Now, we bring that same dedication and quality to the tech world — by connecting you with top-tier IT talent from Latvia, in Northern Europe.",
  "from.p3": "Whether you need a single developer or an entire team, we make hiring fast, easy, and risk-free."
} as const;

export const ui: Record<Locale, Record<string, string>> = {
  en,
  da: en,
  no: en,
  fi: en,
  sv: en
};

export const languages: Record<Locale, string> = {
  en: "English",
  da: "Danish",
  no: "Norwegian",
  fi: "Finnish",
  sv: "Swedish"
};


