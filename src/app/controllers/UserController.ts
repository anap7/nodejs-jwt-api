import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

class UserController {
  index(req: Request, res: Response) {
    return res.send({
      userId: req.userId,
      sucessMessage: "👻 💀 ☠️ 👽 👾 🤖 🎃 Legal, você tá autenticado fia da mãe 👻 💀 ☠️ 👽 👾 🤖 🎃"
    });
  }

  async store(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, password } = req.body;

    const userExists = await repository.findOne({ where: { email }});

    if (userExists) {
      /*O status de resposta 409 Conflict indica que a solicitação atual 
      conflitou com o recurso que está no servidor. */
      return res.sendStatus(409);
    }
    
    const user = repository.create({ email, password });
    await repository.save(user);

    return res.status(201).json(user);
  }
}

export default new UserController();