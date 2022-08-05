import { ApolloServer } from "apollo-server";

import { typeDefs } from "./schema.types";

const mocks = {
    Date: () => new Date().toISOString(),
};

const server = new ApolloServer({
    typeDefs,
    mocks,
});

(async () => {
    const { url } = await server.listen();
    console.log(`Server listening on port ${url}`);
})();
