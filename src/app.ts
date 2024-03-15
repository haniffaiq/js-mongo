import express from 'express';
import { connectMongoDB } from './db';
import userRouter from './routers/userRouter';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());
app.use('/users', userRouter);

connectMongoDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => console.error(err));
