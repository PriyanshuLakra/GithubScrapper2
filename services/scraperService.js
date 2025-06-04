// const axios = require('axios');
// const cheerio = require('cheerio');

// async function scrapeGitHubUsers(keyword, pages = 2) {
//     const users = [];
    
//     for (let page = 1; page <= pages; page++) {
        
//         const url = `https://github.com/search?q=${keyword}&type=users&p=${page}`;
//         const { data } = await axios.get(url);
//         const $ = cheerio.load(data);
//         console.log($)
        

//         $('.user-list-item').each((_, el) => {
//             const username = $(el).find('a.mr-1').text().trim();
//             const displayName = $(el).find('a.mr-1').attr('href')?.split('/')[1] || '';
//             const bio = $(el).find('.user-list-info p').text().trim();
//             const location = $(el).find('.mr-3 .f6').text().trim();
//             const profileURL = `https://github.com/${username}`;

//             users.push({ username, displayName, bio, location, profileURL });
//         });
       
//     }
//     console.log(users)

//     return users;
// }

// module.exports = { scrapeGitHubUsers };

// scraper/githubScraper.js
// const puppeteer = require('puppeteer');

// async function scrapeGitHubUsers(keyword, pages = 1) {
//     const users = [];
//     const browser = await puppeteer.launch({headless:false});
    
//     const page = await browser.newPage();
        
//     for (let p = 1; p <= pages; p++) {
//         const url = `https://github.com/search?q=${keyword}&type=users&p=${p}`;
//         await page.goto(url, { waitUntil: 'networkidle2' });
//         await page.waitForSelector('.user-list-item', { timeout: 10000 });
//         //  await page.waitForSelector('div.Box-sc-g0xbh4-0.l0Rxit', { timeout: 15000 });
//         await page.screenshot({ path: `page-${p}.png`, fullPage: true });
//         // const pageUsers = await page.evaluate(() => {

            
//         //     // const userNodes = document.querySelectorAll('.user-list-item');
//         //         const userNodes = document.querySelectorAll('div.Box-sc-g0xbh4-0.JcuiZ > div > div');
            
//         //     console.log(userNodes)
//         //     const result = [];

//         //     userNodes.forEach(el => {
//         //         const usernameEl = el.querySelector('a.mr-1');
//         //         const username = usernameEl?.textContent.trim() || '';
//         //         const displayName = usernameEl?.getAttribute('href')?.split('/')[1] || '';
//         //         const bio = el.querySelector('.user-list-info p')?.textContent.trim() || '';
//         //         const location = el.querySelector('.user-list-meta .mr-3')?.textContent.trim() || '';
//         //         const profileURL = username ? `https://github.com/${username}` : '';

//         //         result.push({ username, displayName, bio, location, profileURL });
//         //     });
            
//         //     return result;
//         // });
//         const pageUsers = await page.evaluate(() => {
//     const result = [];
//     const userCards = document.querySelectorAll('.user-list-item');
//     // const userCards = document.querySelectorAll('div.Box-sc-g0xbh4-0.l0Rxit');

//     userCards.forEach(el => {
//         const usernameEl = el.querySelector('a[data-hydro-click]');
//         const username = usernameEl?.textContent?.trim() || '';
//         const displayName = usernameEl?.getAttribute('href')?.split('/')[1] || '';
//         const bio = el.querySelector('p.mb-1')?.textContent?.trim() || '';
//         const location = el.querySelector('li[itemprop="homeLocation"]')?.textContent?.trim() || '';
//         const profileURL = username ? `https://github.com/${displayName}` : '';

//         result.push({ username, displayName, bio, location, profileURL });
//     });

//     return result;
// });
//         console.log("Scraped users on page:", pageUsers);
//         users.push(...pageUsers);
//     }
//     console.log(users)
//     await browser.close();
//     return users;
// }

// module.exports = { scrapeGitHubUsers }; // ✅ Correct named export


const puppeteer = require('puppeteer');

async function scrapeGitHubUsers(keyword, pages = 1) {
    const users = [];
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    for (let p = 1; p <= pages; p++) {
        const url = `https://github.com/search?q=${keyword}&type=users&p=${p}`;
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Wait for the new GitHub user list container to load
        await page.waitForSelector('[data-testid="results-list"] > div', { timeout: 15000 });

        const pageUsers = await page.evaluate(() => {
            const result = [];
            const userCards = document.querySelectorAll('[data-testid="results-list"] > div');

            userCards.forEach(el => {
                const profileAnchor = el.querySelector('a[href^="/"][class*="prc-Link-Link"]');
                const usernameSpan = el.querySelector('span.gbmbF');
                const avatarImg = el.querySelector('img[data-testid="github-avatar"]');
                const tagline = el.querySelector('.search-match');

                if (profileAnchor && usernameSpan && avatarImg) {
                    result.push({
                        username: usernameSpan.innerText.trim(),
                        profileUrl: `https://github.com${profileAnchor.getAttribute('href')}`,
                        avatar: avatarImg.getAttribute('src'),
                        tagline: tagline ? tagline.innerText.trim() : ''
                    });
                }
            });

            return result;
        });

        // console.log(`✅ Page ${p} users:`, pageUsers);
        users.push(...pageUsers);
    }

    await browser.close();
    console.log(users)
    return users;
}

module.exports = { scrapeGitHubUsers };
