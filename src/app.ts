import express from 'express';
import { connectMongoDB } from './db';
import userRouter from './routers/userRouter';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to JS MONGO API');
});

app.use(express.json());
app.use('/api/users', userRouter);

connectMongoDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => console.error(err));
