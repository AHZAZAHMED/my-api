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
  education: "BCE at Bahria University Karachi Campus",
  projects: [
    {
      name: "Nike UI Website",
      description: "A responsive and modern Nike product landing page with Tailwind CSS and animations.",
      github: "",
      vercel: ""
    },
    {
      name: "Countdown Timer",
      description: "A customizable countdown timer built with JavaScript and styled using Tailwind.",
      github: "",
      vercel: ""
    },
    {
      name: "Portfolio Website",
      description: "A personal portfolio built with Next.js showcasing my projects, resume, and contact info.",
      github: "",
      vercel: ""
    }
  ],
  contact: {
    email: "ahzaz@example.com",
    linkedin: "https://linkedin.com/in/ahzazahmed",
    github: "",
    vercel: ""
  }
};

app.get("/api/me", (req, res) => {
  res.json(myInfo);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
