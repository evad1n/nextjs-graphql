"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_types_1 = require("./schema.types");
const mocks = {
    Date: () => new Date().toISOString(),
};
const server = new apollo_server_1.ApolloServer({
    typeDefs: schema_types_1.typeDefs,
    mocks,
});
(async () => {
    const { url } = await server.listen();
    console.log(`Server listening on port ${url}`);
})();
//# sourceMappingURL=index.js.map