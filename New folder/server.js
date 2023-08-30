// Express.js backend (server.js)
const express = require('express');
const cors = require('cors'); // Import the cors library
const app = express();
const API_KEY = process.env.WEATHER_API_KEY;

app.use(cors()); // Enable CORS for all routes

app.get('/api/current', async (req, res) => {
  try {
    const response = await axios.get('https://api.example.com/current', {
      params: {
        apiKey: API_KEY,
        // other query parameters
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Add more routes for different weather data endpoints

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
