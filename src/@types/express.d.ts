//Inserindo dentro do Request do express um novo valor com a tipagem atribuida
declare namespace Express {
  export interface Request {
    userId: string;
  }
}