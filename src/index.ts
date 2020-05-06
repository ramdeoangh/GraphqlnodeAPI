import express from "express";
import graphqlHTTP from "express-graphql";
import { makeExecutableSchema } from "graphql-tools";
import { ProductModelService } from "./services/productService";
import { UsersModelService } from "./services/UsersService";

const app: express.Application = express();
const port = 4000;

let typeDefs: any = [
  `
  type Query {
    hello: String
  }
     
  type Mutation {
    hello(message: String) : String
  }
`,
];

let helloMessage: String = "World!";

let resolvers = {
  Query: {
    hello: () => helloMessage,
  },
  Mutation: {
    hello: (_: any, helloData: any) => {
      helloMessage = helloData.message;
      return helloMessage;
    },
  },
};

let productsService = new ProductModelService();
let usersService = new UsersModelService();
typeDefs += productsService.configTypeDefs();
typeDefs += usersService.configTypeDefs();

productsService.configResolvers(resolvers);
usersService.configResolvers(resolvers);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    graphiql: true,
  })
);
app.listen(port, () =>
  console.log(`Node Graphql API listening on port ${port}!`)
);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    graphiql: true,
  })
);
app.listen(port, () =>
  console.log(`Node Graphql API listening on port ${port}!`)
);
