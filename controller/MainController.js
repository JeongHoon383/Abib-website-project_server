import * as MainRepository from "../repository/MainRepository.js";
export async function getProducts(req, res) {
  let result = await MainRepository.getProducts();
  res.json(result[0]);
}
