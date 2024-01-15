import * as repository from "../repository/OrderRepository.js";

export async function order(req, res) {
  const orderData = req.body;
  console.log(orderData);
  const result = await repository.order(orderData);
  res.json(result);
}

export async function getOrdererInfo(req, res) {
  const memberId = req.params.memberId;
  const result = await repository.getOrdererInfo(memberId);
  res.json(result);
}
