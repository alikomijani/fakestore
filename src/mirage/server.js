import { createServer, Model, belongsTo } from "miragejs";
import { categoriesRoutes, categoriesSeeds } from "./categories/categories";
import { productsRoutes, productsSeeds } from "./products/products";
import { usersRoutes, usersSeeds } from "./users/users";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    models: {
      user: Model,
      product: Model.extend({
        category: belongsTo("category"),
      }),
      category: Model,
    },
    seeds(server) {
      usersSeeds(server);
      categoriesSeeds(server);
      productsSeeds(server);
    },
    routes() {
      this.namespace = "api";
      usersRoutes(this);
      categoriesRoutes(this);
      productsRoutes(this);
    },
  });

  return server;
}
