import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";

// server setup
const server = ApolloServer({
  // this object gets 2 properties
  // 1.typeDefs  - type definitions. Description about our data types.
  typeDefs,
  // 2. resolvers - object of functions which determine how we response to different queries.
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(ApolloServer);
