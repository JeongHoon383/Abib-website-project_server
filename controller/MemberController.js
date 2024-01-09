import coolsms from "coolsms-node-sdk";

export async function getCertificationCode(req, res) {
  const { phoneValue } = req.body;
  const getCertificationCode = Math.floor(Math.random() * 1000000);
  const mysms = coolsms.default;
  const messageService = new mysms(
    "NCSN3GO1YUSM6DIT",
    "HNDAKYW9BZMYKYVDCAKMPHMIR3B9MQPR"
  );

  const result = await messageService.sendOne({
    to: `${phoneValue}`,
    from: "01085486516",
    text: `아비브 인증번호는 [${getCertificationCode}]입니다.`,
  });

  if (result.statusCode === "2000") {
    res.json(getCertificationCode);
  } else {
    res.json("faillure");
  }
}
