import {Books} from "../data/temp"
const resolvers = {
    Query:{
        books: () => Books
    }
};

export default resolvers;

