import express, { urlencoded } from "express";
import cors from "cors";
import MainRouter from "./router/MainRouter.js";
import uploadRouter from "./router/UploadRouter.js";
import path from "path";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use("/uploads", express.static(path.join("Uploads")));

app.use("/upload", uploadRouter);

app.listen(9090, () => {
  console.log(`http://localhost:9090 아비브 서버 실행중`);
});
