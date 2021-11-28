import { Request, Response } from 'express';
import { getRepository, Unique } from 'typeorm';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../models/User';

class AuthController {
  async authenticate(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, password } = req.body;

    const user = await repository.findOne({ where: { email }});

    if (!user) {
      /*O código de resposta de status de erro do cliente HTTP 401 Unauthorized indica que a solicitação
       não foi aplicada porque não possui credenciais de autenticação válidas para o recurso de destino. */
      return res.sendStatus(401);
    }
    
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.sendStatus(401);
    }

    const secretKey = process.env?.SECRET_KEY;

    /*Função sign -> Primeiro parâmetro é o payload, no caso vamos inserir o id,
    Segundo parâmetro é a chave secreta (recomendado guardar no env) e o terceiro dia o tempo de expiração do token,
    deixando com um dia de duração */
    const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1d'} );

    //Removendo a senha do usuário para não mostrar no retorno;
    delete user.password;

    res.json({
      user,
      token
    })
  }
}

export default new AuthController();