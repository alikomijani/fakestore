import {
  createServer,
  Model,
  belongsTo,
  hasMany,
  RestSerializer,
} from "miragejs";
import { categoriesRoutes } from "./categories/categories";
import { productsRoutes } from "./products/products";
import { usersRoutes } from "./users/users";
import productList from "./products/products.db";
import categoryList from "./categories/categories.db";
export function makeServer({ environment = "test" } = {}) {
  const server = createServer({
    timing: 3000,
    environment,
    serializers: {
      application: RestSerializer,
    },
    models: {
      user: Model,
      product: Model.extend({
        category: belongsTo("category", { inverse: "products" }),
      }),
      category: Model.extend({
        products: hasMany(),
      }),
    },
    routes() {
      this.namespace = "api";
      usersRoutes(this);
      categoriesRoutes(this);
      productsRoutes(this);
    },
    fixtures: {
      users: [
        {
          firstName: "Ali",
          lastName: "Komijani",
          username: "09396903816",
          password: "123456",
        },
      ],
      categories: categoryList,
      products: productList,
    },
    seeds(server) {
      // Load all fixture data into the development db
      server.loadFixtures();
    },
  });

  return server;
}
