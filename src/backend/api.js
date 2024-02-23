import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;

const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=55.991893%2C37.214390';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '86da46860bmsh0b86b30185f6acbp19faabjsn1ee73a058bc4',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

app.get('/api/weather-info', async (req, res) => {
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		res.send(result);
	} catch (error) {
		console.error(error);
		res.status(500).send('ERRRRRRRRRROR');
	}
});

app.listen(PORT, () => {
	console.log(`Start on port: ${PORT}`);
});
