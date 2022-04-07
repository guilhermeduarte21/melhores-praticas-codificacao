import { debug } from 'console';
import AlunoModel from '../../infra/models/AlunoModel';
import { AlunoRepository } from '../repo/AlunoRepository';
import { CPF } from '../ValueObject/CPF';
import { IAlunoRequestDTO, IAlunoService } from './IAlunoService';

export class AlunoService implements IAlunoService {
  private alunoRepository: AlunoRepository;

  constructor(alunoRepository: AlunoRepository) {
    this.alunoRepository = alunoRepository;
  }

  async NovoAluno({
    nome,
    numeroCelular,
    matricula,
    cpf,
  }: IAlunoRequestDTO) {
    var alunoExiste = await this.alunoRepository.encontrarCPF(cpf.valor);
   if (alunoExiste) throw new Error("");

    const alunoDB = new AlunoModel({
      nome,
      numeroCelular,
      matricula,
      cpf: cpf.valor
    });

    const aluno = await this.alunoRepository.criar(alunoDB);
    return aluno;
  }
}
