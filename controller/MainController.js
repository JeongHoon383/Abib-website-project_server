import * as MainRepository from "../repository/MainRepository.js";
export async function getProducts(req, res) {
  let result = await MainRepository.getProducts();
  res.json(result[0]);
}
export async function getRecommend(req, res) {
  let result = await MainRepository.getRecommend();
  console.log(result);
  res.json(result[0]);
}
