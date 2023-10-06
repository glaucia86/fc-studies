# Domain Driven Design

## Introdução

### Ponto de Partida do DDD

#### O que é DDD?

É uma forma de desenvolver software com o foco no coração da aplicação - o que chamamos de domínio - tendo o objetivo de entender suas regras, processos e complexidades, separando-as assim de outros pontos complexos que normalmente são adicionados durante o processo de desenvolvimento.

#### De onde surgiu o DDD?

O DDD foi criado por Eric Evans em seu livro Domain-Driven Design: Tackling Complexity in the Heart of Software, publicado em 2003.

Livros Recomendados:

- Domain-Driven Design: Tackling Complexity in the Heart of Software - Eric Evans
- Implementing Domain-Driven Design - Vaughn Vernon
- Domain-Driven Design Distilled - Vaughn Vernon
- Domain-Driven Design Reference - Eric Evans

### Complexidade de um software

- DDD é e deve ser aplicado para casos de projetos de software complexos, onde a complexidade é definida como um conjunto de regras de negócio que são difíceis de serem entendidas e implementadas.
- Grandes projetos possuem muitas áreas, muitas regras de negócio, muitas pessoas com diferentes visões em diferentes contextos.
- Não há como utilizar técnicas avançadas em projetos de alta complexidade sem antes entender o domínio do problema.
- Grande parte da complexidade desse tipo de software não vem da tecnologia, mas sim da comunicação, separação de contextos, entendimento do negócio por diversos ângulos.
- Pessoas.

### Como DDD pode ajudar

- Entender com profundidade o domínio e subdomínios da aplicação.
- Ter uma linguagem universal (linguagem ubíqua) entre todos os envolvidos no projeto.
- Criar o design estratégico utilizando Bound Contexts.
- Criar o design tático para conseguir mapear e agregar as entidades e objetos de valor da aplicação, bem como os eventos de domínio.
- Clareza do que pe complexidade de negócio e complexidade técnica.

### Resumindo

"In short, DDD is primarily about modeling a Ubiquitous Language in an explicity Bounded Context." ~ Vaughn Vernon 

## Domínios, subdomínios e contextos

### Domínio vs subdomínio

- **Domain **
  - Conjunto de regras de negócio que são difíceis de serem entendidas e implementadas. 

  - **Core Domain**
    - Conjunto de regras de negócio que são essenciais para o   negócio.
    - Coração do negócio.
    - Diferencial competitivo da empresa.
    - Exemplo: Uber - `Sistema de localização de motoristas`

  - **Support Domain**
    - Conjunto de regras de negócio que são importantes para o  negócio, mas não são essenciais.
    - Não são o foco da empresa, mas são necessárias para o   funcionamento do negócio.
    - Apoiam o domínio
    - Faz a operação do domínio acontecer. 
    - Exemplo: Uber - `Sistema de pagamento`

  - **Generic Domain**
    - Conjunto de regras de negócio que são genéricas e não são essenciais para o negócio.
    - Software auxiliares
    - Sem diferencial competitivo
    - Exemplo: Uber - `Sistema de cadastro de usuários`

### Espaço do problema vs espaço da solução

[![test-drawio.png](https://i.postimg.cc/WpMSsz1v/test-drawio.png)](https://postimg.cc/8szLH1vK)

### O que é um contexto delimitado?

#### Bounded Contexts

"Um Bounded Context é uma fronteira explícita onde um modelo de domínio existe. Dentro da fronteira, todos os termos e frases da linguagem ubíqua possuem significado específico, e o modelo reflete a linguagem com exatidão." ~ Vaughn Vernon - Implementing Domain-Driven Design

Então resumindo: _É uma fronteira lógica que delimita um conjunto de regras de negócio._

### Contexto é rei

Quando temos duas palavras (ou dois contextos) iguais, mas com objetivos diferentes, você está dentro de um contexto delimitado.

Vejamos um exemplo abaixo onde o contexto é "Ticket":

Você terá que modelirizar o contexto de acordo com o que ele representa, ou seja, o contexto de "Ticket" dentro do contexto de "Venda" é diferente do contexto de "Ticket" dentro do contexto de "Suporte".

[![contexto-rei.png](https://i.postimg.cc/PJPRryT4/contexto-rei.png)](https://postimg.cc/T5v9tryL)

### Elementos transversais

Muitas das vezes quando estamos em contextos delimitados diferentes, esses contextos acabam se conversando. Seja entre: entidades, elementos que acabam sendo transversais, que estão por todos os lados, mas em perspectivas diferentes.

Vejamos um exemplo na imagem abaixo com o contexto: "Cliente" é o mesmo. Mas que estão em contextos diferentes.

[![context-rei-01.png](https://i.postimg.cc/VkpM3FVw/context-rei-01.png)](https://postimg.cc/ZWPCN6ms)











