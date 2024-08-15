import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";

// server setup
const server = new ApolloServer({
    // typeDefs -- definitions of types of data (author, game, reviews etc)
    typeDefs,
    // resolvers
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { host: '0.0.0.0', port: 4000 }
});

console.log('Server ready at port', 4000);
console.log('URL:', url);