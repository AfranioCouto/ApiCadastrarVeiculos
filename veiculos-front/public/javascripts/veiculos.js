// Promise API

/*
     Promise - fetch()
        | 
     pending
     /     \
rejected   fulfilled
catch()    then()
*/

function getAllVeiculos() {
    console.log("=== GET ALL VEICULOS ===");
  
    const endpoint = `http://localhost:8080/veiculos`;
  
    const config = {
      method: "GET",
    };
  
    fetch(endpoint, config)
      .then((res) => res.json())
      .then((veiculos) => {
        document.querySelector("tbody").innerHTML = veiculos
          .map(function (veiculo, index) {
            return `<tr>
                      <th scope="row">${veiculo.placa}</th>
                      <td>${veiculo.marca}</td>
                      <td>${veiculo.modelo}</td>
                      <td>${veiculo.ano}</td>
                      <td>${veiculo.cor}</td>
                  </tr>`;
          })
          .join("");
      })
      .catch(() => console.error("Falha na comunicação"))
      .catch(() => console.error("Falha na comunicação"));
  }
  
  getAllVeiculos();
  