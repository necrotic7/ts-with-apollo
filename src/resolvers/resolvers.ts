import {Authors, Books} from "../data/temp"
const resolvers = {
    Query:{
        books: () => {
            return Books;
        }
    },

    Book:{
        author: (parent:{ author: number }) => {
            // parent相當於取得author的上層，也就是Books裡的 { id, name, author, publish }
            return Authors.find(author => author.id == parent.author)
        }
    }
};

export default resolvers;

