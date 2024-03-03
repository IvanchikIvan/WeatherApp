import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = 3000;

const weatherApiHost = 'weatherapi-com.p.rapidapi.com';
const weatherApiKey = '86da46860bmsh0b86b30185f6acbp19faabjsn1ee73a058bc4';

app.get('/api/weather-info', async (req, res) => {
    try {
        const { location } = req.query;
        if (!location) {
            throw new Error('Location parameter is missing');
        }
        
        const url = `https://${weatherApiHost}/current.json?q=${location}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': weatherApiKey,
                'X-RapidAPI-Host': weatherApiHost
            }
        };

        const response = await fetch(url, options);
        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
