import { db } from "../db/Database.js";

export async function getProducts() {
  return db
    .execute(`SELECT * FROM product WHERE priceSales > 1`, [])
    .then((result) => result);
}
export async function getRecommend() {
  return db
    .execute(`SELECT * FROM product WHERE title like '%부활초%'`, [])
    .then((result) => result);
}
