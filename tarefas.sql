-- Script SQL de criação da tabela tarefas
CREATE DATABASE IF NOT EXISTS taskmanager;
USE taskmanager;

CREATE TABLE IF NOT EXISTS tarefas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  descricao TEXT,
  status ENUM('Pendente', 'Em andamento', 'Concluída') NOT NULL DEFAULT 'Pendente',
  prioridade ENUM('Baixa', 'Média', 'Alta') NOT NULL DEFAULT 'Média',
  data_criacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  data_entrega DATE NOT NULL
);

-- Dados fictícios
INSERT INTO tarefas (titulo, descricao, status, prioridade, data_entrega)
VALUES
('Criar API', 'Desenvolver a API com Node.js', 'Pendente', 'Alta', '2025-06-20'),
('Testar aplicação', 'Executar testes manuais', 'Em andamento', 'Média', '2025-06-22');
