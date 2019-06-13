const Recipe = require('../../models/recipe');

module.exports = (request, response) => {
  const id = request.params.id;

  Recipe.remove({ _id: id })
    .exec()
    .then(result => {
      console.log('DELETE request successful', result);
      response.status(200).json({
        message: 'Recipe deleted'
      });
    })
    .catch(err => {
      console.log('DELETE request failed', err);
      response.status(500).json({
        error: err
      });
    });
};
