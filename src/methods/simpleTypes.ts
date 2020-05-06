let sampleTypeDefs: any = [
  `
    type Query {
      hello: String
    }
       
    type Mutation {
      hello(message: String) : String
    }
  `,
];

module.exports.typeDefs = sampleTypeDefs;
