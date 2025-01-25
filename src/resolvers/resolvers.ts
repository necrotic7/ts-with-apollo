import {Authors, Books, Animals} from "../data/temp"
const resolvers = {
    Query:{
        books: () => {
            return Books;
        },
        getBook: (parent:void, args: {id: number}) => {
            return Books.find(book => book.id == args.id);
        },
        getHeader: (parent:void, args:void, context:void) => {
            return JSON.stringify(context, null, 2);
        },
        animals: () => {
            return Animals
        }
    },

    Book:{
        author: (parent:{ author: number }) => {
            // parent相當於取得author的上層，也就是Books裡的 { id, name, author, publish }
            return Authors.find(author => author.id == parent.author)
        }
    },

    Animal:{
        __resolveType: (obj: { type: string }) => {
            return obj.type
        }
    }
};

export default resolvers;

