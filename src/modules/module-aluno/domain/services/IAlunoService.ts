import { IAluno } from "../entities/IAluno";
import { CPF } from "../ValueObject/CPF";


interface IAlunoRequestDTO {
    nome: string;
    numeroCelular: string;
    matricula: string;
    cpf: CPF;
}

interface IAlunoService {
    NovoAluno({
    nome,
    numeroCelular,
    matricula,
    cpf,
  }: IAlunoRequestDTO): Promise<IAluno>;
}

export { IAlunoRequestDTO, IAlunoService };