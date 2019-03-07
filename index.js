const express = require('express');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
const app = express();

const MONGO_URI = 'mongodb://cjb:1password@ds161345.mlab.com:61345/scores'
mongoose.Promise = global.Promise
mongoose.connect(MONGO_URI);
mongoose.connection
	.once('open', () => console.log('We are now connected!'))
	.on('error', error => console.log('ERROR CONNECTING TO MONGO: ', error));

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
	schema,
	graphiql:true
}))


app.listen(3600, () => {
	console.log('Here we go!')
});
