const Learnosity = require('learnosity-sdk-nodejs');
const FormData = require('form-data');
const fetch = require('node-fetch');
const env = require('./learnosity')

//access and load assesment/activity
exports.assesment = (request, response) =>{
	const result = sdkInitiolization({
		user_id: request.query.userId,
		session_id: request.query.sessionId,
		activity_id: request.query.assessmentId
	});

	return response.status(200).json(result);
}

//initialize Assesment with items
exports.assesInitialise = (req,res) => {
	const learnositySdk = new Learnosity();
	const assesment = learnositySdk.init(
		'items',  //which api to access
		{
			domain: env.domain,
			consumer_key: env.consumerKey  //consumer details
		},
		env.consumerSecret, //security
		{
			user_id: req.query.userId,
			session_id:req.query.sessionId,
			activity_id: req.query.activityId,  
			rendering_type: 'assess',
			type: 'submit_practice',
			name: 'Items API Quickstart',
			state: 'initial',
			items: req.body
		},
	);
	return res.status(200).json(assesment);
}

// retrieve activity/assesment list
 exports.learnosityData = async (req,res) => {
	const learnositySdk = new Learnosity();
	const requestData = learnositySdk.init(
		'data',  //which api to access
		{
			domain: env.domain,
			user_id: req.query.userId,
			consumer_key: env.consumerKey  //consumer details
		},
		env.consumerSecret, //security
		{references:[]},
		'get'   // api method
	);
	const form = new FormData();
	form.append("security", requestData.security);
	form.append("request", requestData.request);
	form.append("action", requestData.action);

	const result = await activitiesAPICall(form)
 return res.status(200).send(result); 
}


//call learnosity api to get activity list
async function activitiesAPICall(requestParams) {
	const endpoint = 'https://data.learnosity.com/v2022.1.LTS/itembank/activities';
	const dataAPIResponse =  await fetch(endpoint, {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		body: requestParams 
	})
	return dataAPIResponse.json(); 
}

//initialize Assesment 
function sdkInitiolization (requestPayload) {
	const learnositySdk = new Learnosity();
	return learnositySdk.init(
		'items',  //which api to access
		{
			domain: env.domain,
			consumer_key: env.consumerKey  //consumer details
		},
		env.consumerSecret, //security
		{
			user_id: requestPayload.user_id,
			session_id:requestPayload.session_id,
			activity_id: requestPayload.activity_id,  
			rendering_type: 'assess',
			type: 'submit_practice',
			name: 'Items API Quickstart',
			state: 'initial',
			items: ['33b96e04-1006-4b19-b8dc-3fde9b4b8e88']
		},
	);
}