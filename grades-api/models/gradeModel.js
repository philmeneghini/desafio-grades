import mongoose from 'mongoose';

//criacao do modelo
const gradeSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
    //Valida se a nota inserida e menor que 0
    min: 0,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

const gradeModel = mongoose.model('grade', gradeSchema);

export { gradeModel };
