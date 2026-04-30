
# 📋 Gerenciador de Tarefas

Aplicação full-stack desenvolvida como solução para o Desafio Técnico, contemplando um CRUD completo de tarefas.

## 🎯 Objetivo

Desenvolver uma aplicação web simples para cadastro e gerenciamento de tarefas, demonstrando conhecimentos em integração front-end e back-end, organização de código e estruturação de banco de dados.

## ✨ Funcionalidades e Escopo Entregue

- **Listagem de tarefas:** Exibição de todas as tarefas cadastradas, com indicativo visual de status (Pendente / Concluída).
- **Criação de tarefas:** Formulário para adicionar novas tarefas.
- **Edição de status:** Opção para marcar uma tarefa como concluída rapidamente.
- **Exclusão de tarefas:** Remoção de tarefas do banco de dados.

## 🚀 Diferenciais Implementados

- ✔️ **Validações básicas:** O front-end bloqueia a criação de tarefas sem título ou descrição.
- ✔️ **Tratamento simples de erros:** Alertas informativos caso haja falha de comunicação com a API.
- ✔️ **Código limpo e bem organizado:** Uso de Standalone Components no Angular e estrutura MVC no ASP.NET.
- ✔️ **Commits semânticos:** Histórico do Git organizado e rastreável.
- ✔️ **Monorepo e Arquivos Ignorados:** Configuração avançada de `.gitignore` para separar o front e o back no mesmo repositório, ignorando binários e lixos do Docker.

## 🛠️ Tecnologias Utilizadas

- **Front-end:** Angular 17+ (Standalone Components, TypeScript, HttpClient)

- **Back-end:** ASP.NET Core Web API (.NET 8, C#)
- **Banco de Dados:** SQL Server (via container Docker)
- **ORM:** Entity Framework Core

---

## ⚙️ Instruções para Execução

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [Node.js e npm](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)
- [Docker](https://www.docker.com/)

### Passo 1: Subindo o Banco de Dados (SQL Server via Docker)

Abra um terminal e execute o comando abaixo para iniciar a instância do banco de dados na porta padrão (1433):

```bash
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Senha123!" -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest
```

### Passo 2: Rodando a API (Back-end)

Navegue até a pasta do back-end, crie as tabelas através das migrations e inicie o servidor:

```bash
cd back-tarefas
dotnet ef database update
dotnet run
```

A API estará acessível via Swagger em: <http://localhost:5044/swagger>.

### Passo 3: Rodando a Aplicação Web (Front-end)

Abra um novo terminal, navegue até a pasta do front-end, instale os pacotes e inicie a aplicação Angular:

```bash
cd front-tarefas
npm install
ng serve
```

Acesse a interface no seu navegador em: <http://localhost:4200>.

