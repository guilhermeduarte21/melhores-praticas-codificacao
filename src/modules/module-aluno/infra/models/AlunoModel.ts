import Mongoose from 'mongoose';

const AlunoModel = new Mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      trim: true,
    },
    numeroCelular: {
      type: String,
      required: true,
      trim: true,
    },
    matricula: {
      type: String,
      required: true,
      trim: true,
    },
    cpf: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default Mongoose.model('Aluno', AlunoModel);
