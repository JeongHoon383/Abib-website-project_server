import * as repository from '../repository/SearchRepository.js';

export async function getSearchList(req, res) {
  const title = req.params.query;
  const result = await repository.getSearchList(title);
  res.json(result);
}
