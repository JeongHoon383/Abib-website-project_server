import { db } from "../db/Database.js";

export async function order(orderData) {
  const sql =
    "select name, postalcode, address1, address2, phone, email from member where mid = ?";
  return db.execute(sql, [memberId]).then((result) => result[0][0]);
}

export async function getOrdererInfo(memberId) {
  const sql =
    "select name, postalcode, address1, address2, phone, email from member where mid = ?";
  return db.execute(sql, [memberId]).then((result) => result[0][0]);
}
