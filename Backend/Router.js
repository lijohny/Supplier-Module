const express = require('express');
const router = express.Router();
const spplrController = require('../Backend/supplierController/spplrController');
const itemController = require('../Backend/itemController/itmContrlr');

router.get('/', spplrController.getAllSupplier);
router.get('/', itemController.getAllItem);

router.post('/', spplrController.createSupplier);
router.post('/', itemController.createItem);

module.exports = router;