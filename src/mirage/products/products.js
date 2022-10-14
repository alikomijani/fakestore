export function productsRoutes(server) {
  server.get("/products", (schema, request) => {
    // server.normalizedRequestAttrs();
    return schema.products.all();
  });
  server.get("/products/:id", (schema, request) => {
    const id = request.params.id;
    return schema.products.find(id);
  });
}
