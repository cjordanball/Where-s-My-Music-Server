const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const ScoreType = require('./types');
const Score = mongoose.model('score');

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		scores: {
			type: GraphQLList(ScoreType),
			resolve() {
				return Score.find({});
			}
		},
		score: {
			type: ScoreType,
			args: { id: { type: new GraphQLNonNull(GraphQLID) } },
			resolve(parentValue, { id }) {
				return Score.findById(id);
			}
		}
	}
});

module.exports = RootQuery;
