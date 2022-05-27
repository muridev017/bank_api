# BANK API

## Desenvolvimento de API em Node.js utilizando a framework express.

### Sobre a API:

A API foi contruída para o codechallenge sugerido pela Digital Republic onde preciso fazer uma API de banco com validações específicas. Necessitando de nome e CPF.
O banco de dados utilizado foi o SQLite, apesar de inicialmente ter usado o My_SQL que era mais seguro para este tipo de API mas estava ficando impossibilitado de fazer algumas validações, onde no SQLite não tive tal problema.


## Ferramentas presentes no trabalho:

<!--ts-->
*SQLite
*Node.Js
*Express
*Heroku


## O que você precisa?

Bom, para utilizar esta API você precisa instalar o GIT, javascript e NodeJS, além do npm e a framework express.
Utilize um editor de código para uma melhor visualização da API, neste projeto foi utilizado o VsCode por exemplo.
Caso não queira instalar muitas coisas a mais na sua máquina, pode usar o deploy que foi feito no site Heroku (link logo abaixo).



##Dependências Gerais:
```js
"dependencies": {
    "consign": "^0.1.6",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.17.2",
    "path": "^0.12.7",
    "sqlite3": "^5.0.2"
  }
```

## Dependências Dev:

```
"devDependencies": {
    "jest": "^27.5.1"
  }
  ```
  
  ## Link Heroku
  
  ````
  https://bank-api-operations.herokuapp.com/
  ````
  
  ## Rotas da API:
  
  (Clientes)
  
  | Método| Rota | Funcionalidade |
  | ------| ---- | -------------- |
  | **GET**| `/customer` |  Busca todos os clientes|
  |**GET**| `/customer/id/{id}` |  Busca cliente por Id |
  |**GET**| `/customer/cpf/{CPF}`| Busca cliente por cpf |
  |**POST**| `/customer` | Cadastra novo cliente |
  |**PUT**| `/customer/{id}`| Altera dados do cliente|
  |**DELETE**| `/customer/{id}`| Exclui cliente da API|
  
  (Transações bancárias(Saque, Depósito, Transferência))
  
  | Método| Rota | Funcionalidade |
  |-------| ---- | -------------- |
  |**PUT**| `/transations/bankdraft`| Saque|
  |**PUT**| `/transations/deposit`| Depósito |
  |**PUT**| `/transations/transfer`| Transferência|
  
  ## O que fazer agora?
  Muito bem, com essas informações, busque um API client em que lhe ajuda a ver como estão as funcionalidades da API no back-end, neste projeto foi utilizado o Postman, por exemplo.
  
  E Com isso, coloque estes endereços de rota no link do Heroku, ou use na sua máquina com o git clone do gitHub, instale as dependências citadas acima. Rode o servidor no terminal local com 'npm start' e faça o mesmo.
  
  ## No API Client:
  
  ## Objetos necessários para:
  Cadastrar ou alterar Cliente
  ````
  {
"CPF": "00000000000",
"FIRST_NAME": "José",
"LAST_NAME": "Viagrinha",
"AGENCY": "0000",
"COUNT_NUMBER": "0000"
}
  ````
  Saque ou depósito:
  ````
  {
    "CPF": "00000000000", 
    "VALUE": "1000"
}
````

Transferência:
````
{
    "ORIGIN": "00000000000",
    "DESTINATION": "00000000001",
    "VALUE": "1000"
}
````

As validações necessárias para o desafio foram colocadas e testadas.

## Author

- [Murilo Rodrigues](https://github.com/muridev017)
- <a href= "https://www.linkedin.com/in/murilorodrigueswebdev/"> LinkedIn <a/>
  
  
  
  
  
