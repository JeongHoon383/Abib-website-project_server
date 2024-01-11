import { db } from "../db/Database.js";

export async function getIsIdAvailable(id) {
  const sql = "select count(*) as count from member where mid = ?";
  return db.execute(sql, [id]).then((result) => result[0][0].count);
}

export async function insertMember(formData) {
  const sql =
    "insert into member (mid, password, name, phone, email, joinDate, birthdate, postalcode, address1, address2, gradeName) values (?, ?, ?, ?, ?, now(), ?, ?, ?, ?, 'White')";
  return db.execute(sql, formData).then((result) => "success");
}

export async function login(id) {
  const sql =
    "select count(password) as count, any_value(password) as password from member where mid = ?";
  return db.execute(sql, [id]).then((rows) => rows[0][0]);
}
