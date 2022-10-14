import axios from "./axios";

export async function getAllProducts() {
  const res = await axios.get("/api/products");
  return res.data;
}

export async function getAllCategories() {
  const res = await axios.get("/api/categories");
  return res.data;
}

export async function loginUser(authData) {
  const res = await axios.post("/api/login", authData);
  return res.data;
}
