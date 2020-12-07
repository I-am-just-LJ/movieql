import { GraphQLSever } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLSever({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("Graphql Sever Running"));
