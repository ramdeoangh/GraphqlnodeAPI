class Products {
  private id: Number = 0;
  private name: String = "";
  private desc: String = "";
  private price: Number = 0;
  private category: String = "";

  constructor(
    productId: Number,
    productName: String,
    productDescription: String,
    price: Number,
    productCategory: String
  ) {
    this.id = productId;
    this.name = productName;
    this.desc = productDescription;
    this.price = price;
    this.category = productCategory;
  }
}

export { Products as Product };
