# 🏋 Gym Pass Api 🏋

Api de uma aplicação Gym Pass utilizando Node.js com Fastify feita durante curso Ignite da Rocketseat.

### Patterns e conceitos utilizados durante o desenvolvimento:
 - Factory Pattern
 - Repository Pattern
 - TDD (Test Driven Development)
 - In Memory Test Database
 - Mocking
 - Test Environment
 
## ▶️ Iniciar aplicação 

1º - Com a aplicação ja na sua máquina, rode na raíz:
```
npm install
```

2º - Subir um container docker que utilize a imagem [bitnami/postgresql](https://hub.docker.com/r/bitnami/postgresql)
```
docker compose up -d
```

3º - Iniciar o banco de dados do arquivo schema.prisma
```
npx prisma migrate dev
```



 
## Testes

