import { CPF } from '../ValueObject/CPF';

export class Aluno {
  public nome: string;
  public numeroCelular: string;
  public matricula: string;
  public cpf: CPF;

  constructor(nome: string, numeroCelular: string, matricula: string, cpf: CPF) {
    this.nome = nome;
    this.numeroCelular = numeroCelular;
    this.matricula = matricula;
    this.cpf = cpf;
  }
}