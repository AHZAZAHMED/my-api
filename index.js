const express = require("express");
const app = express();

const myInfo = {
  name: "Ahzaz Ahmed",
  title: "Web Developer",
  location: "Karachi, Pakistan",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Python",
    "OpenAI Agent SDK"
  ],
  education: "Currently pursuing Bachlor's in Computer Engineering from Bahria University.",
  projects: [
    {
      name: "Nike UI Website",
      description: "A responsive and modern Nike product landing page with Tailwind CSS and animations.",
      github: "https://github.com/AHZAZAHMED/nikeui",
      vercel: "https://nikeui-orcin.vercel.app/"
    },
    {
      name: "Countdown Timer",
      description: "A customizable countdown timer built with JavaScript and styled using Tailwind.",
      github: "https://github.com/AHZAZAHMED/Frontend-Projects/tree/main/countdown-timer",
      vercel: "https://frontend-projects-uh4q.vercel.app/"
    },
    {
      name: "Portfolio Website",
      description: "A personal portfolio built with Next.js showcasing my projects, resume, and contact info.",
    }
  ],
  contact: {
    email: "ahzaz@example.com",
    linkedin: "https://linkedin.com/in/ahzazahmed",
    github: "https://github.com/AHZAZAHMED",
  }
};

app.get("/api/me", (req, res) => {
  res.json(myInfo);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
