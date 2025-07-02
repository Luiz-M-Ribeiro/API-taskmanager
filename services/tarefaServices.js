const db = require('../config/db');

async function listarQuery() {
    const [resultado] = await db.query
    ('SELECT * FROM tarefas');
    return resultado;
}

async function criarQuery({ titulo, descricao, status, prioridade, dataEntrega}) {
    const query = 'INSERT INTO tarefas (titulo, descricao, status, prioridade, dataEntrega)' + 
    'VALUES (?, ? ,? ,?, ?)';
    await db.query(query, [titulo, descricao, status, prioridade, dataEntrega]);    
}

async function atualizarQuery(id, { titulo, descricao, status, prioridade, dataEntrega}) {
    const query = 'UPDATE tarefas SET titulo = ?, descricao = ?, status = ?, prioridade = ?, dataEntrega = ? ' +
    'WHERE id = ?';
    const [resultado] = await db.query(query, [titulo, descricao, status, prioridade, dataEntrega, id]);
}

async function deletarQuery(id) {
    const query = 'DELETE FROM tarefas WHERE id = ?';
    const [resultado] = await db.query(query, [id]);
    return resultado.affectedRows;    
}

module.exports = { listarQuery, criarQuery, atualizarQuery, deletarQuery };