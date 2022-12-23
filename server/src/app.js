import express from 'express';
import morgan from 'morgan';
import path from 'path';

const app = express();
const port = process.env.port || 3333;

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'tiny'));

const server = app.listen(port, () => console.log(`Listening at http://localhost:${port}/api`));

server.on('error', console.error);
