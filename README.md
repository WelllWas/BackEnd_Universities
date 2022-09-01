Para rodar:

• Rodar "npm install" no terminal;

• Rodar "npm run dev" no terminal;

• Caso esteja rodando no VS Code, pode ser instalado a extensão REST Client, e utilizar as rotas criadas no arquivo request.rest como base, ou, caso seja utilizado o Postman, poderá usar como base as APIs referênciadas a seguir;

• A API referente a PARTE 1, para preencher o banco com as universidades da API fornecida é a requisição: POST http://localhost:3000/universities/register

• As APIs da PARTE 2 são as seguintes:

GET http://localhost:3000/universities - Receber todas as universidades

GET http://localhost:3000/universities?country=Argentina - Receber todas as universidades com o país passado.

GET http://localhost:3000/universities?page=2 - Receber todas as universidades com a página passada.

GET http://localhost:3000/universities?country=Argentina&page=2 - Receber todas as universidades com o país e página passada.

GET http://localhost:3000/universities/630f4a1e13d9fc986ec366fd - Receber a universidade com o Id passado.

POST http://localhost:3000/universities - Cadastrar a universidade com os parâmetros passados.
{
    "alpha_two_code": String,
    "web_pages": Array,
    "name": String,
    "country": String,
    "domains": Array,
    "state_province": String
}

PUT http://localhost:3000/universities/:id - Alterar a universidade com o id passado na requisição e colocando os valores passados no body.

{
    "web_pages": Array,
    "name": String,
    "domains": Array
}

DELETE http://localhost:3000/universities/:id - Deletar a universidade com o id passado na requisição.


• APIs úteis:

DELETE http://localhost:3000/universitiesDeleteAll - apagar todos os documents caso queira fazer os fluxos novamente.
