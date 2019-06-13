const multer = require('multer');

module.exports = (() => {
  const storage = multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, './uploads/');
    },
    filename: (request, file, callback) => {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  });

  return multer({ storage }).single('recipeImage');
})();
