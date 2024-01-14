import * as repository from "../repository/OrderRepository.js";

export async function getOrdererInfo(req, res) {
  const memberId = req.params.memberId;
  const result = await repository.getOrdererInfo(memberId);
  res.json(result);
}
