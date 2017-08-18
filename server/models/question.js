var mongoose = require('mongoose')
var random = require('mongoose-random');

var QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },

  answer: {
      type: String,
      required: true,
  },

  fakeOne: {
      type: String,
      required: true,
  },

  fakeTwo: {
      type: String,
      required: true,
  }
  
}, {timestamps: true})

var TestSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },

  score: {
      type: String,
      required: true,
  },

  percentage: {
      type: String,
      required: true,
  },
  
}, {timestamps: true})

QuestionSchema.plugin(random, { path: 'r' });
mongoose.model('Question', QuestionSchema);
mongoose.model('Test', TestSchema);