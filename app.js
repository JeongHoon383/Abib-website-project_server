import express, { urlencoded } from 'express';
import cors from 'cors';
import MainRouter from './router/MainRouter.js';
import SearchRouter from './router/SearchRouter.js';
import ProductRouter from './router/ProductRouter.js';

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use('/product', ProductRouter);
app.use('/search', SearchRouter);

app.listen(9090, () => {
  console.log(`http://localhost:9090 아비브 서버 실행중`);
});
