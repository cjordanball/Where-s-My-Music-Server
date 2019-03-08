const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID } = graphql;
const { ScoreType } = require('./types');
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
				console.log('scoreType');
				return Score.findById(id);
			}
		}
	}
});
