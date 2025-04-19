const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/employeeController');

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getOne);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.delete);
router.post('/login', ctrl.login);

module.exports = router;
