const express = require("express");
const router = express.Router();
const veiculosCtrl = require("../controllers/veiculos");

// Cadastrar um Veículo
router.post("/", veiculosCtrl.createOne);

// Recuperar Todos os Veículos ou filtrar pela "placa"
router.get("/", veiculosCtrl.get);

// Recuperar um Veículo Específico pelo "id"
router.get("/:id", veiculosCtrl.getOne);

// Atualizar um Veículo (Parcial)
router.patch("/:id", veiculosCtrl.changeOne);

// Remover um Veículo
router.delete("/:id", veiculosCtrl.removeOne);

module.exports = router;