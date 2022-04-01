import { Router, Request, Response } from 'express';

import { alunoFactory } from '../../modules/module-aluno/factory/AlunoFactory';

const alunoRouter = Router();

alunoRouter.post('/', async (request: Request, response: Response) => {
  alunoFactory().CadastrarNovoAluno(request, response);
});

export { alunoRouter };