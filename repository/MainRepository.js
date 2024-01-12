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
