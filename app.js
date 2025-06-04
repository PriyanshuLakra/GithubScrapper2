const express = require('express');
const dotenv = require('dotenv');
const githubRoutes = require('./routes/githubRoutes');
const cors = require('cors');


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/github', githubRoutes);

const PORT = process.env.PORT || 5050;


app.get('/', (req, res) => {
  res.send('Hello world!');
});

try {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
} catch (err) {
  console.error("❌ Server error:", err);
}
