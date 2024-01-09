import { db } from "../db/Database.js";

export async function getProducts() {
  return db.execute(`SELECT * FROM product`, []).then((result) => result);
}
