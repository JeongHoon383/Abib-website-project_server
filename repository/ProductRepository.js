import { db } from "../db/Database.js";

export async function getProduct(category) {
  const sql = "select * from product where category like ?";
  return db.execute(sql, [`%${category}%`]).then((result) => result[0]);
}

export async function getProductDetail(pid) {
  const sql = "select * from product where pid = ?";
  return db.execute(sql, [pid]).then((result) => result[0][0]);
}
