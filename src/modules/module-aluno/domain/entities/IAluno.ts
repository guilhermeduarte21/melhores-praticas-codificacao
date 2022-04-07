import { CPF } from '../ValueObject/CPF';

export interface IAluno {
  nome: string;
  numeroCelular: string;
  matricula: string;
  cpf: CPF;
}