import { createConnection } from 'typeorm';

/*A função nativa de conexão do typeorm automaticamente localiza
a string de conexão ao criar o ormconfig.json*/
createConnection()
  .then(() => console.log('📦 Successfully connected with Database!'))
  .catch(error => console.log(error));