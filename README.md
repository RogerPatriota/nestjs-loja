
## Projeto de Estudo: NestJS Store CRUD

Este projeto é um estudo prático do framework [NestJS](https://nestjs.com/), onde foi desenvolvido um CRUD simulando uma loja, com gerenciamento de usuários e produtos.

### Sobre o Projeto

O objetivo deste projeto é explorar e praticar os principais conceitos do NestJS, criando uma API RESTful para uma loja fictícia

Todos os dados são mantidos em memória (não há persistência em banco de dados), focando no aprendizado da estrutura e recursos do NestJS.

### Funcionalidades do NestJS Utilizadas

- **Módulos**: Organização do código em módulos (`user` e `product`), facilitando a escalabilidade e manutenção.
- **Controllers**: Definição das rotas e tratamento das requisições HTTP para usuários e produtos.
- **DTOs (Data Transfer Objects)**: Validação e tipagem dos dados de entrada e saída.
- **Pipes Globais**: Uso do `ValidationPipe` global para validação automática dos dados recebidos nas requisições.
- **Validações customizadas**: Implementação de validadores assíncronos para garantir unicidade de e-mail e nome do produto.
- **Injeção de Dependência**: Utilização do sistema de injeção de dependências do NestJS para repositórios e validadores.
- **Decorators**: Uso extensivo de decorators para rotas, validação e injeção de dependências.

### Como rodar o projeto

1. Instale as dependências:

```bash
npm install
```

2. Execute o projeto em modo de desenvolvimento:

```bash
npm run start:dev
```

3. Acesse a API em: [http://localhost:3000](http://localhost:3000)

## Rotas da API

### Usuários (`/user`)

- `GET /user` — Lista todos os usuários
- `POST /user` — Cria um novo usuário
  - Body: `{ name: string, email: string, password: string }`
- `PUT /user/:id` — Atualiza um usuário existente
  - Body: `{ name?: string, email?: string, password?: string }`
- `DELETE /user/:id` — Remove um usuário

### Produtos (`/product`)

- `GET /product` — Lista todos os produtos
- `POST /product` — Cria um novo produto
  - Body: `{ name: string, description: string, price: number, amountAvailable: number }`
- `PUT /product/:id` — Atualiza um produto existente
  - Body: `{ name?: string, description?: string, price?: number, amountAvailable?: number }`
- `DELETE /product/:id` — Remove um produto

---

Este projeto é apenas para fins de estudo e prática com o NestJS.



