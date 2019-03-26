const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
	_id: { type: String},
	name: { type: String },
	composer: { type: String },
	description: { type: String },
	linkURL: { type: String }
});

mongoose.model('score', ScoreSchema);
