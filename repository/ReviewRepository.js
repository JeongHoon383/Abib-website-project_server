import { db } from '../db/Database.js';

export async function saveReview(pid, mid, point, content, rcover) {
  const sql = 'insert into review (pid, mid, point, content, rdate, rcover) values(?, ?, ?, ?, sysdate(), ?)';
  return db.execute(sql, [pid, mid, point, content, rcover]).then((result) => 'success');
}
