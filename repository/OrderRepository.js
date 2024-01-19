import { db } from "../db/Database.js";

async function beginTransaction() {
  const connection = await db.getConnection();
  await connection.beginTransaction();
  return connection;
}

async function commitTransaction(connection) {
  await connection.commit();
  connection.release();
}

async function rollbackTransaction(connection) {
  await connection.rollback();
  connection.release();
}

export async function order(orderData) {
  const {
    memberId,
    orName,
    orPostalcode,
    orAddress1,
    orAddress2,
    orPhone,
    orEmail,
    deliveryName,
    deliveryPostalcode,
    deliveryAddress1,
    deliveryAddress2,
    deliveryPhone,
    deliveryMessage,
    cart,
  } = orderData;

  const connection = await beginTransaction();

  try {
    const orid = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    const orderTotalPrice = cart.reduce(
      (total, item) =>
        total +
        (item.priceSales ? item.priceSales : item.originalPrice) *
          item.quantity,
      0
    );
    const deliveryFee = orderTotalPrice >= 50000 ? 0 : 2500;

    const [ordererResult] = await connection.execute(
      "INSERT INTO `orderer` (`orid`, `orName`, `orPostalcode`, `orAddress1`, `orAddress2`, `orPhone`, `orEmail`) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [orid, orName, orPostalcode, orAddress1, orAddress2, orPhone, orEmail]
    );

    const [orderHeadResult] = await connection.execute(
      'INSERT INTO `order_head` (`mid`, `orderDate`, `deliveryFee`, `orderTotalPrice`, `deliveryStatus`, `orid`) VALUES (?, CURRENT_TIMESTAMP, ?, ?, "상품 준비 중", ?)',
      [memberId, deliveryFee, orderTotalPrice, orid]
    );

    const oid = orderHeadResult.insertId;

    await connection.execute(
      "INSERT INTO `delivery` (`oid`, `deliveryName`, `deliveryPostalcode`, `deliveryAddress1`, `deliveryAddress2`, `deliveryPhone`, `deliveryMessage`) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        oid,
        deliveryName,
        deliveryPostalcode,
        deliveryAddress1,
        deliveryAddress2,
        deliveryPhone,
        deliveryMessage,
      ]
    );

    for (const item of cart) {
      await connection.execute(
        "INSERT INTO `order_detail` (`oid`, `pid`, `originalPrice`, `priceSales`, `quantity`) VALUES (?, ?, ?, ?, ?)",
        [oid, item.pid, item.originalPrice, item.priceSales, item.quantity]
      );
    }

    await commitTransaction(connection);

    return { result: "success" };
  } catch (error) {
    await rollbackTransaction(connection);
    return { result: "failure", error: error.message };
  }

  // return db.execute(sql, [orderData]).then((result) => result[0][0]);
}

export async function getOrdererInfo(memberId) {
  const sql =
    "select name, postalcode, address1, address2, phone, email from member where mid = ?";
  return db.execute(sql, [memberId]).then((result) => result[0][0]);
}
