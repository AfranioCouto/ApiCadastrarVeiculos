const db = require("../infra/connection");
const { ulid } = require("ulid");

class Veiculo {
  create(data, callback) {
    const { placa, marca, modelo, ano, cor, proprietario } = data;

    const sql = `INSERT INTO veiculos
                  (id, placa, marca, modelo, ano, cor, proprietario) 
                  VALUES 
                  ('${ulid()}', '${placa}', '${marca}', '${modelo}', '${ano}', '${cor}', '${proprietario}')`;

    db.run(sql, callback);
  }

  findAll(callback) {
    const sql = `SELECT * FROM veiculos`;
    db.all(sql, callback);
  }

  findOnePlaca(placa, callback) {
    const sql = `SELECT * FROM veiculos WHERE placa = '${placa}'`;
    db.get(sql, callback);
  }

  findOneId(id, callback) {
    const sql = `SELECT * FROM veiculos WHERE id = '${id}'`;
    db.get(sql, callback);
  }

  deleteOne(id, callback) {
    const sql = `DELETE FROM veiculos WHERE id = '${id}'`;
    db.run(sql, callback);
  }

  updatePartial(id, data, callback) {
    let veiculoData = Object.entries(data);
    let fields = [];
    for (let i = 0; i < veiculoData.length; i++) {
      fields.push(`${veiculoData[i][0]} = '${veiculoData[i][1]}'`);
    }

    const sql = `UPDATE veiculos SET 
                    ${fields.join(",")}
                WHERE
                    id = '${id}'`;

    db.run(sql, callback);
  }
}

module.exports = new Veiculo();