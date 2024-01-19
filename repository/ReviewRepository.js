import { db } from '../db/Database.js';

export async function saveReview(pid, mid, point, content, rcover) {
  const sql = 'insert into review (pid, mid, point, content, rdate, rcover) values(?, ?, ?, ?, now(), ?)';
  return db.execute(sql, [pid, mid, point, content, rcover || null]).then((result) => 'success');
}

export async function getReview(pid) {
  const sql = 'select * from review where pid = ? order by rdate desc';
  return db.execute(sql, [pid]).then((result) => result[0]);
}
