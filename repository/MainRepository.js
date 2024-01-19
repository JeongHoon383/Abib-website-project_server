import { db } from "../db/Database.js";

export async function getProducts() {
  return db.execute(`SELECT * FROM product`, []).then((result) => result);
}

export async function insertQna(mid, qTitle, qContent) {
  return db
    .execute(
      `INSERT INTO qna (mid,qTitle,qContent,qDate) values(?,?,?,curdate())`,
      [mid, qTitle, qContent]
    )
    .then((result) => "ok");
}

export async function getOrderList(id) {
  const sql = `SELECT oh.orderDate, oh.orid ,p.title,oh.orderTotalPrice,oh.deliveryStatus, od.pid  FROM order_head oh  INNER JOIN order_detail od ON oh.oid = od.oid 
  INNER JOIN  product p ON od.pid = p.pid AND oh.mid = ?`;
  return db.execute(sql, [id]).then((row) => row[0]);
}
