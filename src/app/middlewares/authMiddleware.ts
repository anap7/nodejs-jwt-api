import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

//Criando a tipagem do retorno do verify do jsonwebtoken
interface TokenPayload {
  id: string,
  iat: number,
  exp: number
}

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.sendStatus(401);
  }

  //Removendo a string 'Bearer' por nada ''
  const token = authorization.replace('Bearer', '').trim();

  
  try {
   const data = jwt.verify(token, process.env.SECRET_KEY);
   const { id } = data as TokenPayload;

   req.userId = id;

   //Por ser um middleware, temos que passar para a próxima função da rota para continuar o processo;
   return next();
  } catch {
    return res.sendStatus(401);
  }
}