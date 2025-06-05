# GithubProfileScraper

# GitHub AI Scraper

This backend service scrapes GitHub user profiles based on a search keyword, extracts user details, and uses OpenAI (ChatGPT) to summarize each user’s profile, including skills and tech stack.

---

## Tech Stack

- Node.js
- Express.js
- Axios – for HTTP requests
- puppeteer – for HTML scraping
- OpenAI API – for AI-powered summarization
- dotenv – for environment variables
- nodemon – for live development reload

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/PriyanshuLakra/GithubScrapper2
cd GithubScrapper2

```
### 2. install Dependencies

```bash
npm install

```
### 3. Configure Environment Variables

```bash
OPENAI_API_KEY=your_openai_api_key
PORT=5050

```
### 4. Start the Server

```bash
npm run dev


Server runs at:
http://localhost:5050

```
API Endpoint

```
GET /api/github/scrape
Trigger GitHub scraping and AI summarization.

Optional Query Param:
keyword: Search term to scrape developers (default = javascript developer)

```
API 
```bash
curl http://localhost:5050/api/github/scrape?keyword=react+developer


`````

---

## file structure 

``` bash

githubScraper/
├── controllers/
│   └── githubController.js
├── services/
│   ├── scraperService.js
│   └── aiService.js
├── routes/
│   └── githubRoutes.js
├── data/
│   └── users.json
├── .env
├── app.js
├── README.md
└── package.json

```
---
---

## Result

The data will get stored in json format in users.json file 

```bash
 [
  {
    "username": "JavascriptMick",
    "profileUrl": "https://github.com/JavascriptMick",
    "avatar": "https://avatars.githubusercontent.com/u/905728?s=80&v=4",
    "tagline": "Michael Dausmann Full stack developer. Agile, Data science and Machine Learning. Love learning, speaking and dad jokes.",
    "aiSummary": "Michael Dausmann is a versatile full-stack developer with a strong interest in Agile practices, data science, and machine learning. His passion for learning and communication reflects a growth mindset and strong collaboration skills."
  },
  {
    "username": "kofiohemeng",
    "profileUrl": "https://github.com/kofiohemeng",
    "avatar": "https://avatars.githubusercontent.com/u/18366272?s=80&v=4",
    "tagline": "* MongoDB * ExpressJS * React.JS * AngularJS * NextJS * Redux * GraphQL * PostgreSQL * Apollo * Material Design",
    "aiSummary": "Kofio Hemeng is a full-stack developer experienced with the MERN stack, Angular, GraphQL, and modern frontend design systems. His skill set indicates a strong understanding of both UI development and backend technologies."
  },
  {
    "username": "jcarlosj",
    "profileUrl": "https://github.com/jcarlosj",
    "avatar": "https://avatars.githubusercontent.com/u/12736518?s=80&v=4",
    "tagline": "Software Developer | JavaScript: React, Node; PHP: WordPress | SENA | UdeA - MisionTIC 2022 | Alura + ONE",
    "aiSummary": "Carlos is a multi-skilled software developer with experience in JavaScript (React, Node) and PHP (WordPress). His participation in educational programs like SENA and MisionTIC reflects a solid foundation and eagerness to grow."
  },
  {
    "username": "AbidJohar",
    "profileUrl": "https://github.com/AbidJohar",
    "avatar": "https://avatars.githubusercontent.com/u/135122651?s=80&v=4",
    "tagline": "I'm Abid Hussain, a BS IT student passionate about web development, working with React and Tailwind CSS. I enjoy building responsive apps and websites.",
    "aiSummary": "Abid Hussain is an aspiring frontend developer specializing in React and Tailwind CSS. As an IT student, he demonstrates a keen interest in crafting responsive and visually appealing web applications."
  },
  {
    "username": "developerslearnit",
    "profileUrl": "https://github.com/developerslearnit",
    "avatar": "https://avatars.githubusercontent.com/u/19668944?s=80&v=4",
    "tagline": "Experienced Full Stack .NET Developer with over 11 years of experience. Skilled in ASP.Net, ASP.Net Core, C#, Typescript, JavaScript (React/NextJS), and NodeJS",
    "aiSummary": "With over 11 years of experience, this developer is a seasoned full-stack .NET expert skilled in modern JavaScript frameworks and Microsoft technologies, making them a well-rounded enterprise-level engineer."
  },
  {
    "username": "lucascorreaa",
    "profileUrl": "https://github.com/lucascorreaa",
    "avatar": "https://avatars.githubusercontent.com/u/91700610?s=80&v=4",
    "tagline": "Software Engineer | Professor | React | React Native | Node/Nest | Type/Javascript | Git | Scrum/Kanban",
    "aiSummary": "Lucas is a software engineer and educator with experience in React, React Native, and backend frameworks like NestJS. His knowledge of agile methodologies such as Scrum and Kanban shows a strong grasp of team collaboration."
  }
]











