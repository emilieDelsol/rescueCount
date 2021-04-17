// Import dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const rescueCount = require('./models/rescueCount');
const api = require('./routes/reportCountRoutes');

// Create a new express application named 'app'
const app = express();

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000;

// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
	console.log(`Request_Endpoint: ${req.method} ${req.url}`);
	next();
});

mongoose.connect('mongodb+srv://milhie:mongoRescueCount@rescuecount.denop.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
	{useNewUrlParser: true,
		useUnifiedTopology: true})
	.then(() => console.log('Connexion à MongoDb reussie'))
	.catch(() => console.log('Connexion à MongoDb echouée'));

// Configure the CORs middleware
app.use(cors());
app.use(express.json());
app.use('/api/v1/', api);

// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
	app.use(express.static(path.join(__dirname, 'front-react/build')));

	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'front-react/build', 'index.html'));
	});
}


// gets provisoires -> routes et controllers en cours d'écriture  

app.get('/', (request, response) => {
	response.send('Welcome to Express');
});


// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));

	
