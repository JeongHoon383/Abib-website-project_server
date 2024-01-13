import { db } from '../db/Database.js';

export async function getSearchList(title) {
  const sql = 'select * from product where title like ?';
  return db.execute(sql, [`%${title}%`]).then((result) => result[0]);
}
