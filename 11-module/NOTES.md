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

### Sistemas monolíticos modulares

- DDD é um ponto de partida: pois com DDD tudo é contexto

Ex.:
- Catálogo
  - [user]

- Carrinho
  - [user]

- Checkout
  - [user]

- Pagamentos
  - [cliente]

- Suporte ao cliente
  - [cliente]

- Marketing
  - [lead]

- Programa de Pontos
  - [beneficiário]

- Lista de casamento
  - [convidado]

"Cada contexto pode virar um módulo no seu sistema monolítico. E cada módulo se conecta a uma base de dados."

![alt text](./images/modular-monolito.png)

Assim sendo os sistemas monolíticos modulares são:

- Módulos quebrados em 'bounded contexts'
- Conversam através de contratos e facades
- Entidades podem ser 'duplicadas' tendo apenas os atributos necessários
- Equipes especializadas por módulos
- Alta coesão: o que muda junto, permanece junto1

### Segregação de banco de dados

Aqui é a representação de um sistema monolítico modular com bancos de dados segregados.

![alt text](./images/segregration-monolith.png)

Cada módulo pode ter seu próprio banco de dados. Isso é uma forma de garantir que cada módulo tenha sua própria responsabilidade e não se misture com os outros módulos.

Por que isso faz sentido?

Uma das coisas que causa acoplamento é o banco de dados. Se você tem um banco de dados compartilhado, você tem um acoplamento entre os módulos. Se você tem um banco de dados para cada módulo, você tem uma forma de garantir que cada módulo tenha sua própria responsabilidade e não se misture com os outros módulos.

### E os Microsserviços?

> "Se é para segregar tanto, não é melhor já trabalhar com microsserviços?"

Talvez você esteja se perguntando isso. E a resposta é: 

- Um único deploy
- Única operação
- Observabilidade simplificada
- Sistemas se comunicando internamente
- Única linguagem. Menos governança

### Shared Kernel

Shared Kernel é um núcleo compartilhado. É um conjunto de classes, interfaces, funções, etc. que são compartilhadas entre dois ou mais contextos delimitados.

## Estrutura do Projeto

### ContextMap

![alt text](./images/code-store.png)

### Comunicação entre módulos

Você evitará acomplamento entre módulos através de contratos e facades.

![alt text](./images/communication-modules.png)

### Comunicação interna vs externa

A comunicação interna com a externa acontecerá por meio de APIs, numa camada de Controllers.

![alt text](./images/internal-vs-external.png)

## Iniciando projeto exemplo

### Criando pacote shared

**[Code Developed](https://github.com/glaucia86/fc-studies-monolith-ts/commit/0a54f3b0639da16cdb85c42d4632c42bd3c64dba)**


### Criando entidade Product

**[Code Developed](https://github.com/glaucia86/fc-studies-monolith-ts/commit/95991aba88a5af92d1da3c9892d07721811c76fe)**

### Criando teste para nosso usecase

**[Code Developed](https://github.com/glaucia86/fc-studies-monolith-ts/commit/c8f729621bd5aaf6825dab65bc090a2ae7631b3a)**

### Desenvolvendo caso de uso

**[Code Developed](https://github.com/glaucia86/fc-studies-monolith-ts/commit/89bd613602df0349b9fa7c43941d56534a0ddcb5)**

### Criando Teste do `ProductRepository`

**[Code Developed](https://github.com/glaucia86/fc-studies-monolith-ts/commit/d0e07cc093007d30dd69c302785cca85b401041c)**

### Implementando `Create Product`

**[Code Developed](https://github.com/glaucia86/fc-studies-monolith-ts/commit/bced91ce0104a9604c12c316d454ab4bdabd50a2)**

### Implementando find a product

**[Code Developed](https://github.com/glaucia86/fc-studies-monolith-ts/commit/c8bc68d529ee4fc4c797952fe3ab355f5b03517b)**

**[Code Developed](https://github.com/glaucia86/fc-studies-monolith-ts/commit/cfd52cc9e0cdf35c1761d3ef9a2c9436714340cb)**

**[Code Developed](https://github.com/glaucia86/fc-studies-monolith-ts/commit/35ba53a9bb5e873b90ecffddb48e792628daaf32)**

### Criando interface da nossa Facade

**[Code Developed](https://github.com/glaucia86/fc-studies-monolith-ts/commit/df96761f3358f33794dca538a78199866da0764a)**

### Implementando Facade

**[Code Developed](https://github.com/glaucia86/fc-studies-monolith-ts/commit/f9f45e1e3c525784be0516acf401f126a17a017a)**

### Testando nossa Facade

**[Code Developed](https://github.com/glaucia86/fc-studies-monolith-ts/commit/5e014b4d1f3bf36dac77af37fd4e4ea3e984f5e3)**

**[Code Developed](https://github.com/glaucia86/fc-studies-monolith-ts/commit/9aeb7b089f76e6cf979011e29bff67cd06665eac)**

### Implementando Factory para nossa Facade

**[Code Developed](https://github.com/glaucia86/fc-studies-monolith-ts/commit/ddd20d3beeb655390988331dd2bdb78bff592946)**

### Extra - Implementando `check-stock` use case

**[Code Developed](https://github.com/glaucia86/fc-studies-monolith-ts/commit/ea9c0b1512ee367c09661fe1e1df67d13bad6042)**

## Store Catalog

### Criando teste para checar estoque

**[Code Developed](https://github.com/glaucia86/fc-studies-monolith-ts/commit/ea9c0b1512ee367c09661fe1e1df67d13bad6042)**

### Implementando `CheckStockUseCase`

**[Code Developed](https://github.com/glaucia86/fc-studies-monolith-ts/commit/ea9c0b1512ee367c09661fe1e1df67d13bad6042)**

### Testando facade para verificação de stock

**[Code Developed](https://github.com/glaucia86/fc-studies-monolith-ts/commit/ea9c0b1512ee367c09661fe1e1df67d13bad6042)**

### Criando entidade Product

**[Code Developed](https://github.com/glaucia86/fc-studies-monolith-ts/commit/ea9c0b1512ee367c09661fe1e1df67d13bad6042)**

### Implementando teste do `FindAllProducts UseCase`

**[Code Developed]()**

### Implementando `FindAllProducts UseCase`

**[Code Developed]()**