import * as CartRep from "../repository/CartRepository.js";

export async function getCartProduct(req, res) {
  const pid = req.params.pid;
  const result = await CartRep.getCartProduct(pid);
  res.json(result);
}
