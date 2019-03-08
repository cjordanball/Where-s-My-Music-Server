const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;
const Score = mongoose.model('score');

const ScoreType = new GraphQLObjectType({
  name:  'Score',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    composer: { type: GraphQLString }
  })
});

module.exports = ScoreType;
