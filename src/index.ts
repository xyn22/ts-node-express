import express from 'express';

const app = express();
const DEFAULT_PORT = 3000;
const port = parseInt(process.env.PORT || '', 10) || DEFAULT_PORT;

app.use('/', (req, res) => res.send('🍪'));

app.listen(port, () => console.log(`serving cookies from http://localhost:${port}/`));
