import { gql } from "apollo-server";
import { DocumentNode } from "graphql";

const schema: DocumentNode = gql`
    type Query {
        books: [Book]
    }

    type Book {
        id: ID
        name: String
        author: String
        publish: String
    }
`;

export default schema;