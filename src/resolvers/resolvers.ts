import {Authors, Books} from "../data/temp"
const resolvers = {
    Query:{
        books: () => {
            return Books;
        }
    },

    Book:{
        author: (parent:{ author: number }) => {
            return Authors.find(author => author.id == parent.author)
        }
    }
};

export default resolvers;

