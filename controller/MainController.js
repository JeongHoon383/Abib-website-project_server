import * as MainRepository from "../repository/MainRepository.js";
export async function getProducts(req, res) {
  let result = await MainRepository.getProducts();
  res.json(result[0]);
}

export async function insertQna(req, res) {
  const { qTitle, qContent, mid } = req.body;
  console.log(qTitle, qContent, mid);
  let result = await MainRepository.insertQna(qTitle, qContent, mid);
  if (result == "ok") {
    res.json({ ok: true });
  }
}
