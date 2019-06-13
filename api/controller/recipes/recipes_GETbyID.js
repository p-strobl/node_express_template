const Recipe = require('../../models/recipe');

module.exports = (request, response) => {
  const id = request.params.id;

  Recipe.findById(id)
    .select('_id name title recipeImage')
    .exec()
    .then(collection => {
      console.log('GETbyID request successful', collection);
      response.status(200).json({
        message: 'GETbyID based request',
        result: collection
      });
    })
    .catch(err => {
      console.log('GET request failed', err);
      response.status(500).json({
        error: err
      });
    });
};
