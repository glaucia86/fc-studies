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