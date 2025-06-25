const tarefaServices = require('../services/tarefaServices');

async function listarTarefas(req, res) {
  try {
    const resultado = await tarefaServices.listarQuery();
    res.status(200).json(tarefas);
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao buscar tarefas." });
  }
}

async function criarTarefa(req, res) {
  try {
    const { titulo, descricao, status = 'Pendente', prioridade = 'Média', data_entrega } = req.body;
    if (!titulo || !data_entrega) return res.status(400).json({ erro: 'Campos obrigatórios: titulo, data_entrega' });

    const query = 'INSERT INTO tarefas (titulo, descricao, status, prioridade, data_entrega) VALUES (?, ?, ?, ?, ?)';
    await db.query(query, [titulo, descricao, status, prioridade, data_entrega]);

    res.status(201).json({ message: 'Tarefa criada com sucesso' });
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao buscar tarefas." });
  }
}

module.exports = { listarTarefas, criarTarefa };
