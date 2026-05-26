const express = require("express");
const app = express();

const myInfo = {
  name: "Ahzaz Ahmed",

  title: "AI-Focused Full-Stack Developer",

  about:
    "Final-year Computer Engineering student and AI-focused Full-Stack Developer with hands-on experience building AI-powered and agent-based applications using Next.js, FastAPI, Python, and OpenAI Agent SDK. Expected to graduate on June 17, 2026.",

  location: "Karachi, Pakistan",

  education: {
    degree: "Bachelor's in Computer Engineering",

    university: "Bahria University Karachi Campus",

    semester: "8th Semester",

    gpa: "3.49",

    status: "Expected Graduation: June 17, 2026",

    relevantCourses: [
      "Object Oriented Programming",
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Software Engineering",
      "Computer Architecture and Organization",
    ],
  },

  courses: [
    {
      name: "Governor Initiative for AI, Web 3.0 & Metaverse (GIAIC)",

      focus: [
        "Agentic AI",
        "TypeScript",
        "Next.js",
        "Python",
        "AI Development",
        "OpenAI SDK",
      ],
    },
  ],

  skills: {
    languages: [
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
    ],

    frontend: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],

    backend: [
      "Node.js",
      "Express.js",
      "FastAPI",
    ],

    aiTechnologies: [
      "OpenAI Agent SDK",
      "MCP SDK",
      "Gemini API",
      "Chainlit",
      "Ollama",
      "Agentic AI",
    ],

    databases: [
      "PostgreSQL",
      "Neon PostgreSQL",
      "SQLModel",
      "Prisma ORM",
    ],

    tools: [
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "Playwright",
      "PM2",
    ],

    softSkills: [
      "Problem Solving",
      "Team Collaboration",
      "Leadership",
      "Time Management",
      "Logic Building",
    ],
  },

  projects: [
    {
      name: "Autonomous AI Workflow Agent",

      status: "In Progress",

      description:
        "An AI workflow automation system integrating platforms like WhatsApp, LinkedIn, and Odoo using Model Context Protocol (MCP).",

      techStack: [
        "Node.js",
        "Python",
        "MCP",
        "Playwright",
        "Odoo",
        "PM2",
        "Ollama",
      ],
    },

    {
      name: "AI-Powered Todo Management Application",

      description:
        "A full-stack AI-native Todo application with secure authentication and OpenAI-powered agent orchestration.",

      github:
        "https://github.com/AHZAZAHMED/Hackathon-2-Todo-app-",

      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "FastAPI",
        "PostgreSQL",
        "OpenAI ChatKit",
      ],
    },

    {
      name: "AI Chatbot – Conversational Assistant",

      description:
        "A ChatGPT-like chatbot built using Python, Chainlit, and Gemini API with streaming responses and persistent conversation history.",

      github:
        "https://github.com/AHZAZAHMED/Quarter-3-Agentic-AI-/tree/main/agent-stream-runner",

      techStack: [
        "Python",
        "Chainlit",
        "Gemini API",
        "OpenAI Agent SDK",
        "uv",
      ],
    },

    {
      name: "NikeUI – Dynamic E-Commerce Web App",

      description:
        "A responsive e-commerce frontend with product display, authentication, CMS integration, and modern UI/UX.",

      github: "https://github.com/AHZAZAHMED/nikeui",

      live: "https://nikeui-orcin.vercel.app/",

      techStack: [
        "Next.js",
        "Tailwind CSS",
        "Sanity",
        "Clerk",
      ],
    },
  ],

  contact: {
    phone: "+92-316-3265423",

    email: "ahzazahmed159@gmail.com",

    linkedin:
      "https://www.linkedin.com/in/ahzaz-ahmed-a41606277/",

    github: "https://github.com/AHZAZAHMED",
  },
};

app.get("/api/me", (req, res) => {
  res.json(myInfo);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
