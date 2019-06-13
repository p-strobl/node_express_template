const recipes_GET = require('./recipes_GET');
const recipes_GETbyID = require('./recipes_GETbyID');
const recipes_POST = require('./recipes_POST');
const recipes_PATCH = require('./recipes_PATCH');
const recipes_DELETE = require('./recipes_DELETE');

module.exports = {
  GET: recipes_GET,
  GETbyID: recipes_GETbyID,
  POST: recipes_POST,
  PATCH: recipes_PATCH,
  DELETE: recipes_DELETE
};
