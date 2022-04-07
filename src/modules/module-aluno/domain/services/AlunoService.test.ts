import { AlunoRepository } from "../repo/AlunoRepository";
import { CPF } from "../ValueObject/CPF";
import { AlunoService } from "./AlunoService";

const alunoService = new AlunoService(new AlunoRepository);

test("Novo Aluno", async () => {
    let result;

    try{
        result = await alunoService.NovoAluno(
        "Fulano",
        "21999999999",
        "12345678911",
        new CPF("12345678912"));
        expect(result).toBeTruthy();
    } finally {
        //if(result) await alunoService
    }
})