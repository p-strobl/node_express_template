const mongoose = require('mongoose');

const Recipe = require('../../models/recipe');

module.exports = (request, response) => {
  const newRecipe = new Recipe({
    _id: new mongoose.Types.ObjectId(),
    name: request.body.name,
    title: request.body.title,
    recipeImage: request.file.path
  });

  newRecipe
    .save()
    .then(result => {
      console.log('POST successful', result);
      response.status(201).json({
        message: 'POST request send',
        newRecipe: {
          _id: result.id,
          name: result.name,
          title: result.title,
          recipeImage: result.recipeImage,
          request: {
            type: 'POST',
            url: `http://localhost:5000/recipes/${result._id}`
          }
        }
      });
    })
    .catch(err => {
      console.log('POST Error', err);
      response.status(500).json({
        error: err
      });
    });
};
