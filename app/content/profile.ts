export type ProjectCategory = "Product" | "DevOps" | "AI & Bots" | "Automation";

export type Project = {
  name: string;
  eyebrow: string;
  description: string;
  detail: string;
  repo: string;
  live?: string;
  category: ProjectCategory;
  tech: string[];
  year: string;
  accent: "mint" | "blue" | "violet" | "orange" | "rose";
  visual: "finance" | "cards" | "pipeline" | "monitoring" | "bot" | "ocr" | "code";
  featured?: boolean;
};

export const profile = {
  name: "Yannawut Roumsuk",
  shortName: "Yannawut",
  role: "DevOps Engineer & Product Builder",
  headline: "I turn complex systems into products that feel simple.",
  intro:
    "Computer Engineering graduate from Naresuan University, building at the intersection of reliable infrastructure, useful automation, and thoughtful product design.",
  location: "Bangkok, Thailand",
  timezone: "GMT+7",
  github: "https://github.com/YannawutRoumsuk",
  phone: "+66 62 863 1903",
};

export const featuredStats = [
  { value: 14, suffix: "", label: "public repositories" },
  { value: 7, suffix: "", label: "games in one party deck" },
  { value: 4, suffix: "", label: "product disciplines" },
  { value: 100, suffix: "%", label: "built to learn by shipping" },
];

export const projects: Project[] = [
  {
    name: "Nudget",
    eyebrow: "Personal finance, without the spreadsheet",
    description:
      "A LINE-first finance assistant that turns chat and slip photos into a private, useful money dashboard.",
    detail:
      "Combines budgeting, bills, savings goals, forecasts, OCR, privacy controls, and explainable financial health in one production product.",
    repo: "https://github.com/YannawutRoumsuk/Nudget-Project",
    live: "https://nudget-production.up.railway.app",
    category: "Product",
    tech: ["SvelteKit", "PostgreSQL", "LINE", "OCR", "Railway"],
    year: "2026",
    accent: "mint",
    visual: "finance",
    featured: true,
  },
  {
    name: "Party Deck",
    eyebrow: "The whole party, in everyone’s pocket",
    description:
      "Seven social games in one no-login web app, with real-time rooms, QR joining, and reconnect-safe sessions.",
    detail:
      "From Forbidden Word and Spyfall to Werewolf and 24 Game—built for 2–16 players on their own phones.",
    repo: "https://github.com/YannawutRoumsuk/party-deck",
    category: "Product",
    tech: ["Node.js", "Express", "Socket.IO", "WebSockets"],
    year: "2026",
    accent: "violet",
    visual: "cards",
    featured: true,
  },
  {
    name: "Infrastructure as Code + KiND",
    eyebrow: "From commit to cluster",
    description:
      "A complete CI/CD reference that builds, tests, containers, and deploys a Node service onto Kubernetes.",
    detail:
      "Terraform owns the infrastructure, GitHub Actions owns delivery, and health endpoints prove each release is ready.",
    repo: "https://github.com/YannawutRoumsuk/Infracode-and-Kind",
    category: "DevOps",
    tech: ["Terraform", "Kubernetes", "KiND", "Docker", "GitHub Actions"],
    year: "2025",
    accent: "blue",
    visual: "pipeline",
    featured: true,
  },
  {
    name: "Zephyr Execution Uploader",
    eyebrow: "Jira test evidence, automated",
    description:
      "A Python utility that discovers Jira keys in filenames and uploads evidence to the correct Zephyr execution.",
    detail: "Map-first resolution, API fallback, JWT authentication, and an auditable result summary.",
    repo: "https://github.com/YannawutRoumsuk/Automate-upload-file-on-jira",
    category: "Automation",
    tech: ["Python", "Jira", "Zephyr", "JWT", "CSV"],
    year: "2026",
    accent: "blue",
    visual: "code",
  },
  {
    name: "Text Highlight API",
    eyebrow: "Compact Flask API exercise",
    description: "A focused interview exercise that highlights a supplied word list inside conversational text.",
    detail: "Small API surface, JSON in and highlighted HTML out.",
    repo: "https://github.com/YannawutRoumsuk/Test-interview-zanroo",
    category: "Automation",
    tech: ["Python", "Flask", "REST API"],
    year: "2025",
    accent: "orange",
    visual: "code",
  },
  {
    name: "Portfolio — Next.js",
    eyebrow: "You are looking at it",
    description: "A motion-rich portfolio that turns the full GitHub archive into one focused product story.",
    detail: "Designed with reusable 21st.dev-inspired interactions and an accessible motion system.",
    repo: "https://github.com/YannawutRoumsuk/Website-with-Next.js",
    category: "Product",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind"],
    year: "2026",
    accent: "mint",
    visual: "code",
  },
  {
    name: "Translate Bot",
    eyebrow: "A small language experiment",
    description: "An early translation-bot repository preserved as part of the public learning archive.",
    detail: "A concise experiment in conversational utility design.",
    repo: "https://github.com/YannawutRoumsuk/Translate-bot",
    category: "AI & Bots",
    tech: ["Chatbot", "Translation", "Experiment"],
    year: "2025",
    accent: "rose",
    visual: "bot",
  },
  {
    name: "Simple Note App",
    eyebrow: "Small app, production-shaped stack",
    description: "A Streamlit notes app with PostgreSQL persistence and deployment manifests for Kubernetes.",
    detail: "Docker Compose keeps local setup reproducible; Minikube manifests take the same app to a cluster.",
    repo: "https://github.com/YannawutRoumsuk/simple-note-app",
    category: "DevOps",
    tech: ["Streamlit", "PostgreSQL", "Docker", "Kubernetes"],
    year: "2025",
    accent: "mint",
    visual: "code",
  },
  {
    name: "LINE Dictionary",
    eyebrow: "Definitions where conversations happen",
    description: "A dictionary assistant for LINE, served by FastAPI and prepared for AWS Lambda deployment.",
    detail: "Webhook handling, external dictionary lookup, API Gateway, and serverless packaging in one project.",
    repo: "https://github.com/YannawutRoumsuk/Linebot-dictionary",
    category: "AI & Bots",
    tech: ["FastAPI", "LINE", "AWS Lambda", "API Gateway"],
    year: "2025",
    accent: "mint",
    visual: "bot",
  },
  {
    name: "Prometheus + Grafana Lab",
    eyebrow: "A system you can actually see",
    description: "A containerized observability stack for a Flask API and MySQL, with metrics from app to database.",
    detail: "Prometheus, exporters, Grafana, phpMyAdmin, and the workload run together through Docker Compose.",
    repo: "https://github.com/YannawutRoumsuk/Prometheus-and-Grfana",
    category: "DevOps",
    tech: ["Prometheus", "Grafana", "Flask", "MySQL", "Docker"],
    year: "2025",
    accent: "orange",
    visual: "monitoring",
  },
  {
    name: "Desktop App Demo",
    eyebrow: "Go on the inside, React on the surface",
    description: "A cross-platform desktop application experiment built from the Wails React template.",
    detail: "A native packaging path with a web-development feedback loop.",
    repo: "https://github.com/YannawutRoumsuk/Demo-desktop-app",
    category: "Product",
    tech: ["Wails", "Go", "React", "NSIS"],
    year: "2025",
    accent: "blue",
    visual: "code",
  },
  {
    name: "OCR for OPD Cards",
    eyebrow: "Documents into structured data",
    description: "Thai and English OCR experiments for OPD cards and blood-test values, with bounding-box extraction.",
    detail: "EasyOCR and OpenCV turn uploaded images into structured JSON, CSV, or Excel-ready results.",
    repo: "https://github.com/YannawutRoumsuk/OCR_OPD",
    category: "AI & Bots",
    tech: ["EasyOCR", "OpenCV", "Python", "Pandas"],
    year: "2024",
    accent: "rose",
    visual: "ocr",
  },
  {
    name: "Recommendation Chatbot",
    eyebrow: "A stateful guide inside LINE",
    description: "A conversational bot that recommends music, movies, and travel through nested choices.",
    detail: "Maintains each user’s state while navigating category, country, genre, and season.",
    repo: "https://github.com/YannawutRoumsuk/miniproject_chatbot",
    live: "https://miniproject-chatbot.vercel.app",
    category: "AI & Bots",
    tech: ["Python", "LINE", "Conversation State", "Vercel"],
    year: "2024",
    accent: "violet",
    visual: "bot",
  },
  {
    name: "NU Cancer Chatbot",
    eyebrow: "Realtime symptom guidance",
    description: "A LINE chatbot that connects Dialogflow intents to symptom assessment and recommendations.",
    detail: "A Flask service records the interaction flow while LINE handles the realtime interface.",
    repo: "https://github.com/YannawutRoumsuk/Chatbot_nucancer",
    category: "AI & Bots",
    tech: ["Dialogflow", "LINE", "Flask", "Python"],
    year: "2024",
    accent: "rose",
    visual: "bot",
  },
];

export const disciplines = [
  {
    number: "01",
    title: "Build the useful thing",
    copy: "Start with the real job someone needs done, then make the shortest path feel obvious.",
  },
  {
    number: "02",
    title: "Automate the repeatable",
    copy: "Turn fragile manual work into a visible pipeline with clear inputs, outputs, and failure states.",
  },
  {
    number: "03",
    title: "Observe the whole system",
    copy: "Health checks, metrics, logs, and honest UI states make software calmer to operate.",
  },
];
