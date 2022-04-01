import { Router } from 'express';

import { alunoRouter } from './aluno.routes';

const routes = Router();

routes.use('/alunos', alunoRouter);

export { routes };