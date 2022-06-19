"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        status: {
            type: graphql_1.GraphQLString,
            resolve(parent, args) {
                return "Welcome to GraphQL";
            },
        },
    },
});
//# sourceMappingURL=schema.js.map