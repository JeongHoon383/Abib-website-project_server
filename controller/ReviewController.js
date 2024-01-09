import * as repository from '../repository/ReviewRepository.js';

export async function saveReview(req, res) {
  const rcover = req.file.path;
  const { pid, mid, point, content } = req.body;
  const result = await repository.saveReview(pid, mid, point, content, rcover);
  res.json(result);
}
