# Teste Accenture

Criar um aplicativo backend que irá expor uma API RESTful de criação de sign up/sign
in.

## Installation

Use the package manager [nodejs](https://nodejs.org/en/) to install the test.

```bash
npm install
```

## Usage

```bash
node src/index
```

OU

https://warm-basin-62634.herokuapp.com/

### Rotas

Rotas de autenticação de usuário

##### /auth/sign-up

Envie um JSON como este para autenticação:
```json
{
    "nome": "string",
    "email": "string",
    "senha": "senha",
    "telefones": [
    {
    "numero": "123456789",
    "ddd": "11"
    }
                ]   
}
```
##### /auth/sign-in

Envie um JSON como este para logar:
```json
{
    "email": "string",
    "senha": "******"
}
```
##### /usuario

Enviar o token do user.

