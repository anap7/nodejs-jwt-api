# API de autenticação com JWT + TypeScript + TypeORM

API feita através do tutorial: [Criando uma API de autenticação JWT com TypeScript e TypeORM ](https://www.youtube.com/watch?v=TjAXBLszCb0&ab_channel=MateusSilva)do
canal: [Mateus Silva](https://www.youtube.com/channel/UCNckxUYl117w3hfgoj3DbWg)

## Instalando as dependências

Iniciando o projeto
```bash
npm init -y
npm install typescript ts-node nodemon -D
npx typescript --init
npm install express
npm install @types/express -D
```
Bcrypt JS - Para utilizarmos os recursos de geração de senha com hash e comparação de senha
```bash
npm install jsonwebtoken
npm install --save-dev @types/jsonwebtoken
```
JSON Web Token - Para gerar o token de autenticação
```bash
npm install bcrypt
npm install --save-dev @types/bcryptjs
```

## Typeorm - Configuração
Dependências necessárias
```bash
npm install typeorm --save
```

Banco escolhido (No meu caso utilizei MySQL)
```bash
npm install mysql2 --save
```

- Criar um arquivo na raiz do projeto chamado **ormconfig.json**
- Insira a seguinte config (Não esqueça de criar o banco de dados manualmente)

```javascript
{
  "type": "mysql",
  "host": "localhost",
  "port": "porta do seu banco de dados",
  "username": "usuario do banco",
  "password": "senha do banco",
  "database": "nome da tabela",
  "entities": [
     "src/app/models/*.ts"
  ],
  "migrations": [
     "src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "src/database/migrations"
  }
}
```
## Configurando um CLI para criar as migrations

No **package.json**, no objeto "scripts", inserir os seguintes comandos

```javascript		
"scripts": {
	"dev": "npx nodemon --exec ts-node --files src/index.ts",
	"typeorm": "npx ts-node ./node_modules/typeorm/cli.js"
},
```			
		
Criando uma tabela através das migrations

```bash			
npm run typeorm migration:create -n CreateUsersTable 
```
Porém recomendo usar o comando com yarn:
```
yarn typeorm migration:create -n CreateUsersTable 
```			
