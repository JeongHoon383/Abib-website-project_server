import coolsms from "coolsms-node-sdk";
import * as repository from "../repository/MemberRepository.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function getIsIdAvailable(req, res) {
  const id = req.params.idValue;
  const result = await repository.getIsIdAvailable(id);
  res.json(result);
}

export async function getCertificationCode(req, res) {
  const { phoneValue } = req.body;
  const certificationCode = Math.floor(Math.random() * 1000000);
  const mysms = coolsms.default;
  const messageService = new mysms(
    "NCSN3GO1YUSM6DIT",
    "HNDAKYW9BZMYKYVDCAKMPHMIR3B9MQPR"
  );

  const result = await messageService.sendOne({
    to: `${phoneValue}`,
    from: "01085486516",
    text: `아비브 인증번호는 [${certificationCode}]입니다.`,
  });

  if (result.statusCode === "2000") {
    res.json(certificationCode);
  } else {
    res.json("faillure");
  }
}

export async function insertMember(req, res) {
  const {
    id,
    password,
    name,
    phone,
    birthdate,
    email,
    postalcode,
    address1,
    address2,
  } = req.body;
  const hashPass = bcrypt.hashSync(password, 10);
  const formData = [
    id,
    hashPass,
    name,
    phone,
    email,
    birthdate,
    postalcode,
    address1,
    address2,
  ];
  const result = await repository.insertMember(formData);
  res.json(result);
}

export async function login(req, res) {
  const { id, password } = req.body;
  const result = await repository.login(id);
  const loginResult = { isLogin: false, isIdExist: false };

  if (result.count === 1) {
    loginResult.isIdExist = true;
    const secretkey = "94sn0Gvc%WcM";

    if (await bcrypt.compare(password, result.password)) {
      loginResult.isLogin = true;
      const token = jwt.sign({ id: id }, secretkey);
      loginResult.token = token;
    }
  }

  res.json(loginResult);
}
