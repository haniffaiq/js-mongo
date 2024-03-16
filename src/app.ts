import express from 'express';
import { connectMongoDB } from './db';
import userRouter from './routers/userRouter';
import newsRouter from './routers/newsRouter'
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to JS MONGO API');
});

app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/news', newsRouter);

connectMongoDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => console.error(err));
