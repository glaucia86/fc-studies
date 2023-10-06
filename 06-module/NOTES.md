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

- **Domain**
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

## Visão estratégica

### Context Mapping na Prática

#### Modelagem estratégica / Context Mapping

[![context-mapping.png](https://i.postimg.cc/zXj6qyC3/context-mapping.png)](https://postimg.cc/svMwcD0R)

Diante da imagem acima, podemos até criar um time ou uma Squad para cada contexto.

Agora observe que na imagem temos um relacionamento entre esses dois contextos:

- Vendas de ingressos online
- Vendas de ingressos parceiros

Por que? Porque ambos os contextos tem a mesma finalidade, que é vender ingressos. Mas com objetivos diferentes.
E além do mais esses dois times, podem criar um núcleo de sistema onde os dois usam (Shared). 

Outro ponto a ser notado, no momento em que você for emitir um ingresso, precisará realizar o "Pagamento". Daí teremos um relacionamento entre: "Cliente/Fornecedor". A gente consegue criar um relacionamento de **Upstream** e **Downstream**.

- **Upstream**: É o fluxo de dados que vai para o seu sistema. No caso da imagem, ele é responsável em fornecer os serviços.
- **Downstream**: É o fluxo de dados que sai do seu sistema. No caso da imagem, ele é responsável em consumir os serviços.

Quanto mais "Conformista" é essa relação com um determinado Contexto externo, mais a gente tende a se amarrar em outro sistema. E raramente é algo que você vai conseguir mudar. E isso é muito comum de acontecer. E algo que você pode fazer é: ACL (Anti-Corruption Layer) - Camada de Anti-Corrupção.

O que essa camada faz? Ela é uma camada entre o seu contexto e o contexto externo. Se um dia, você decidir mudar o seu Gateway de Pagamento, você não vai precisar mudar o seu contexto. Você vai precisar mudar apenas a sua camada de Anti-Corrupção. Não precisará trocar o código/lógica da sua aplicação. E, ela vai funcionar como um 'adaptador'. 

### Padrões e starter kit

#### Starter Kit

Há um Starter Kit, disponível no repositório explicando detalhadamente cada um dos padrões de Context Mapping. Você pode conferir **[AQUI](https://github.com/ddd-crew/context-mapping/tree/master)**

[![context-map-cheat-sheet.png](https://i.postimg.cc/Vv5g1Nm0/context-map-cheat-sheet.png)](https://postimg.cc/64Jnft7B)

#### Padrões de Context Mapping

- **Open/ Host Service**: Um contexto delimitado oferece um conjunto definido de serviços que disponibilizam funcionalidades para outros sistemas. Qualquer sistema subsequente pode então implementar sua própria integração. Isso é especialmente útil para requisitos de integração com muitos outros sistemas. Exemplo de APIs públicas.

- **Conformist**: A equipe downstream se conforma ao modelo da equipe upstream. Não há tradução dos modelos. Vincula o modelo de domínio do Conformista ao modelo de outro contexto delimitado.

- **Anti-Corruption Layer (ACL)**: A camada de anticorrupção é uma camada que isola o modelo de um cliente do modelo de outro sistema por meio de tradução. Apenas acopla a camada de integração (ou adaptador) ao modelo de outro contexto delimitado, mas não ao próprio modelo de domínio.

- **Shared Kernel**: Duas equipes compartilham um subconjunto do modelo de domínio, incluindo código e talvez o banco de dados. Exemplos típicos incluem JARs compartilhados, DLLs ou um esquema de banco de dados compartilhado. Equipes com um Kernel Compartilhado frequentemente dependem mutuamente e devem formar uma Parceria.

- **Customer/ Supplier**: Existe uma relação de cliente/fornecedor entre as equipes. A equipe downstream é considerada o cliente. Os requisitos do downstream afetam o planejamento do upstream. Portanto, a equipe downstream ganha alguma influência sobre as prioridades e tarefas da equipe upstream.

- **Partnership**: Uma parceria é uma relação cooperativa entre duas equipes. Essas equipes estabelecem um processo para o planejamento coordenado do desenvolvimento e a gestão conjunta da integração.

- **Published Language**: Uma Linguagem Publicada é uma linguagem compartilhada bem documentada entre Contextos Delimitados que pode ser traduzida para dentro e para fora dessa linguagem. A Linguagem Publicada muitas vezes é combinada com um Serviço de Hospedagem Aberta. Exemplos típicos incluem iCalendar ou vCard.

- **Separate Ways**: Contextos Delimitados e suas equipes correspondentes não têm conexões porque a integração às vezes é muito cara ou leva muito tempo para ser implementada. As equipes optaram por seguir caminhos separados para se concentrarem em suas soluções específicas.

- **Big Ball of Mud**: Uma (parte de um) sistema que está bagunçada devido à mistura de modelos e limites inconsistentes. Não permita que esse modelo ruim se propague para os outros Contextos Delimitados. "Big Ball of Mud" é uma demarcação de baixa qualidade de modelo ou sistema.

#### Team Relationships

- **Mutually Dependent**: Dois artefatos de software ou sistemas em dois contextos delimitados precisam ser entregues juntos para serem bem-sucedidos e funcionarem. Muitas vezes, existe uma ligação próxima e recíproca entre os dados e as funções entre os dois sistemas.

- **Free**: As mudanças em um contexto delimitado não influenciam o sucesso ou o fracasso em outros contextos delimitados. Portanto, não há nenhuma ligação organizacional ou técnica de qualquer tipo entre as equipes.

- **Upstream/Downstream**: As ações de uma equipe upstream influenciarão a contraparte downstream, enquanto o contrário pode não ser verdadeiro. Essa influência pode se aplicar ao código, mas também a fatores menos técnicos, como cronograma ou capacidade de resposta a solicitações externas.