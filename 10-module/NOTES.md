# Module 10 - Clean Architecture

## Conceitos Básicos

### Origem da Clean Architecture

* Termo criado por Robert C. Martin (Uncle Bob) em 2012
* Tornou-se um livro 
* Buzz word
* Proteção do domínio da aplicação
* Baixo acomplamento entre as camadas
* Orientada a casos de uso

> O livro é Clean Architecture: A Craftsman's Guide to Software Structure and Design (leitura recomendada)

#### Curiosidades sobre o livro:

* Ele fala especificamente sobre "Clean Architecture" em 7 paginas do livro
* Tudo que ele fala especificamente sobre Clean Architecture está literamente em um artigo em seu blog

#### Por que devo ler o livro?

* Reforçar conhecimento e remover gaps básicos que muitas vezes nem percebemos que temos
* Componentes
* Arquitetura
* Limites arquiteturais
* Percepção sobre regras de negócio

### Pontos Importantes sobre arquitetura

* Formato que o software terá
* Divisão de componentes
* Comunicação entre componentes
* Uma boa arquitetura facilitará o processo de desenvolvimento, deploy, operação e manuntenção

#### Pontos importantes sobre arquitetura

"The strategy behind that facilitation is to leave as many option open as possible, for as long as possible." ~ Uncle Bob

"A estratégia por trás dessa facilitação é deixar o maior número de opções abertas o maior tempo possível." ~ Uncle Bob

### Keep options open

#### Objetivos de uma boa arquitetura

O objetivo principal da arquitetura é dar suporte ao ciclo de vida do sistema. Uma boa arquitetura torna o sistema fácil de entender, fácil de desenvolver, fácil de manter e fácil de implantar. O objetivo final é minimizar o custo de vida útil do sistema e maximizar a produtividade do programador. ~ Uncle Bob

"Keep Options Open"

#### Regras vs Detalhes

* Regras de negócio trazem o real valor para o software
* Detalhes ajudam a suportar as regras
* Detalhes não devem impactar nas regras de negócio
* Frameworks, banco de dados, apis, não devem impactar nas regras de negócio

Lembra-se do DDD? Atacar a complexidade no coração do software.

### Uses cases

* Inteção
* Clareza de cada comportamento do software
* Detalhes não devem impactar nas regras de negócio
* Frameworks, banco de dados, apis, não devem impactar nas regras de negócio

#### Use Cases - SRP (Single Responsibility Principle)

* Temos a tendência de "reaproveitar" use cases por serem muito parecidos
* Ex.: Alterar vs Inserir. Ambos consultam se o registro existe, persistem dados. MAS, são Use Cases diferentes. Por que?
* SRP (Single Responsibility Principle) => mudam por razões diferentes

### O fluxo dos Use Cases

Use Cases contam uma história. 

![alt text](./images/image-01.png)

> referência da imagem: https://medium.com/@unaware_harry/a-deep-dive-into-clean-architecture-and-solid-principles-dcdcec5db48a

### Limites arquiteturais

Tudo que não impacta diretamente nas regras de negócio deve estar em um limite arquitetural diferente. Ex.: não será o frontend, banco de dados que mudarão as regras de negócio da aplicação.

![alt text](./images/image-02.png)

![alt text](./images/image-03.png)

O Banco de Dados conhece as Regras de Negócios. As Regras de Negócios não conhecem o Banco de Dados.	

![alt text](./images/image-04.png)

Algo que você deve questionar e até mesmo fazendo analogia é: "Será que o código que estou criando, se eu estiver, por exemplo, no primeiro andar de um prédio, eu estaria ao mesmo tempo no último andar do prédio". Se a resposta for sim, você está rompendo os limites arquiteturais.

### Input vs Output

* No final do dia, tudo se resume a um `Input` que retorna um `Output`
* Ex: Criar um pedido (dados do pedido = input) 
      Pedido criado (dados de retorno do pedido = output)
* Simplifique que seu raciocínio ao criar um software sempre pensando em `Input` e `Output`

![alt text](./images/image-04.png)

### Entendendo DTOs

* Trafegar os dados entre os limites arquiteturais
* Objeto anêmico, sem comportamento
* Contém dados (Input ou Output)
* Não possui regras de negócio
* Não possui comportamento
* Não faz nada!

Ex.:

* API -> CONTROLLER -> USE CASE -> ENTITY
* Controller cria um DTO com os dados recebidos e envia para o Use Case
* Use Case executa seu fluxo, pega o resultado, cria um DTO para output e retorna para o Controller.

### Presenters

* Objetos de transformação
* Adequa o DTO de output no formato correto para entregar o resultado
* Lembrando: um sistema por ter diversos formatos de entrega. Ex.: XML, JSON, Protobuf, GraphQL, CLI, etc.

Vejamos um exemplo:

```javascript
input = new CategoryInputDTO("name");
output = CreateCategoryUseCase(input);
jsonResult = CategoryPresenter(output).toJson();
xmlResult = CategoryPresenter(output).toXml();
```

### Entities vs DTOs

* Entities da Clean Architecture são diferentes das Entities do DDD
* Clean Architecture define entity como camada de regras de negócio
* Elas se aplicam em qualquer situação
* Não há definição explicita de como criar as entities
* Normalmente utilizamos táticas do DDD
* Entities = Agregados + Domain Services
