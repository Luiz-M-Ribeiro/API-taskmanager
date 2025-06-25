const express = require('express');
const router = express.Router();
const controller = require('../controllers/tarefaController');

router.get('/tarefas', controller.listarTarefas);
router.post('/tarefas', controller.criarTarefa);

module.exports = router;
