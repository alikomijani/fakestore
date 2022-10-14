import { Response } from "miragejs";

export function usersSeeds(server) {
  server.create("user", {
    firstName: "Ali",
    lastName: "Komijani",
    username: "09396903816",
    password: "123456",
  });
  server.create("user", {
    firstName: "Hassan",
    lastName: "Amiri",
    username: "09396903817",
    password: "123456",
  });
}

export function usersRoutes(server) {
  server.get("/users", (schema) => {
    return schema.users.all();
  });
  server.post("/login", (schema, request) => {
    const body = JSON.parse(request.requestBody);
    const user = schema.users.findBy({
      username: body.username,
      password: body.password,
    });
    if (user) {
      return new Response(
        200,
        {},
        {
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          token: "token",
        }
      );
    } else {
      return new Response(400, {}, { errors: "invalid credential" });
    }
  });
  server.post("/register", (schema, request) => {
    const body = JSON.parse(request.requestBody);
    if (body.username === "invalidUser") {
      return new Response(400, {}, { username: "username is invalid!" });
    }
    schema.users.create({
      ...body,
    });
    return new Response(201, {}, { message: "user created!" });
  });
  server.post("/update-profile", (schema) => {});
}
