const express = require("express");

const app = express();

// Middleware para receber um body em JSON
app.use(express.json());

/*
  GET - Buscar informação dentro do servidor
  POST - Inserir informação no servidor
  PUT - Alterar uma informação no servidor
  PATCH - Alterar uma informação específica no servidor
  DELETE - Deletar informação no servidor
*/

/*
  Tipos de parâmetros:

  Route Params => Identificar um recurso para o buscar/atualizar/deletar
  Query Params => Paginação/Filtro
  Body Params => Os objetos para inserção/alteração (JSON) deve ser informado o tipo para o express
 */

// Gets JSON data from route
app.get("/courses", (request, response) => {
  const query = request.query;

  console.log(query);
  return response.json(["curso 1", "curso 2", "curso 3"]);
});

app.post("/courses", (request, response) => {
  const body = request.body;

  console.log(body);
  return response.json(["curso 1", "curso 2", "curso 3", "curso 4"]);
});

app.put("/courses/:id", (request, response) => {
  const { id } = request.params;

  console.log(id);
  return response.json(["curso 6", "curso 2", "curso 3", "curso 4"]);
});

app.patch("/courses/:id", (request, response) => {
  return response.json(["curso 6", "curso 7", "curso 3", "curso 4"]);
});

app.delete("/courses/:id", (request, response) => {
  return response.json(["curso 6", "curso 7", "curso 4"]);
});

// Initializes application
app.listen(3333);
