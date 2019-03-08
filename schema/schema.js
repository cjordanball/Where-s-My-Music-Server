const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootQueryType = require('./rootQuery');

module.exports = new GraphQLSchema({
	query: RootQueryType
});
