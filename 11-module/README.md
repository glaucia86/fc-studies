# Module 11 - Sistemas Monolíticos

## What I learned

- [x] Conceitos Básicos
  - [x] Introdução
  - [x] As polêmicas por trás dos monolitos
  - [x] Monolito em primeiro
  - [x] Tipos de monolitos
  - [x] Sistemas monolíticos acoplados
  - [x] Sistemas monolíticos modulares
  - [x] Segregação de banco de dados
  - [x] E os Microsserviços
  - [x] Shared Kernel

- [x] Código Fonte
    - [x] Repositório

- [x] Estrutura do Projeto
  - [x] Dinâmica de entendimento do mini projeto
  - [x] Relembrando DDD
  - [x] Context Map
  - [x] Comunicação entre módulos
  - [x] Comunicação interna vs externa

- [] Iniciando projeto exemplo
  - [x] Entendendo processo de codificação
  - [x] Criando pacote shared
  - [x] Criando entidade Product
  - [x] Criando teste para nosso usecase
  - [x] Desenvolvendo caso de uso
  - [x] Criando teste de ProductRepository
  - [x] Implementando create product
  - [x] Implementando find a product
  - [x] Criando interface da nossa Facade
  - [x] Implementando Facade
  - [x] Testando nossa Facade
  - [x] Implementando Factory para nossa Facade

- [x] Store Catalog
  - [x] Criando teste para checar estoque
  - [x] Implementando CheckStockUseCase
  - [x] Testando facade para verificação de stock
  - [x] Criando entidade Product
  - [x] Implementando teste do FindAllProducts UseCase
  - [x] Implementando FindAllProducts UseCase
  - [x] Criando Model de Product
  - [x] Criando testes para ProductRepository
  - [x] Implementando FindAll no ProductRepository
  - [x] Testando UseCase FindProduct
  - [x] Finalizando FindProductUseCase
  - [x] Finalizando repositório
  - [x] Criando Interface da StoreCatalogFacade
  - [x] Criando teste para Facade StoreCatalog
  - [x] Finalizando StoreCatalogFacade

- [x] Módulo ClientAdm
  - [x] Iniciando módulo Client-Adm
  - [x] Implementando caso de uso AddClient
  - [x] Implementando FindClientUseCase
  - [x] Criando ClientModel
  - [x] Implementando método find no ClientRepository
  - [x] Implementando Add no ClientRepository
  - [x] Definindo interface da facade
  - [x] Implementando Add da Facade
  - [x] Finalizando Facade e Factory

- [] Pagamento
  - [x] Iniciando com Payment
  - [x] Finalizando criação da entidade
  - [x] Desenvolvendo UseCase de ProcessPayment
  - [x] Finalizando testes do caso de uso
  - [x] Criando repositório de Transaction
  - [] Implementando PaymentFacade
  - [] Finalizando Factory

- [] Invoice
  - [] Criação de módulo de Invoice

- [] Checkout
  - [] Criando entidade client
  - [] Implementando product e order
  - [] Preparando UseCase
  - [] Criando primeiro teste para client
  - [] Testando validação dos produtos
  - [] Implementando validateProducts
  - [] Testando método de verificação do produto
  - [] Implementando verificação de stock
  - [] Criando teste de getProduct
  - [] Implementando getProduct
  - [] Testando retorno de um product
  - [] Preparando transação para ser processada
  - [] Preparando testes para place order
  - [] Criando test para place order não aprovado
  - [] Implementando processamento de pagamento
  - [] Errata - Implementando processamento de pagamento
  - [] Finalizando teste do caso de uso
  - [] Últimas palavras e desafios

- [] Criação de API
  - [] Observação sobre tabela products
  - [] Criação de API