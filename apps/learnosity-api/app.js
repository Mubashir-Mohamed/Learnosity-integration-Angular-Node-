
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const appController = require('./controller.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//to get all items by activity - endpoint
app.get('/api/learnosity/itemsByActivityId', (req, response) => {
	return appController.itemsByActivityId(req, response);
});

//to get activity/assessment list - endpoint
app.get('/api/learnosity/data', (req, response) => {
	return appController.learnosityData(req, response);
});

//to load an assessment/activity - endpoint
app.get('/api/learnosity', (req, response) => {
	return appController.assesment(req, response);
});

//to load an assessment/activity by items in req - endpoint
app.post('/api/learnosity/assesmentByItemsId', (req, response) => {
	return appController.assesInitialise(req, response);
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});
