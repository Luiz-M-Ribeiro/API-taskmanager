const db = require('../config/db');

async function listarQuery() {
    const [resultado] = await db.query
    ('SELECT * FROM tarefas');
    return resultado;
}

module.exports = { listarQuery }