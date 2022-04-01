import { Request, Response } from 'express';
import { AlunoService } from '../domain/services/AlunoService';

import { CPF } from '../domain/ValueObject/CPF';

export class AlunoController {
  private alunoService: AlunoService;

  constructor(alunoService: AlunoService) {
    this.alunoService = alunoService;
  }

  async CadastrarNovoAluno(request: Request, response: Response) {
    try {
      const { nome, numeroCelular, matricula, cpf } = request.body;

      const cpfFormatado = new CPF(cpf);
      
      const aluno = await this.alunoService.NovoAluno(
        nome,
        numeroCelular,
        matricula,
        cpfFormatado
      );

      return response.json(aluno);
    } catch (error) {
      return response.status(400).json({ mensagem : 'Não foi possivel cadastrar um novo aluno!' });
    }
  }
}
