const productsData = require("../models/product.sampledata").productsSample;

class ProductService {
  public products: any = productsData;

  configTypeDefs() {
    let typeDefs = `
          type Product {
            name: String,
            description: String,
            id: Int,
            price: Int,
            category: String
          } `;
    typeDefs += ` 
          extend type Query {
          products: [Product]
        }
        `;

    typeDefs += `
          extend type Mutation {
            product(name:String, id:Int, description: String, price: Int,  category: String): Product!
          }`;
    return typeDefs;
  }

  configResolvers(resolvers: any) {
    resolvers.Query.products = () => {
      return this.products;
    };
    resolvers.Mutation.product = (_: any, product: any) => {
      this.products.push(product);
      return product;
    };
  }
}

export { ProductService as ProductModelService };
