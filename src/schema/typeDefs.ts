import { gql } from "apollo-server";
import { DocumentNode } from "graphql";

const schema: DocumentNode = gql`
    type Query {
        books: [Book]
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