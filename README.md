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

4º - Start na aplicação
```
npm run dev
```

## 🧪 Testes

Para verificar com precisão a integridade de toda a aplicação, foram criados testes unitários e E2E

### Rodar os testes uinitários:
```
npm run test
```

### Rodar os testes E2E:
 - modo normal:
 ```
 npm run test:e2e
 ```
 
 - modo watch:
 ```
 npm run test:e2e:watch
 ```
> **Note**                
> Os testes E2E executam em um ambiente de banco de dados diferente para cada switch de testes

## 💠
