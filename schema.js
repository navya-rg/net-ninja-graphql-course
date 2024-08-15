export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }
    type Query {
        reviews: [Review]
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }
    type Mutation {
        addGame(game: AddGameRequest!): Game!
        updateGame(id: ID!, game: UpdateGameRequest!): Game!
        deleteGame(id: ID!): [Game!]
    }
    input AddGameRequest {
        title: String!
        platform: [String!]!
    }
    input UpdateGameRequest {
        title: String
        platform: [String!]
    }
`

// Int, Float, String, Boolean, ID
// ! --> mandatory field cannot be null
// Query type is mandatory for all GraphQl schemas - specifies the various entry points and their return types