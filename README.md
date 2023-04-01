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

## 💠 Rotas da api

### - Rotas de usuário
   - [x] POST ```/users``` cria um novo usuário
   - [x] POST ```/sessions``` faz a autenticação do usuário
   - [x] PATCH ```/token/refresh``` gera um novo JWT de autenticação para o usuário
   - [x] GET ```/me``` retorna informações do usuário logado
  
### - Rotas de academia
   - [x] POST ```/gyms``` cria uma nova academia
   - [x] GET ```/gyms/search``` busca academias por nome
   - [x] GET ```/gyms/nearby``` busca academias próximas

### - Rotas de Check-in
   - [x] POST ```/gyms/:gymId/check-ins``` cria um novo check-in
   - [x] PATCH ```/check-ins/:checkInId/validate``` valida um check-in
   - [x] GET ```/check-ins/history``` traz informações dos check-ins ja feitos pelo usuário
   - [x] GET ```/check-ins/metrics``` retorna quantos check-ins o usuário ja realizou

## 🔱 Ferramentas utilizadas
 - Node.js com TypeScript
 - Fastify
 - EsLint
 - Vitest
 - Supertest
 - Npm run all
 - Fastify/cookie
 - Fastify/jwt
 - Zod
 - Dayjs
 - Dotenv
 - Prisma
 - Bcryptjs
 - Docker
 - Postgress
