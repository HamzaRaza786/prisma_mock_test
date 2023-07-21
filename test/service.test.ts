import * as productService from '../src/services/product';
import { prismaMock } from '../singleton';
import nock from 'nock';
describe("Testing", () => {
  var book:any;
  beforeAll(async() => {
    const date = new Date();
    book = {
      id:1,
      name:"book",
      price:300,
      createdAt:date
     };
  });
  it("Testing create Products", async() => {
    const date = new Date();

    const copy = {
     id:2,
     name:"copy",
     price:200,
     createdAt:date
    };

    prismaMock.product.create.mockResolvedValue(copy);
    const product = await productService.createProduct(copy.name, copy.price); 
    expect(product).toEqual({
      id:2,
     name:"copy",
     price:200,
     createdAt:date
    });
  })

   it("Testing product by Id" , async() => {
      prismaMock.product.findUnique.mockResolvedValue(book);
     const product = await productService.getProductById(1) || {name:""};
    expect(product.name).toBe('book');
   })

   it("Testing finding all products" , async() => {
    const date = new Date();

    const products = [book, {
     id:2,
     name:"copy",
     price:200,
     createdAt:date
    }];

    prismaMock.product.findMany.mockResolvedValue(products); 
     const product = await productService.getProducts();
    expect(product[1].name).toBe('copy');
   });

    it("Testing updating products" , async() => {
    prismaMock.product.update.mockResolvedValue(book);
     const product = await productService.updateProduct(book.id, book.name, book.price);
    expect(product.name).toBe('book');
   });
  it("Testing third party api calls" , async() => {
    nock("https://jsonplaceholder.typicode.com").persist().get("/todos").reply(200, [
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      }]);
    prismaMock.product.update.mockResolvedValue(book);
     const todos = await productService.getTodosList();
    expect(todos).toEqual(
      [
      {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      }]
    );
   });
  
   
});
