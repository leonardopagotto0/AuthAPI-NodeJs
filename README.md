# AuthAPI-NodeJs
User authentication RESTfull API with NodeJS, MongoDB and JWT

# Setup
Primeiro faça o clone do repositório aonde você desejar:
```console
    git clone https://github.com/leonardopagotto0/AuthAPI-NodeJs.git
```
Cole o seguinte comando no terminal para realizar o download das dependencias:
```console
    npm install
```
Crie um arquivo com a seguinte extensão <code>.env</code> e insira as suas credenciais em relação a cada key:
```console
    HTTP_PORT=
    JWT_SECRET=
    MONGO_URL=
    DATA_BASE_NAME=
```

# Run
E pronto, agora basta rodar a API com um dos seguintes comandos no console:
```console
    node ./server.js
```

```console
    npm start
```

# Endpoints

``` 
    auth/login - POST
    auth/register - POST
    token/validate - POST
    account/ - GET
    account/password - PUT
    account/ - DELETE
```

<code>auth/login</code> request body:
```json
{
    "email": "",
    "password": ""
}
```
<code>auth/register</code> request body:
```json
{
    "email": "",
    "name": "",
    "password": ""
}
```
<code>token/validate</code> request body:
```json
{
    "token": ""
}
```
