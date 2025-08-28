# Module 12 - Arquitetura baseada em Microsserviços

## Conceitos básicos

- O que são microsserviços?

São aplicações comuns, mas que são divididas em serviços menores, que se comunicam entre si através de APIs.

Os microsserviços têm objetivos bem definidos. O grande ponto é que devemos nos ligar é que ter objetivos bem definidos, é que conforme a solução vai crescendo, os microsserviços começam a ficar cada vez maior, e quando isso começa a acontecer, é quando os objetivos são bem definidos, eles se quebram em outros microsserviços menores, e assim por diante.

Outro ponto muito importante sobre microsserviços é que ele faz parte de um ecossistema. Não tem sentido de criar um microsserviço isolado, ele sempre vai fazer parte de um ecossistema maior, e esse ecossistema é que vai dar sentido a existência daquele microsserviço. Eles tendem a cumprir ou participar de um contexto maior. 

Outra nota importante, eles são independentes, ou seja, cada microsserviço pode ser desenvolvido em uma linguagem diferente, com um banco de dados diferente, com um time diferente, e assim por diante. Cada um tem o seu banco de dados. 

E, por último eles se comunicam o tempo todo. Quando falamos de microsserviços, estamos falando de sistemas que irão se comunicar. 

## Microsserviços vs Monolíticos

- Quais as principais diferenças entre microsserviços e monolíticos?

Uma das características são os objetivos e domínios bem definidos. Nos microsserviços temos os objetivos bem definidos, e no monolítico temos todos os contextos dentro de um mesmo sistema.

Quando falamos de microsserviços estamos falando de diferentes linguagens de programação e diferentes tecnologias. Em contra partida do monolítico, temos uma única linguagem de programação e uma única tecnologia.

O processo de deploy também é diferente. Nos microsserviços temos deploys independentes, e tendo assim menos risco, enquanto no monolítico temos um único deploy.

Na parte de organização dos times, nos microsserviços temos times pequenos e independentes, e no monolítico temos um time grande e interdependente.

Nem sempre você vai precisar iniciar a sua aplicação com microsserviços. Muitas vezes, o ideal é iniciar com um monolítico, e quando a aplicação começar a crescer, você pode ir quebrando esse monolítico em microsserviços.

## Quando utilizar microsserviços

Quando se está iniciando um novo projeto, vale mais a pena iniciar com um monolítico, e conforme o projeto for crescendo, ir quebrando ele em microsserviços. Iniciar com microsserviços, você tem que ter muita certeza do mercado e do que você está fazendo.

Quando você tem um time que conhece bem o produto e as regras de negócio, e tem experiência com microsserviços, aí sim vale a pena iniciar com microsserviços.

Quando você quer escalar times, você vai trabalhar com microsserviços, pois você vai poder separar esses times em microsserviços diferentes, e assim cada time vai poder trabalhar de forma independente.

Quando você tem contextos bem definidos ou áreas de negócio bem definidas, você pode trabalhar com microsserviços, pois cada área de negócio pode ser um microsserviço diferente.

Quando você tem maturidade nos processos de entrega contínua, você estará preparado para trabalhar com microsserviços, pois você vai precisar fazer deploys constantes, e se você não tiver um processo de entrega contínua bem definido, você vai ter muitos problemas.

Outra coisa muito importante quando você tem maturidade técnica dos times aí você pode trabalhar com microsserviços.

Você trabalha com microsserviços quando precisa de uma escala de uma parte do seu sistema.

Quando você precisa de tecnologias específicas em partes do seu sistema.

## Quando utilizar sistemas monolíticos

- Quando você quer criar POCs ou quando quer garantir uma governança clara sobre tecnologias.

- Onde também novos projetos não se conhece todo o domínio.

- Onde você tem mais facilidade de contratação e treinamento dos desenvolvedores.

- Você vai ter o compartilhamento claro das libs. (shared kernel)

## Migração de monolitos para microsserviços

- Separação de contextos (DDD). Uma vez que você consegue entender melhor os contextos do seu sistema, você vai entender a quebrar os microsserviços.

- Evite excesso de granularidade. Não adianta você quebrar o seu sistema em microsserviços muito pequenos, pois você vai ter um overhead muito grande de comunicação entre os microsserviços.

- Verifique dependências. Você pode cair numa história de um monolito distribuído, onde você tem vários microsserviços, mas eles são muito dependentes entre si, e aí você não consegue escalar de forma independente.

- Pense e planeje o processo de migração dos bancos de dados. Quando você tem um sistema monolítico para microsserviços você tem um banco de dados central. Mas, no microsserviços você tem um banco de dados para cada microsserviço. E aí você tem que pensar como você vai fazer essa migração dos dados. Isso faz parte de um processo. 

- Uma vez que você tem a separação dos dados, você começará a pensar em eventos. Pois quando você trabalha com microsserviços você trabalha muito com eventos assíncronos. E aí você tem que pensar como você vai fazer essa comunicação entre os microsserviços.

- Quando você está trabalhando com o eventos não tenha medo de duplicação de dados. 

- Você também vai precisar começar a pensar em consistência eventual. Que eventualmente os dados da sua aplicação não estará 100% consistente. 

- CI/CD, Testes, Ambientes - você precisará de maturidade. Se você hoje não conseguir fazer um deploy no monolito, você não vai conseguir fazer em microsserviços. Pois você terá muitos deploys diferentes. Precisará de muita maturidade nesse processo.

- Comece pelas beiradas. O que isso significa? Não comece pela área principal do seu sistema. Pois é muito arriscado. Comece por áreas que não são tão críticas, e vá evoluindo aos poucos e migrando aos poucos. Isso vai gerar a necessidade de criar um Padrão de estrangulamento. Onde você vai ter o monolito e o microsserviço trabalhando juntos, e aos poucos você vai migrando o monolito para o microsserviço.