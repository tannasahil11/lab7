const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");

const path = require('path');
const fs = require('fs');

dotenv.config();
const app = express();
app.use(cors());

const router = express.Router();
const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=44.648766&lon=-63.575237&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

router.get('/', (req, res) => {
        res.json({
        message: "Hello World!"
    });
});
router.get("/projects", (req, res) => {
    try {
        
        const projectsPath = path.join(__dirname,  "data", "projects.json");
        const projectsData = fs.readFileSync(projectsPath, 'utf8');
        const projects = JSON.parse(projectsData);
        res.json(projects);
      } catch (error) {
        console.error("Error reading projects data:", error);
        res.status(500).json({
          error: "Failed to retrieve projects data",
          message: error.message,
        });
      }
  })
  router.get('/weather', async (req, res) => {
    try {
      const https = require('https');
      
      https.get(weather_url, (response) => {
        let data = '';
        
        response.on('data', (chunk) => {
          data += chunk;
        });
        
        response.on('end', () => {
          try {
            const result = JSON.parse(data);
            const weatherData = {
                    city: result.name,
                    country: result.sys.country,
                    temperature: {
                      current: result.main.temp,
                      feels_like: result.main.feels_like,
                      min: result.main.temp_min,
                      max: result.main.temp_max,
                    },
                    wind: {
                      speed: result.wind.speed,
                      direction: result.wind.deg
                    },
                    humidity: result.main.humidity
                  };
            res.status(200).json(weatherData);
          } catch (error) {
            console.error("Error parsing weather data:", error);
            res.status(500).json({ error: "Failed to parse data" });
          }
        });
      }).on('error', (error) => {
        console.error("Error fetching weather data:", error);
        res.status(500).json({ error: "Failed to fetch data" });
      });
      
    } catch (error) {
      console.error("Server error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
