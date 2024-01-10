import * as repository from '../repository/ReviewRepository.js';

export async function saveReview(req, res) {
  let rcover = null;

  if (req.file && req.file.path) {
    rcover = req.file.path;
  }
  const { pid, mid, point, content } = req.body;
  const result = await repository.saveReview(pid, mid, point, content, rcover);
  res.json(result);
}

export async function getReview(req, res) {
  const pid = req.params.pid;
  const result = await repository.getReview(pid);
  res.json(result);
}
