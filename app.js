import express from 'express';
import livros from "./data/livros.json";
import livrosRoute from './routes/livrosRoute.js';
import morgan from 'morgan';
import bodyarser from 'body-parser'
const PORTA = 3000;
const server = express();

const criarUrl = (version, path) => `/api/${version}/${path}`;
const LIVROS_URL = criarUrl("v1", "livros");

server.use(morgan('tiny'));
server.use(bodyarser.json());
server.use(LIVROS_URL, livrosRoute);

server.listen(3000, () => {
    console.log(`servidor rodando na porta ${PORTA} `);
});

