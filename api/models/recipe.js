const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  recipeImage: String
});

module.exports = mongoose.model('Recipe', recipeSchema);
