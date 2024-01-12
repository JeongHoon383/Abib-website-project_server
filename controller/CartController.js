import * as CartRep from "../repository/CartRepository.js";

export async function cartAdd(req, res) {
  const result = await CartRep.cartAdd();
  console.log(req.body);
  /* res.json(result); */
}
