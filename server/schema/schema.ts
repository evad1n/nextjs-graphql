import graphql, { GraphQLObjectType, GraphQLString } from "graphql";

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        status: {
            type: GraphQLString,
            resolve(parent, args) {
                return "Welcome to GraphQL";
            },
        },
    },
});
