import request from 'supertest';

import { app } from '../../../config/app';

jest.setTimeout(10000000);

describe('ALUNO CONTROLLER', () => {
  it('deve ser possível criar um novo aluno', async () => {
    const response = await request(app).post('/alunos').send({
      nome: 'Rafael Brito',
      endereco: 'Rua Jornalista Mario Galvão, 348',
      numeroCelular: '+5521984941346',
      matricula: '175873',
      email: 'rafael.souzabrito7@gmail.com',
      cpf: '175.873.247-47',
    });

    console.log(response.body);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id');
  });

  it('não deve ser possível criar um aluno repetido', async () => {
    await request(app).post('/alunos').send({
      nome: 'Aluno Existente',
      endereco: 'Rua do Aluno Existente, 123',
      numeroCelular: '+5521999999999',
      matricula: '999999',
      email: 'aluno.existente@email.com',
      cpf: '999.999.999-99',
    });

    const response = await request(app).post('/alunos').send({
      nome: 'Aluno Existente',
      endereco: 'Rua do Aluno Existente, 123',
      numeroCelular: '+5521999999999',
      matricula: '999999',
      email: 'aluno.existente@email.com',
      cpf: '999.999.999-99',
    });

    console.log(response.body);

    expect(response.status).toBe(409);
    expect(response.body.message).toBe('Aluno existente!');
  });
});
