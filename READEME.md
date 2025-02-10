# 📝 Documentação

## Visão Geral
Esta aplicação é um website para ver catálogo e alugar livros on-line.

 - [Deploy projeto](https://snowmanlabs.netlify.app/) 
 - [Deploy Storybook](https://storybooksnowmanlabs.netlify.app/?path=/story/components-common-alert--sucesso-alerta-portugu%C3%AAs)  

## :rocket:  Tecnologias utilizadas
Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Vue](https://vuejs.org/) (Interface)
- [Pinia](https://pinia.vuejs.org/) (Gerenciamento de Estado)
- [TypeScript](https://www.typescriptlang.org/) (Tipagem estática)
- [Vitest](https://vitest.dev/) Teste unitários
- [Vue I18n](https://vue-i18n.intlify.dev/) Biblioteca para internacionalização

## :page_facing_up: Componentes Principais


### 1 - Gerenciamento de Estado

A aplicação utiliza Pinia para gerenciamento de estado com dois stores principais:
-  ```bookStore:``` Gerencia o catálogo de livros e a disponibilidade 
- ```rentalStore:``` Responsável pelas operações de aluguel de livros


Usa uma função handleAuthError para tratar todos os erros de forma consistente, atualizando o estado de erro.


### 2 - API Mock
- ```mockApiService.ts:``` simula chamadas de API do backend com os seguintes endpoints:

- getBooks(): Recupera todos os livros
- getBookById(id): Obtém um livro específico
- rentBook(bookId, userId): Processa o aluguel de um livro
- returnBook(rentalId): Trata a devolução de livros

### 3 - Internacionalização (i18n)

A aplicação suporta funcionalidade multi-idioma usando Vue I18n com uma implementação personalizada de alternância de idioma.
- ```useLanguageToggle.ts:``` Oferece uma forma programática de alternar entre idiomas
Alterna ciclicamente entre os idiomas disponíveis em um array predefinido

### 4 - Components
-  ```BookCard.vue:```  Exibe informações individuais do livro 
-  ```Alert.vue:``` Exibe notificações com diferentes estados (sucesso, erro, aviso)
-  ```Modal.vue:``` Gerencia modal de confirmação
-  ```Header.vue:``` Navegação e seleção de idioma

### 4 - Views
-  ```CatalogView.vue:```  Página principal de listagem de livros 
-  ```BookDetailsView.vue:``` Informações detalhadas do livro
-  ``` Rental.vue:```  Histórico de aluguéis do usuário

## 💾 Instalação

Instale todas as dependências do projeto

```
npm install
```

Rode a aplicação local

```
npm run dev
```

Rodar todos os teste unitários 
```
npm run test:unit
```

Rodar Storybook 
```
npm run storybook
```

Produção 
```
npm run build
```