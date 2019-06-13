const Recipe = require('../../models/recipe');

module.exports = (request, response) => {
  const id = request.params.id;
  const updatedProps = {};

  for (const props of request.body) {
    updatedProps[props.propName] = props.value;
  }

  // Update pattern: [{"propName": "name", "value": "..."}]
  Recipe.update({ _id: id }, { $set: updatedProps })
    .exec()
    .then(result => {
      console.log('UPDATE request successful', result);
      response.status(200).json({
        message: 'Recipe updated',
        request: {
          type: 'UPDATE',
          url: `http://localhost:5000/recipes/${id}`
        }
      });
    })
    .catch(err => {
      console.log('UPDATE request failed', err);
      response.status(500).json({
        error: err
      });
    });
};
