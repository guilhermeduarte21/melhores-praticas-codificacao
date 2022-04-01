import AlunoModel from '../../infra/models/AlunoModel';
import { AlunoRepository } from '../repo/AlunoRepository';
import { CPF } from '../ValueObject/CPF';

export class AlunoService {
  private alunoRepository: AlunoRepository;

  constructor(alunoRepository: AlunoRepository) {
    this.alunoRepository = alunoRepository;
  }

  async NovoAluno(nome: string, numeroCelular: string, matricula: string, cpf: CPF) {
    var alunoExiste = await this.alunoRepository.encontrarCPF(cpf.valor);

   if (alunoExiste) throw new Error("");

    const alunoDB = await AlunoModel.create({
      nome,
      numeroCelular,
      matricula,
      cpf: cpf.valor
    });

    const aluno = await this.alunoRepository.criar(alunoDB);
    return aluno;
  }
}
