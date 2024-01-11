import * as AdminMembersRepository from "../repository/AdminMembersRepository.js";

export async function getList(req, res) {
  const mid = req.body.mid;
  const name = req.body.name;
  const password = req.body.password;
  const phone = req.body.phone;
  const email = req.body.email;
  const userMileage = req.body.userMileage;
  const joinDate = req.body.joinDate;
  const birthDate = req.body.birthDate;
  const address1 = req.body.address1;
  const gradeName = req.body.gradeName;
  const postalcode = req.body.postalcode;
  const address2 = req.body.address2;

  let result = await AdminMembersRepository.getList({
    mid,
    name,
    password,
    phone,
    email,
    userMileage,
    birthDate,
    address1,
    gradeName,
    postalcode,
    address2,
  });
  res.json(result);
}
