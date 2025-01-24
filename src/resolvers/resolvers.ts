import {Authors, Books} from "../data/temp"
const resolvers = {
    Query:{
        books: () => {
            const response:{
                id: Number,
                name: String,
                author?: {
                    id: number,
                    name: string,
                },
                publish: string,
            }[] = [];
            Books.map(b => {
                const author = Authors.find(a => a.id == b.author);
                response.push({
                    id: b.id,
                    name: b.name,
                    author: author,
                    publish: b.publish,
                });
            });

            return response;
        }
    }
};

export default resolvers;

