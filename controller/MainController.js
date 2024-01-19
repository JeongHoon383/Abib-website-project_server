import * as MainRepository from "../repository/MainRepository.js";
export async function getProducts(req, res) {
  let result = await MainRepository.getProducts();
  res.json(result[0]);
}

export async function insertQna(req, res) {
  const { qTitle, qContent, mid } = req.body;
  console.log(qTitle, qContent, mid);
  let result = await MainRepository.insertQna(mid, qTitle, qContent);
  if (result == "ok") {
    res.json({ ok: true });
  }
}

export async function getOrderList(req, res) {
  const { id } = req.params;
  let result = await MainRepository.getOrderList(id);

  res.json(result);
}
