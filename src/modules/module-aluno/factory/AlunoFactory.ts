import { AlunoController } from '../controllers/AlunoController';
import { AlunoRepository } from '../domain/repo/AlunoRepository';
import { AlunoService } from '../domain/services/AlunoService';

export const alunoFactory = () => {
  const alunoRepository = new AlunoRepository();
  const alunoService = new AlunoService(alunoRepository);
  const alunoController = new AlunoController(alunoService);
  return alunoController;
};