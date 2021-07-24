const express = require('express');
const router = express.Router();
const storageController = require('../../controllers/storageController');

router.get('/:filename', storageController.fetch)
      .post('/', storageController.upload)
      .delete('/:filename', storageController.delete);

module.exports = router;