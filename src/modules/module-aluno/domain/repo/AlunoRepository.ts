import AlunoModel from '../../infra/models/AlunoModel';
import { Aluno } from '../entities/Aluno';

class AlunoRepository {
  async criar(aluno: Aluno): Promise<Aluno> {
    const novoAluno = await AlunoModel.create(aluno);

    return novoAluno;
  }

  async deletar(id: string): Promise<boolean> {
    await AlunoModel.findByIdAndDelete(id);

    return true;
  }

  async encontrarTodos(): Promise<Aluno[]> {
    const alunos = await AlunoModel.find<Aluno>();

    return alunos;
  }

  async encontrarID(id: string): Promise<Aluno | null> {
    const aluno = await AlunoModel.findOne({ id });

    return aluno;
  }

  async encontrarCPF(cpf: string): Promise<Aluno | null> {
    const aluno = await AlunoModel.findOne({ cpf });

    return aluno;
  }
}

export { AlunoRepository };