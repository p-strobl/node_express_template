const Recipe = require('../../models/recipe');

module.exports = (request, response) => {
  Recipe.find()
    .select('_id name title recipeImage')
    .exec()
    .then(result => {
      console.log('GET request successful', result);
      const getResult = {
        count: result.length,
        collection: result.map(item => {
          return {
            _id: item._id,
            name: item.name,
            title: item.title,
            recipeImage: item.recipeImage,
            request: {
              type: 'GET',
              url: `http://localhost:5000/recipes/${item._id}`
            }
          };
        })
      };
      response.status(200).json(getResult);
    })
    .catch(err => {
      console.log('GET request failed', err);
      response.status(500).json({
        error: err
      });
    });
};
