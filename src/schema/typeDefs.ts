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
`;

export default schema;