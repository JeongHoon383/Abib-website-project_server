import { db } from "../db/Database.js";

export async function getCartProduct(pid) {
  const sql = "select * from product where pid = ?";
  return db.execute(sql, [pid]).then((result) => result[0][0]);
}
