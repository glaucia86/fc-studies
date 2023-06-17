# Comunicação entre Sistemas

## Comunicação sincrona vs Assincrona

Em um projeto de microsserviços, a comunicação entre os diferentes serviços é essencial para que eles possam funcionar juntos e trocar informações. A forma como essa comunicação é realizada pode ser síncrona ou assíncrona, cada uma com suas características e considerações específicas.

A comunicação síncrona ocorre quando um serviço envia uma solicitação para outro serviço e aguarda uma resposta imediata antes de prosseguir. Nesse modelo, o serviço solicitante fica bloqueado até que a resposta seja recebida. Esse tipo de comunicação é semelhante a uma chamada de função em programação, onde o fluxo de execução é interrompido até que a função retorne um valor.

A comunicação síncrona é geralmente usada quando uma resposta imediata é necessária, ou quando o serviço solicitante depende do resultado do serviço chamado para continuar sua operação. Isso pode ser útil em casos em que a sincronização de dados é importante ou quando é necessário garantir que uma operação seja concluída antes de prosseguir.

Por outro lado, a comunicação assíncrona ocorre quando um serviço envia uma solicitação para outro serviço, mas não aguarda uma resposta imediata. Em vez disso, ele continua sua execução e pode lidar com outras tarefas enquanto espera pela resposta. O serviço chamado enviará a resposta assim que estiver disponível.

A comunicação assíncrona é útil quando a resposta imediata não é necessária ou quando um serviço pode prosseguir sem depender da resposta de outro serviço. Isso permite que os serviços operem de forma independente e assíncrona, o que pode melhorar a escalabilidade e a capacidade de lidar com picos de carga.

No contexto de um projeto de microsserviços, tanto a comunicação síncrona quanto a assíncrona podem ser usadas, dependendo dos requisitos e das necessidades específicas de cada interação entre os serviços. É importante considerar fatores como desempenho, consistência de dados, dependências entre serviços e tolerância a falhas ao decidir qual abordagem usar em cada caso.

Em resumo, a comunicação síncrona requer uma resposta imediata e bloqueia o serviço solicitante até que a resposta seja recebida, enquanto a comunicação assíncrona permite que o serviço solicitante prossiga sem esperar pela resposta imediata. Ambas têm seus usos e desafios, e a escolha entre elas dependerá das necessidades específicas do projeto de microsserviços.


> referência adicional: **[Comunicação entre microsserviços: você adota as melhores práticas?](https://www.supero.com.br/blog/comunicacao-entre-microsservicos-voce-adota-as-melhores-praticas/)**

## REST

### REST e Níveis de Maturidade

O que é REST? REST é um acrônimo para Representational State Transfer, que pode ser traduzido como Transferência de Estado Representacional. É um estilo de arquitetura de software que define um conjunto de restrições a serem usadas para a criação de web services. Um web service que adota o estilo arquitetural REST é chamado de RESTful.

Em resumo, REST é:

* Simples
* Stateless
* Cacheável

### Níveis de Maturidade (Richardson Maturity Model)

O modelo de maturidade de Richardson é uma classificação proposta por Leonard Richardson para avaliar o grau de maturidade de um web service REST. O modelo define quatro níveis de maturidade, de 0 a 3, que são usados para avaliar a aderência de um web service aos princípios REST. São eles:

* Nível 0 - The Swamp of POX: onde você não tem nenhuma padronização.
  
* Nível 1 - Utilização de Resources: onde você começa a usar recursos. Exemplo:

| Verbo  | URI            | Utilização                     |
| ------ | -------------- | ------------------------------ |
| GET    | /products      | Obter todos os produtos        |
| GET    | /products/{id} | Obter um produto por ID        |
| POST   | /products      | Criar um novo produto          |
| PUT    | /products/{id} | Atualizar um produto existente |
| DELETE | /products/{id} | Excluir um produto existente   |

* Nível 2 - Utilização de HTTP Verbs: onde você começa a usar os verbos HTTP. Exemplo:

| Verbo  | Utilização                     |
| ------ | ------------------------------ |
| GET    | Obter todos os produtos        |
| GET    | Obter um produto por ID        |
| POST   | Criar um novo produto          |
| PUT    | Atualizar um produto existente |
| DELETE | Excluir um produto existente   |

* Nível 3 - Utilização de HATEOAS: onde você começa a usar o HATEOAS. Exemplo:

> O que é HATEOAS? HATEOAS é um acrônimo para Hypermedia as the Engine of Application State, que pode ser traduzido como Hipermídia como Motor do Estado da Aplicação. É um dos princípios do estilo arquitetural REST que define que a representação de um recurso deve conter links para outros recursos relacionados. Esses links permitem que o cliente navegue pela API de forma dinâmica, sem a necessidade de conhecimento prévio de quais recursos estão disponíveis.

Exemplo de HATEOAS

```json
HTTP/1.1 200 OK
Content-Type: application/vnd.acme.account+json
Content-Length: ...

{
  "account": {
    "account_number": 12345,
    "balance": {
      "currency": "usd",
      "value": 100.20
    },
    "links": {
      "deposit": "/accounts/12345/deposit",
      "withdraw": "/accounts/12345/withdraw",
      "transfer": "/accounts/12345/transfer",
      "close": "/accounts/12345/close"
    }
  }
}
```

## Method e Content Negotiation

### Uma boa API REST

* Utiliza URIs para serviços e itens que expostos para esses serviços.
* Utiliza todos os verbos HTTP para realizar as operações em seus recursos, incluindo caching.
* Provê links relacionais para os recursos exemplificando o que pode ser feito.

### REST: HAL, Collection+JSON e Siren

* JSON não provê um padrão de hipermídia para realizar a linkagem
* HAL: Hypermedia Application Language
* Siren

1. Media Type = application/hal+json

```json
{
  "_links": {
    "self": {
      "href": "/products/1"
    },
    "all_products": {
      "href": "/products"
    },
    "category": {
      "href": "/categories/5"
    }
  },
  "id": 1,
  "name": "Product X",
  "price": 9.99
}
```

### REST: HTTP Method Negotiation

HTTP Method Negotiation é um mecanismo que permite que um cliente negocie com um servidor o método HTTP que será utilizado para uma requisição. Isso é feito através do cabeçalho HTTP Accept, que é utilizado para informar ao servidor o tipo de conteúdo que o cliente espera receber como resposta.

HTTP possui um outro método: **OPTIONS**. Esse método nos permite informar quais métodos são permitidos ou não em determinados recursos. Exemplo:

```bash
OPTIONS api/products HTTP/1.1
Host: fullcycle.com.br
```

Resposta pode ser:

```bash
HTTP/1.1 200 OK
Allow: GET, POST
```

Caso envie a requisição em outro formato

```bash
HTTP/1.1 405 Method Not Allowed
Allow: GET, POST
```

### REST: Content Negotiation

O processo de content negotiation é baseado que o client está fazendo para o server. Nesse caso ele solicita o que e como ele quer a resposta. O server então retornará ou não a informação no formato desejado.

**Accept Negotiation** 
+ Client solicita a informação e o tipo de retorno pelo server baseado no media type informado por ordem de prioridade.

Exemplo:

```bash
GET /product
Accept: application/json
```

Resposta pode ser o retorno dos dados ou:

```bash
HTTP/1.1 406 Not Acceptable
```

**Content-Type Negotiation**

+ Através de um content-type o header da request, o servidor consegue verificar se ele irá conseguir processar a informação para retornar a informação desejada.

Exemplo:

```bash
POST /product HTTP/1.1
Accept: application/json
Content-Type: application/json

{
  "name": "Product X",
  "price": 9.99
}
```

Caso o servidor não aceite o content type, ele poderá retornar:

```bash
HTTP/1.1 415 Unsupported Media Type
```

## Instalando Laminas API Tools

O projeto modelo se encontra na pasta **module-04/laminas-samples**

Projeto localizado em: [Projeto - API Tools Skeleton](https://github.com/codeedu/api-tools-skeleton.)

Para executar:

* Linux Users

```bash
docker build -t api-tools-test .

chmod +x ./.docker/entrypoint.sh

docker run -p 8000:80 -v $(pwd):/var/www api-tools-test
```

* Windows Users

```bash
chmod +x ./.docker/entrypoint.sh

docker run -p 8000:80 -v %cd%:/var/www api-tools-test
```

## GraphQL

### Introdução à GraphQL

> O que é Graphql? GraphQL é uma linguagem de consulta de dados desenvolvida e usada pelo Facebook desde 2012. Ela foi criada com o objetivo de prover uma interface flexível e com boa performance para buscar e manipular dados em APIs, e atualmente é utilizada por muitas empresas como GitHub, Pinterest, Shopify e Intuit.

### Gerando esqueleto do servidor GraphQL

Hands-on usando gqlgen! Para executar o projeto, basta executar o comando abaixo: 

* 04-module/go-graphql

```bash
go run server.go
```

> Pode acontecer de haver a necessidade de habilitar o `GO111MODULE` para que o projeto funcione corretamente. Para isso, siga as instruções abaixo:

Para ativar os módulos Go, você pode definir a variável de ambiente GO111MODULE como "on". Veja como fazer:

Para sistemas baseados em Unix (Linux, macOS, etc.):

```bash
export GO111MODULE=on
```

Para sistemas Windows (Prompt de Comando):

```bash
set GO111MODULE=on
```

Para sistemas Windows (PowerShell):

```bash
$env:GO111MODULE = "on"
```

Depois de definir a variável de ambiente, você pode verificar a alteração executando o seguinte comando:

```bash
go env GO111MODULE
```

Agora deve exibir "on" como o valor de GO111MODULE, indicando que os módulos Go estão habilitados.

Lembre-se de definir a variável de ambiente antes de executar quaisquer comandos Go ou iniciar seu programa Go para garantir que os módulos sejam usados corretamente.








