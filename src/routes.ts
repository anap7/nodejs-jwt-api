import { Router } from 'express';
import { Request, Response } from 'express';

import authMiddleware from './app/middlewares/authMiddleware';
import UserController from './app/controllers/UserController';
import AuthController from './app/controllers/AuthController';
import crypto from 'crypto';

const router = Router();

router.post('/users', UserController.store);
router.post('/auth', AuthController.authenticate);
//Criando uma rota teste protegida - Verificando se o usuário contém o token/está autenticado
router.get('/users', authMiddleware, UserController.index);
router.get('/generat-secret-key', (req: Request, res: Response) => res.send(crypto.randomBytes(64).toString('hex')));

export default router;