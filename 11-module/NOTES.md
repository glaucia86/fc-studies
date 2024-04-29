# Module 11 - Sistemas Monolíticos

## Conceitos Básicos

### Introdução

### As polêmicas por trás dos monolitos

#### O que é uma aplicação monolitica?
  - Aplicações "tradicionais"
  - "Tudo dentro de um único projeto"
  - Unidade de deployment

#### Polêmica por trás das aplicações monolíticas

- Aplicações da década passada
- Ultrapaassadas
- Não escalam
- Impedem o crescimento do negócio
- Alto acoplamento

Grande parte desses argumentos são FALSOS!

### Monolito em primeiro

#### Quando utilizar monolitos pode ser uma boa

- Novos projetos onde o modelo de negócio não está claro
- Instabilidade no core do negócio
- Evitar complexidade no processo de deploy
- Evitar complexidade na operação

> Artigo do Martin Fowler: Monolith First - https://martinfowler.com/bliki/MonolithFirst.html. Nesse artigo, Martin Fowler fala sobre a importância de começar com um monolito e depois evoluir para microserviços.
> "you shouldn't start a new project with microservices, even if you're sure your application will be big enough to make it worthwhile..." ou traduzindo: "você não deve começar um novo projeto com microserviços, mesmo que você tenha certeza de que sua aplicação será grande o suficiente para valer a pena..."

### Tipos de monolitos

- **Single process**: Todo o código é executado em um único processo
- **Monolitos Distribuídos**: Código é executado em diferentes processos
- **Black Box**: Código é executado em um único processo, mas com diferentes partes

> Newman, Sam. Monolith to Microservices (p. 21) O'Reilly Media. Edição do Kindle.

#### Single process

![alt text](./images/single-process.png)

- Alto acoplamento
- Modular
- Modular com bancos de dados segregados

### Sistemas monoliticos acoplados

Vamos pensar em longo prazo com 'User'

- User
  - Dados pessoais
  - Endereços
  - Cartões de crédito
  - Tickets de suporte
  - Compras
  - Carrinho abandonado
  - Devoluções
  - Financiamento
  - Indicações
  - Reclamações
  - Email mkt
  - Campanhas
  - Favoritos
  - Lista de casamento
  - Histórico de login
  - Lista de preferência de emails
  - Avaliação de produtos
  - CRM
  - Propostas
  - Lances / Leilão
  - Cartão de Pontos

#### Principais problemas com essa abordagem

- Não existe contexto
- Entidades que relacionam
- Não há divisão. Tudo faz parte de tudo. Tudo grudado em tudo.
- Efeitos colaterais indesejados

Precisamos evitar isso!