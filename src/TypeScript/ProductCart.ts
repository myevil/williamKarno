class ProductCart {
  image: string;
  name: string;
  price: number = 0;
  currency: string;
  quantity: number = 0;
  total: number = 0;

  constructor(image: string, name: string, price:number, currency: string){
    this.image = image;
    this.name = name;
    this.price = price;
    this.currency = currency;
  }

  addProduct(manyProduct: number){
    this.quantity += manyProduct;
    this.total = this.sumTotalPrice();
  }

  sumTotalPrice(){
    return this.quantity * this.price;
  }
}