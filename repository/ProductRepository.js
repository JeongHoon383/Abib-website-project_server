import { db } from '../db/Database.js';

export async function getProduct() {
  const sql = 'select * from product';
  return db.execute(sql).then((result) => result[0]);
}

export async function getProductDetail(pid) {
  const sql = 'select * from product where pid = ?';
  return db.execute(sql, [pid]).then((result) => result[0][0]);
}
