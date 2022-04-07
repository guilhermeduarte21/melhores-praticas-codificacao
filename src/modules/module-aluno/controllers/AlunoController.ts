import { Request, Response } from 'express';
import { IAlunoService } from '../domain/services/IAlunoService';
import { CPF } from '../domain/ValueObject/CPF';

export class AlunoController {
  private alunoService: IAlunoService;

  constructor(alunoService: IAlunoService) {
    this.alunoService = alunoService;
  }

  async CadastrarNovoAluno(request: Request, response: Response) {
    try {
      const { nome, numeroCelular, matricula, cpf } = request.body;
      
      const aluno = await this.alunoService.NovoAluno({
        nome,
        numeroCelular,
        matricula,
        cpf: new CPF(cpf)
        });

      return response.json(aluno);
    } catch (error) {
      return response.status(400).json({ mensagem : 'Não foi possivel cadastrar um novo aluno!' });
    }
  }
}
