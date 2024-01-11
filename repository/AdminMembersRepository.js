import { db } from "../db/Database.js";

export async function getList({
  mid,
  name,
  password,
  phone,
  email,
  userMileage,
  birthDate,
  address1,
  gradeName,
  postalcode,
  address2,
}) {
  const sql =
    "INSERT INTO member(mid, name, password, phone, email, userMileage, joinDate, birthDate, address1, gradeName, postalcode, address2) VALUES (?, ?, ?, ?, ?, ?, sysdate(), ?, ?, ?, ?, ?)";

  return db
    .execute(sql, [
      mid,
      name,
      password,
      phone,
      email,
      userMileage,
      birthDate,
      address1,
      gradeName,
      postalcode,
      address2,
    ])
    .then((rows) => rows[0]);
}
