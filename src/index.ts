require('dotenv').config();
//Para que possamos usar os recursos do typeORM usamos, temos que fazer a inicialização global
import "reflect-metadata";
import express from 'express';


import './database/connect';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(routes);

app.listen(3000, () => console.log("🔥 Server Started Baby!")); 