import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/typeDefs";
import resolvers from "./resolvers/resolvers";

// 直接運行ts而不需要先編譯成js
// npx ts-node src/index.ts

const server: ApolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url})=>{
    console.log('server listen on:', url);
})