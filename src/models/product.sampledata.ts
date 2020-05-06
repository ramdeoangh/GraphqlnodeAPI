import { Product } from "./product";

const products: Array<Product> = [];

products.push(
  new Product(
    1,
    "GraphQl Tutorial",
    "A simple graphql tutorial",
    100,
    "software"
  )
);
products.push(
  new Product(2, "Node js with graphql", "A node graphql PI", 250, "software")
);
exports.productsSample = products;
