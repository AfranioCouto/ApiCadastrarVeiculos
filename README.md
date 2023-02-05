
# Projeto API Cadastro Veiculos

API para realizar cadastro de veículos (CRUD).
"Trabalho Final - PROGRAMAÇÃO WEB III"


## Documentação da API

## Instalação

Instalação das bibliotecas (node_modules):
```
  npm install
```

## Execução

```http
  npm run dev
```


## API Reference



#### Cadastrar um Veículo

```http

  POST /veiculos

  http://localhost:8080/veiculos

```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `placa` | `string` | **Obrigatório**.|
| `marca` | `string` | **Obrigatório**. |
| `modelo` | `string` | **Obrigatório**. |
| `ano` | number | **Obrigatório**. |
| `cor` | `string` | **Obrigatório**. |
| `proprietario` | `string` | **Obrigatório**. |

Exemplo:
```http
{
    "placa": "PWR7475",
    "marca": "Chevrolet",
    "modelo": "Onix 1.0 LT",
    "ano": 2020,
    "cor": "Branco",
    "proprietario": "Mariazinha"
}
```


#### Buscar todos os Veículos

```http

  GET /veiculos

  http://localhost:8080/veiculos
  
```


#### Buscar um Veículo pelo ID

```http

  GET /veiculos/:id

  http://localhost:8080/veiculos/:id
```


#### Buscar um Veículo pela Placa

```http

  GET /veiculos?placa=xxx

  http://localhost:8080/veiculos?placa=xxx
```


#### Atualizar os Dados de um Veículo

```http

  PATH /veiculos/:id

  http://localhost:8080/veiculos/:id
```

  
| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `placa` | `string` | **Não Obrigatório**.|
| `marca` | `string` | **Não Obrigatório**. |
| `modelo` | `string` | **Não Obrigatório**. |
| `ano` | number | **Não Obrigatório**. |
| `cor` | `string` | **Não Obrigatório**. |
| `proprietario` | `string` | **Não Obrigatório**. |

Exemplo:
```http
  http://localhost:8080/veiculos/01GQWXX8XYQTS0NGYX7JZ3REG4
{
    "modelo": "Prisma 1.4 LTZ",
    "cor": "Branco"
}

Será feita a busca do veículo com id = 01GQWXX8XYQTS0NGYX7JZ3REG4 e serão atualizados o modelo e cor.
```


#### Excluir um Veículo

```http

  DELETE /veiculos/:id

  http://localhost:8080/veiculos/:id
```
