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

Result










