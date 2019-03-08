const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
	name: { type: String },
	composer: { type: String },
	descriptions: { type: String }
});

mongoose.model('score', ScoreSchema);
