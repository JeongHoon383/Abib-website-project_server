import express, { urlencoded } from "express";
import cors from "cors";
import path from "path";
import uploadRouter from "./router/UploadRouter.js";
import MainRouter from "./router/MainRouter.js";
import SearchRouter from "./router/SearchRouter.js";
import ProductRouter from "./router/ProductRouter.js";
import MemberRouter from "./router/MemberRouter.js";
import ReviewRouter from "./router/ReviewRouter.js";
import OrderRouter from "./router/OrderRouter.js";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cors());
app.use("/uploads", express.static(path.join("Uploads")));
app.use("/upload", uploadRouter);

app.use("/product", ProductRouter);
app.use("/search", SearchRouter);
app.use("/member", MemberRouter);
app.use("/review", ReviewRouter);
app.use("/order", OrderRouter);

app.use("/", MainRouter);
app.listen(9091, () => {
  console.log(`http://192.168.50.16:9091 아비브 서버 실행중`);
});
