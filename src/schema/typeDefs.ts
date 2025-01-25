import { gql } from "apollo-server";
import { DocumentNode } from "graphql";

const schema: DocumentNode = gql`
    schema {
        query: Query
    }

    type Query {
        books: [Book],
        getBook(id: ID!): Book,
        getHeader: String,
        animals: [Animal],
    }

    type Book {
        id: ID!
        name: String!
        author: Author!
        publish: String!
    }

    type Author {
        id: ID!
        name: String!
    }

    interface Animal {
        name: String!
        footLength: Int!
    }

    type Spider implements Animal{
        name: String!
        footLength: Int!
    }

    type Bird implements Animal{
        name: String!
        footLength: Int!
        wingLength: Int!
        wing: Boolean!
    }
`;

export default schema;