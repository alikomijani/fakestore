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
}
