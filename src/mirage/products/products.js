import productsList from "./products.db";

export function productsSeeds(server) {
  productsList.forEach((item) => {
    server.create("product", {
      ...item,
    });
  });
}

export function productsRoutes(server) {
  server.get("/products", (schema) => {
    return schema.products.all();
  });
}
