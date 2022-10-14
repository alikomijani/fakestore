import categoryList from "./categories.db";
export function categoriesSeeds(server) {
  categoryList.forEach((item) => {
    server.create("category", {
      ...item,
    });
  });
}

export function categoriesRoutes(server) {
  server.get("/categories", (schema) => {
    return schema.categories.all();
  });
}
