// Importando Módulos (Dependências)
const { PORT } = require("dotenv").config().parsed;
const express = require("express");
const app = express();

// Habilitando CORS
const cors = require("cors");
app.use(cors());

// Habilitando JSON Parser
app.use(express.json());

// Mapeando as Rotas
const veiculos = require("../routes/veiculos");
app.use("/veiculos", veiculos);

// Iniciando a Aplicação
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}...`));