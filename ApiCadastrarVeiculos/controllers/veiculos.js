const Veiculo = require("../dao/veiculo");

exports.createOne = (req, res) => {
    if (!req.body.placa || !req.body.marca || !req.body.modelo || !req.body.ano || !req.body.cor || !req.body.proprietario) {
      return res.status(400).json({Msg: "O preenchimento de todos os campos é obrigatório."});
    } else {
  Veiculo.create(req.body, (err) => {
    if (!err) {
      return res.status(201).json({Msg: "Veículo cadastrado com sucesso."});
    } else {
      return res.status(400).json({ err });
    }
  });
}
};

exports.get = (req, res) => {
  const placa = req.query.placa;
  if (!placa){  
    Veiculo.findAll((err, data) => res.json(data));
  } else {
    Veiculo.findOnePlaca(placa, (err, data) => {
      if (data) {
        return res.status(200).json(data);
      } else {
        return res.status(404).json({ errMsg: "Veículo não encontrado." });
      }
    });
  }
};

exports.getOne = (req, res) => {
  Veiculo.findOneId(req.params.id, (err, data) => {
    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(404).json({ errMsg: "Veículo não encontrado." });
    }
  });
};

exports.changeOne = (req, res) => {
  Veiculo.findOneId(req.params.id, (err, data) => {
    if (!data) {
      return res.status(404).json({ errMsg: "Veículo não encontrado." });
    } else {
      Veiculo.updatePartial(req.params.id, req.body, (err) => {
        if (err) {
          return res.status(400).json({ msg: err });
        } else {
          return res.status(201).json({Msg: "Veículo atualizado com sucesso."});
        }
      });
    }
});
};

exports.removeOne = (req, res) => {
  Veiculo.findOneId(req.params.id, (err, data) => {
    if (!data) {
      return res.status(404).json({ errMsg: "Veículo não encontrado." });
    } else {
      Veiculo.deleteOne(req.params.id, (err) => {
        if (!err) return res.status(201).json({Msg: "Veículo deletado com sucesso."});
      });
    }
  });
};