import * as ProductRep from '../repository/ProductRepository.js';

export async function getProduct(req, res) {
  const result = await ProductRep.getProduct();
  res.json(result);
}

export async function getProductDetail(req, res) {
  const pid = req.params.pid;
  const result = await ProductRep.getProductDetail(pid);
  res.json(result);
}
