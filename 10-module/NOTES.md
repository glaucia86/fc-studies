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

#### Duplicação real vs acidental

