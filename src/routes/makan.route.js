const express = require('express');
const router = express.Router();
const makanController = require('../controllers/makan.controller');

router.get('/', makanController.getAllMakan);
router.post('/', makanController.createMakan);
router.get('/:id', makanController.getMakanById);
router.put('/:id', makanController.updateMakan);
router.delete('/:id', makanController.deleteMakan);


module.exports = router;
