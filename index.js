import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./_db.js";

// server setup
const PORT = 4000;

const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
  },
};

const server = new ApolloServer({
  // this object gets 2 properties
  // 1.typeDefs  - type definitions. Description about our data types.
  typeDefs,
  // 2. resolvers - object of functions which determine how we response to different queries.
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log(`server runs at port - ${PORT}`);
