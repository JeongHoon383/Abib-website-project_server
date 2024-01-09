// import * as searchRep from  '../repository/SearchRepository.js'

export async function getList(req, res) {
  const list = await req.query.query;
  res.json(list);
}
