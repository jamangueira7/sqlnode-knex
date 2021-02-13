<h1 align="center">
    <img alt="Rocketseat" title="Rocketseat" src=".github/rocketseat.png" width="60px" />
</h1>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000" alt="PRs welcome!" />

</p>

<br>

## API Rest - Masterclass #13

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/) - v14.4.0
- [Postgres](https://www.postgresql.org/)
- [Docker](https://www.docker.com/) - 19.03.8
- [Yarn](https://yarnpkg.com/) - 1.22.4
- [Npm](https://www.npmjs.com/) - 6.14.5
- [Next](https://nextjs.org/docs) - 0.21.17


## 💻 Projeto

Projeto NodeJS que cadastra usuarios e projetos com Next no Postgres.

Esse projeto foi feito com a aula da Rocketseat Masterclass #13 [link](https://www.youtube.com/watch?v=U7GjS3FuSkA).

## 🚀 Como Rodar

- Clone o projeto.
- Rodar o Postgres com docker: docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
- docker ps para ver se o Postgres está rodando no Docker.
- Caso não esteja "docker start gostack_postgres" para rodar.
- Criar banco knex_test.
- Entre na pasta do projeto e rode o comando "npm install" para instalar as dependências.
- Rode npx knex migrate:up para executar as migrations;
- Rode npx knex seed:run para executar as seeds e gerar dados;
- Rode npm start para iniciar o servidor.
- Para testar a API acesse localhost:3333.

## 👩🏿‍💻 Rotas

- **`POST /users`**: Rota para cadastrar usuarios;
Envio
```
{
    "username": "Aline"
}
```

- **`GET /users`**: Rota para listar usuarios;
Retorno
```
[
    {
        "id": 1,
        "username": "João",
        "created_at": "2021-02-13T22:58:47.046Z",
        "updated_at": "2021-02-13T22:58:47.046Z"
    },
    {
        "id": 2,
        "username": "Carlos",
        "created_at": "2021-02-13T22:58:47.046Z",
        "updated_at": "2021-02-13T22:58:47.046Z"
    },
]
```

- **`PUT /users/:userId`**: Rota para alterar usuarios;
Envio
```
{
    "username": "Bruna"
}
```

- **`DELETE /users/:userId`**: Rota para listagem de endereços de usuarios;
Retorno
```
{
    "id": 2,
    "name": "João Mangueira",
    "email": "joao@joao.com",
    "createdAt": "2021-02-12T22:03:36.431Z",
    "updatedAt": "2021-02-12T22:03:36.431Z",
    "addresses": [
        {
            "id": 1,
            "zipcode": "00125-555",
            "street": "Rua X",
            "number": 178,
            "createdAt": "2021-02-12T22:39:09.321Z",
            "updatedAt": "2021-02-12T22:39:09.321Z",
            "user_id": 2
        },
        {
            "id": 2,
            "zipcode": "00125-000",
            "street": "Rua Y",
            "number": 236,
            "createdAt": "2021-02-12T22:43:18.827Z",
            "updatedAt": "2021-02-12T22:43:18.827Z",
            "user_id": 2
        }
    ]
}
```
- **`POST /users/:userId/techs`**: Rota para cadastros de tecnologias de usuarios;
Envio
```
{
    "name" :"React"
}
```
 
 Retorno
 ```
{
    "id": 1,
    "name": "React",
    "updatedAt": "2021-02-12T23:09:29.521Z",
    "createdAt": "2021-02-12T23:09:29.521Z"
}
```

- **`DELETE /users/:userId/techs`**: Rota para exclusão de tecnologias de usuarios;
Envio
```
{
    "name" :"React"
}
```
 
 Retorno
 ```
{
    "msg": "Tecnologia deletada com sucesso!"
}
```

- **`GET /users/:userId/techs`**: Rota para listagem de tecnologias de usuarios;
 
Retorno
 ```
{
    "id": 2,
    "name": "João Mangueira",
    "email": "joao@joao.com",
    "createdAt": "2021-02-12T22:03:36.431Z",
    "updatedAt": "2021-02-12T22:03:36.431Z",
    "techs": [
        {
            "id": 1,
            "name": "React",
            "createdAt": "2021-02-12T23:09:29.521Z",
            "updatedAt": "2021-02-12T23:09:29.521Z"
        },
        {
            "id": 2,
            "name": "JavaScript",
            "createdAt": "2021-02-12T23:16:17.942Z",
            "updatedAt": "2021-02-12T23:16:17.942Z"
        }
    ]
}
```

- **`GET /report`**: Rota para listagem relatorio;
 
Retorno
 ```
[
    {
        "name": "João Mangueira",
        "email": "joao@joao.com",
        "addresses": [
            {
                "id": 1,
                "zipcode": "00125-555",
                "street": "Rua X",
                "number": 178,
                "createdAt": "2021-02-12T22:39:09.321Z",
                "updatedAt": "2021-02-12T22:39:09.321Z",
                "user_id": 2
            }
        ],
        "techs": [
            {
                "id": 1,
                "name": "React",
                "createdAt": "2021-02-12T23:09:29.521Z",
                "updatedAt": "2021-02-12T23:09:29.521Z",
                "user_techs": {
                    "createdAt": "2021-02-12T23:09:29.539Z",
                    "updatedAt": "2021-02-12T23:09:29.539Z",
                    "user_id": 2,
                    "tech_id": 1
                }
            }
        ]
    },
    {
        "name": "João Mangueira 6",
        "email": "joao6@joao.com",
        "addresses": [
            {
                "id": 7,
                "zipcode": "00125-111",
                "street": "Rua X",
                "number": 47,
                "createdAt": "2021-02-12T23:38:09.744Z",
                "updatedAt": "2021-02-12T23:38:09.744Z",
                "user_id": 6
            }
        ],
        "techs": []
    }
]
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

