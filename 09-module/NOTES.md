# Introdução a Arquitetura Hexagonal

## Ciclo de um projeto

### Pontos importantes sobre arquitetura

* Crescimento sustentável
* Software precisa se pagar ao passar do tempo
* Software deve ser desenhado por você e não pelo seu framework
* Peças precisam se encaixar e eventualmente substituídas

### Lembre-se!

Arquitetura diz respeito com o futuro do seu software. CRUD qualquer um faz!

### Ciclo de vida de muitos projetos

As fases refletem os problemas que muitos projetos enfrentam:

* Fase 1: 
  - Banco de Dados
  - Cadastros
  - Validações
  - Servidor Web
  - Controllers
  - Views
  - Autenticação
  - Upload de arquivos

* Fase 2: 
  - Regras de negócio
  - Criação de APIs
  - Consumo de APIs
  - Autorização
  - Relatórios
  - Logs

* Fase 3:
  - Mais acessos
  - Upgrades hardware
  - Cache
  - API parceiros
  - Regras parceiros
  - Relatórios

* Fase 4:
  - Mais acessos
  - Upgrade hardware
  - BD relatórios
  - Comandos
  - V2 da API

* Fase 5:
  - Escala horizontal
  - Sessões
  - Uploads
  - Refatoração
  - Autoscaling
  - CI/CD

* Fase 6:
  - GraphQL
  - Bugs constantes
  - Logs? Ops
  - Integração CRM
  - Migração para React
 
* Fase 7:
  - Inconsistências CRM
  - Containers
  - CI/CD
  - Memória
  - Logs
  - Se livrar do legado

* Fase 8:
  - Microserviços
  - DB compartilhado
  - Problemas com tracing
  - Lentidão
  - Custo elevado

* Fase 9:
  - Kubernetes
  - CI/CD
  - Mensageria
  - Perda de mensagens
  - Consultorias

* Fase 10:
  - Use a imaginação!

Essa é uma evolução natural de como as coisas vão acontecer com o passar do tempo e vão ficando mais complexas e difíceis de manter.

Quando você não pensa numa arquitetura sustentável, você vai ter que lidar com esses problemas e vai ter que refatorar o seu código para que ele se adeque a essas novas necessidades e fica complicado para manter e evoluir o seu software.

## Reflexões importantes

### Principais problemas

Faltou nos processos acima:

* Visão de futuro
* Limites bem definidos
* Troca e adição de componentes
* Escala
* Otimizações frequentes
* Preparado para mudanças

### Reflexões

* Está sendo doloroso para o developer?
* Poderia ter sido evitado?
* Software está se pagando?
* Será que a relação com o cliente está boa?
* Cliente terá prejuízo com a brusca mudança arquitetural?
* Em qual momento tudo se perdeu?
* Se você fosse novo na equipe, você julgaria os devs que fizeram tudo isso?