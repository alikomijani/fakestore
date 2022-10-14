import { Response } from "miragejs";

export function categoriesRoutes(server) {
  server.get("/categories", (schema) => {
    console.log(schema);
    // return new Response(404, {}, { error: "not found" });
    return schema.categories.all();
  });
}
