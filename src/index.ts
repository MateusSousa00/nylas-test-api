import express from 'express'
import cors from 'cors';
import { routes } from './routes/index';
import { ENV } from './shared/constants'
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

const port = ENV.PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
