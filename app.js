import express, { urlencoded } from "express";
import cors from "cors";
import path from "path";
import uploadRouter from "./router/UploadRouter.js";
import MainRouter from "./router/MainRouter.js";
import SearchRouter from "./router/SearchRouter.js";
import ProductRouter from "./router/ProductRouter.js";
import MemberRouter from "./router/MemberRouter.js";
import CartRouter from "./router/CartRouter.js";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use("/uploads", express.static(path.join("Uploads")));
app.use("/upload", uploadRouter);

app.use("/product", ProductRouter);
app.use("/search", SearchRouter);
app.use("/certification", MemberRouter);
app.use("/cart", CartRouter);

app.use("/", MainRouter);
app.listen(9090, () => {
  console.log(`http://localhost:9090 아비브 서버 실행중`);
});
