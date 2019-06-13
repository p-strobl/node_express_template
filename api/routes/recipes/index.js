const router = require('express').Router();
const controller = require('../../controller');
const utility = require('../../controller/utiliy');

router.get('/', controller.recipes.GET);
router.get('/:id', controller.recipes.GETbyID);
router.post('/', utility.multerFileUploader, controller.recipes.POST);
router.patch('/:id', controller.recipes.PATCH);
router.delete('/:id', controller.recipes.DELETE);

module.exports = router;
