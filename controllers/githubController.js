const { scrapeGitHubUsers } = require('../services/scraperService');
const { analyzeUserProfile } = require('../services/aiService');
const fs = require('fs');
const path = require('path');


exports.scrapeAndAnalyze = async (req, res) => {

     console.log("✅ API hit hua");
    const { keyword = 'javascript developer' } = req.query;

    try {
        const users = await scrapeGitHubUsers(keyword);
        const enrichedUsers = [];
        
        for (const user of users) {
            const aiSummary = await analyzeUserProfile(user);
            enrichedUsers.push({ ...user, aiSummary });
        }

        const filePath = path.join(__dirname, '../data/users.json');
        fs.writeFileSync(filePath, JSON.stringify(enrichedUsers, null, 2));
        
        res.json({ success: true, data: enrichedUsers });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Something went wrong' });
    }
};
