const tarefaServices = require('../services/tarefaServices');

async function listarTarefas(req, res) {
  try {
    const tarefas = await tarefaServices.listarQuery();
    res.status(200).json(tarefas);
  } catch (erro) {
    res.status(500).json({ erro: "Erro ao buscar tarefas." });
  }
}

async function criarTarefa(req, res) {
  try {
    const novaTarefa = await tarefaServices.criarQuery(req.body);
    res.status(201).json(novaTarefa);
  } catch {
    res.status(500).json({ erro: 'Erro ao criar tarefa.' });
  }
}

  async function atualizarTarefa(req, res) {
    try {
      const tarefaAtualizada = await tarefaServices.atualizarQuery(req.params.id, req.body);
      if (tarefaAtualizada === 0) {
        res.status(404).json({ erro: 'Tarefa não encontrada.' });
      } else {
        res.status(200).json(tarefaAtualizada);
      }
    }catch (erro){
      res.status(500).json({ erro: 'Erro ao atualizar tarefa.' });
    }
}

  async function deletarTarefa(req, res) {
    try {
      const tarefaRemovida = await tarefaServices.deletarQuery(req.params.id);
      if (tarefaRemovida === 0) {
        res.status(404).json({ erro: 'Tarefa não encontrada.' });
      } else {
        res.status(204).json({ mensagem: 'Tarefa deletada com sucesso.' });
      }
    } catch (erro) {
      res.status(500).json({ erro: 'Erro ao deletar tarefa.' });
    }
  }

module.exports = { listarTarefas, criarTarefa, atualizarTarefa, deletarTarefa };
