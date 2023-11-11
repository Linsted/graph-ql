export const typeDefs = `#graphql
type Game {
    id: ID!
    title: String!
    platform: [String!]!
}

type Review {
    id: ID!
    rating: Int!
    content: String!
}

type Author {
    id: ID!
    name: String!
    verified: Boolean!
}

type Query {
    reviews: [Review]
    game: [Game]
    author: [Author]
}
`;

/*
There are 5 main data types : 

-int
-float
-string
-boolean
-ID - graphql use as id for data objects

Int! - !  means that this data required ( not null) 

type Query - is required in every schema . It defines an entry point to the Graph and specify the return types of those entry points. 

*/
