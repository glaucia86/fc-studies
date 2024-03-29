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

<details><summary><b>
Exemplo de HATEOAS</b></summary>
<br/>

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

</details>
<br/>

## Method e Content Negotiation

### Uma boa API REST

* Utiliza URIs para serviços e itens que expostos para esses serviços.
* Utiliza todos os verbos HTTP para realizar as operações em seus recursos, incluindo caching.
* Provê links relacionais para os recursos exemplificando o que pode ser feito.

### REST: HAL, Collection+JSON e Siren

* JSON não provê um padrão de hipermídia para realizar a linkagem
* HAL: Hypermedia Application Language
* Siren



<details><summary><b>1. Media Type = application/hal+json</b></summary>
<br/>


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

</details>
<br/>

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

> As queries se encontram no arquivo: 'api.http'

Para criar a base de dados usando o `sqlite3`, digite o seguinte comando no terminal:

```bash
sqlite3 test.db
```

Para criar a tabela, digite o seguinte comando no terminal:

```bash
create table categories (id string, name string, description string);
```

Para testar se está tudo funcionando, execute a aplicação:

```bash
go run cmd/server/server.go
```

Abra o browser e digite a seguinte URL:

```bash
http://localhost:8080/
```

E digite a seguinte `mutation` para criar uma nova categoria:

```graphql
mutation newCategory {
  createCategory(input: {name: "Category 1", description: "Category 1 description"}) {
    id
    name
    description
  }
}
```

Retorne até o terminal do `sqlite3` e digite o seguinte comando para verificar se a categoria foi criada:

```bash
select * from categories;
```

Se tudo estiver funcionando corretamente, você verá a categoria criada no terminal.

> para obter mais informações sobre o gqlgen, acesse o link: [gqlgen](https://gqlgen.com/)
> como exercício dessa parte do módulo, criar um CRUD completo com GraphQL usando o TypeORM e TypeScript.

### TODO: Fazer uma versão com TypeScript e TypeORM com GraphQL

[Title](https://codetain.com/blog/implementing-server-side-crud-with-typescript-typeorm-and-graphql)

[Title](https://dev.to/prisma/prototyping-a-crud-api-with-typegraphql-and-prisma-for-your-database-424c)

GRPC: [Title](https://dev.to/devaddict/use-grpc-with-node-js-and-typescript-3c58)

## gRPC

### Conceitos iniciais

#### O que é gRPC?

* gRPC é um framework desenvolvido pela google que tem o objetivo de facilitar o processo de comunicação entre sistemas de uma forma extremamente rápida, leve e independente de linguagem de programação.
* Faz parte da CNCF (Cloud Native Computing Foundation) e é um projeto open source.

#### Em quais casos podemos utilizar o gRPC?

* Ideal para microsserviços
* Mobile, Browsers e Backend
* Geração das bibliotecas de forma automática
* Streaming bidirecional utilizando HTTP/2

#### Linguagens (Suporte oficial)

* gRPC-GO
* gRPC-Java
* gRPC-C
  * Python
  * Ruby
  * Objective-C
  * PHP
  * C#
  * Node.js
  * Dart
  * Kotlin

### gRPC HTTP2 e Protocol Buffers

gRPC é um Remote Procedure Call (RPC) framework que usa o HTTP/2 para transportar mensagens binárias (Protocol Buffers) entre clientes e servidores.

[![what-is-rpc-in-operating-system.png](https://i.postimg.cc/RFvY9trh/what-is-rpc-in-operating-system.png)](https://postimg.cc/zLP7FVGY)

#### Protocol Buffers

* Protocol Buffers é uma forma de serializar dados estruturados.

#### Protocol Buffers vs JSON

* Arquivos binários < JSON
* Processo de serialização é mais leve (CPU) do que JSON
* Gasta menos recurso de rede
* Processo é mais veloz

> Exemplo de um arquivo protocol buffer

```proto
syntax = "proto3";

message SearchRequest {
  string query = 1;
  int32 page_number = 2;
  int32 result_per_page = 3;
}
```

#### HTTP/2

* Nome original criado pela Google era SPDY
* Lançado em 2015
* Dados trafegados são binários e não texto como no HTTP 1.1
* Utiliza a mesma conexão TCP para enviar e receber dados do cliente e do servidor (Multiplex)
* Server Push
* Headers são comprimidos
* Gasta menos recursos de rede
* Processo é mais veloz

### Formatos de Comunicação

#### gRPC - API 'Unary'

* Uma chamada RPC simples do cliente para o servidor que retorna uma única resposta.
* O cliente envia uma mensagem para o servidor e recebe uma resposta, como uma chamada de procedimento remoto normal.
* Exemplo: Chamada de um método de um serviço remoto.

[![grpc-api-unary.png](https://i.postimg.cc/5t9xK6P5/grpc-api-unary.png)](https://postimg.cc/cvjyr4G6)

#### gRPC - API 'Server Streaming'

* O cliente envia uma mensagem para o servidor e recebe uma sequência de respostas do servidor.
* Exemplo: Chamada de um método de um serviço remoto que retorna uma sequência de resultados.

[![grpc-api-server-streaming.png](https://i.postimg.cc/vHWbQWkL/grpc-api-server-streaming.png)](https://postimg.cc/SJNwdzyJ)

#### gRPC - API 'Client Streaming'

* O cliente envia uma sequência de mensagens para o servidor. O servidor envia uma única resposta para o cliente.
* Exemplo: Chamada de um método de um serviço remoto que recebe uma sequência de mensagens do cliente e retorna uma única resposta.

[![grpc-api-client-streaming.png](https://i.postimg.cc/fbghH5SZ/grpc-api-client-streaming.png)](https://postimg.cc/yJ95xmTr)

#### gRPC - API 'Bidirectional Streaming'

* Ambos os lados enviam uma sequência de mensagens usando um canal bidirecional. Isso é semelhante a uma chamada de procedimento remoto duplex.
* Exemplo: Chamada de um método de um serviço remoto que recebe uma sequência de mensagens do cliente e retorna uma sequência de mensagens com uma única resposta para cada mensagem recebida.

[![grpc-api-bi-directional-streaming.png](https://i.postimg.cc/mrPnr4hf/grpc-api-bi-directional-streaming.png)](https://postimg.cc/cKNhDVQX)

### REST vs gRPC

- REST
  * Texto/JSON
  * Uni-direcional
  * Alta latência
  * Sem contrato (maior chance de erros)
  * Sem suporte a streaming (Request/Response)
  * Design pré-definido
  * Bibliotecas de terceiros

- gRPC
  * Protocol Buffers
  * Bi-direcional e assícrono
  * Baixa latência
  * Contrato definido (.proto)
  * Suporte a streaming (Request/Response)
  * Design é definido
  * Geração de código

### gRPC vs Protocol Buffers

**[Official Docs - gRPC](https://grpc.io/)**

### Passo a passo: Go + gRPC

Projeto: **[go-grpc]()**

#### Instalação

1. Instalar primeiramente o protoc

* Linux, usando `apt` or `apt-get`, por exemplo

```bash
apt install -y protobuf-compiler
protoc --version  # Ensure compiler version is 3+
```

* MacOS, usando Homebrew:

```bash
brew install protobuf
protoc --version  # Ensure compiler version is 3+
```

2. Depois instalar o plugin do protoc para Go

```bash
go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2
```

O passo a passo acima é o mesmo para qualquer linguagem, basta trocar o comando de instalação do plugin do protoc para a linguagem desejada. E, você pode verificar na documentação oficial **[aqui](https://grpc.io/docs/languages/go/quickstart/)**

3. Executando o projeto, vá até a pasta `go-grpc` e execute o comando abaixo

```bash
go mod tidy
```

4. Agora crie uma pasta chamada: `proto` e dentro dela crie um arquivo chamado: `course_category.proto` e cole o seguinte código:

- course_category.proto

```proto
syntax = "proto3";
package pb;
option go_package = "internal/pb";

message Category {
  string id = 1;
  string name = 2;
  string description = 3;
}

message CreateCategoryRequest {
  string name = 1;
  string description = 2;
}

message CategoryResponse {
  Category category = 1;
}

service CategoryService {
  rpc CreateCategory(CreateCategoryRequest) returns (CategoryResponse) { }
}

```

O que esse arquivo faz? Ele define o contrato da comunicação entre o client e o server, ou seja, ele define o que o client pode enviar e o que o server pode receber e vice-versa.

5. Agora execute o comando abaixo para gerar o código

```bash
protoc --go_out=. --go-grpc_out=. proto/course_category.proto
```

Será gerado uma pasta dentro de `internal` chamada `pb` e dentro dela terá os arquivos: `course_category.pb.go` e `course_category_grpc.pb.go`

[![Screen-Shot-08-10-23-at-07-22-PM.png](https://i.postimg.cc/5ty0QqFk/Screen-Shot-08-10-23-at-07-22-PM.png)](https://postimg.cc/qtf09Kw8)

6. Agora crie uma pasta chamada `service` e dentro dela crie um arquivo: `category.go` e cole o seguinte código:

- service/category.go

```go
package service

import (
	"context"

	"github.com/devfullcycle/14-gRPC/internal/database"
	"github.com/devfullcycle/14-gRPC/internal/pb"
)

type CategoryService struct {
	pb.UnimplementedCategoryServiceServer
	CategoryDB database.Category
}

func NewCategoryService(categoryDB database.Category) *CategoryService {
	return &CategoryService{
		CategoryDB: categoryDB,
	}
}

func (c *CategoryService) CreateCategory(ctx context.Context, in *pb.CreateCategoryRequest) (*pb.CategoryResponse, error) {
	category, err := c.CategoryDB.Create(in.Name, in.Description)

	if err != nil {
		return nil, err
	}

	categoryResponse := &pb.Category{
		Id:          category.ID,
		Name:        category.Name,
		Description: category.Description,
	}

	return &pb.CategoryResponse{
		Category: categoryResponse,
		}, nil
}
```

7. Agora vamos criar o servidor do gRPC, para isso crie uma pasta chamada `cmd/grpcServer` e dentro da pasta crie um arquivo chamado: `main.go` e cole o seguinte código:

- main.go

```go
package main

import (
	"database/sql"
	"net"

	"github.com/devfullcycle/14-gRPC/internal/database"
	"github.com/devfullcycle/14-gRPC/internal/pb"
	"github.com/devfullcycle/14-gRPC/internal/service"
	_ "github.com/mattn/go-sqlite3"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func main() {
	db, err := sql.Open("sqlite3", "./db.sqlite")

	if err != nil {
		panic(err)
	}

	defer db.Close()

	categoryDb := database.NewCategory(db)
	categoryService := service.NewCategoryService(*categoryDb)

	grpcServer := grpc.NewServer()
	pb.RegisterCategoryServiceServer(grpcServer, categoryService)
	reflection.Register(grpcServer)

	lis, err := net.Listen("tcp", ":50051")

	if err != nil {
		panic(err)
	}

	if err := grpcServer.Serve(lis); err != nil {
		panic(err)
	}
}

```

Agora vamos instalar uma ferramenta que nos auxiliará no desenvolvimento do client do gRPC, **[Evans](https://github.com/ktr0731/evans)**

8. Para instalar o Evans, execute o comando abaixo:

```bash
go install github.com/ktr0731/evans@latest
```

Agora execute o comando para executar o projeto:

```bash
go run cmd/grpcServer/main.go
```

E em outro terminal execute o comando abaixo para testar o servidor:

```bash
evans -r repl
```

> crie uma base de dados usando o `sqlite3` e crie uma tabela chamada `categories` com os campos: `id`, `name` e `description`

Após isso, digite: `show package`. Esse comando listará os pacotes que estão disponíveis para serem usados. No nosso caso será: `pb`

Em seguida digite: `package pb`. Esse comando irá selecionar o pacote que queremos usar.

E para ver os serviços disponíveis desse pacote, digite: `show service`

[![Captura-de-tela-2023-09-01-212749.png](https://i.postimg.cc/g0tQSKqQ/Captura-de-tela-2023-09-01-212749.png)](https://postimg.cc/JyJptZF5)

E finalmente para selecionar o serviço, digite: `service CategoryService`

[![Screen-Shot-09-01-23-at-10-53-PM.png](https://i.postimg.cc/7YC6mB18/Screen-Shot-09-01-23-at-10-53-PM.png)](https://postimg.cc/56VbtSkn)

Para criar uma nova categoria usando gRPC com o Evans, digite o seguinte comando:

```bash
call CreateCategory
```

E digite os dados da categoria:

```bash
name: "Glaucia Lemos"
description: "A Developer Advocate who likes to coding stuff things"
```

E se tudo estiver funcionando corretamente, você verá a seguinte resposta:

```json
{
  "description": "A Developer Advocate who likes to coding stuff things",
  "id": "f6ddc9c4-8398-4e8b-9cdf-a6a673191500",
  "name": "Glaucia Lemos"
}
```

Agora nós vamos criar um `CategoryList` para isso, abre o arquivo: `course_category.proto` e cole o seguinte código:

- course_category.proto

```proto
syntax = "proto3";
package pb;
option go_package = "internal/pb";

message Blank {
  string blank = 1;
}

message Category {
  string id = 1;
  string name = 2;
  string description = 3;
}

message CreateCategoryRequest {
  string name = 1;
  string description = 2;
}

message CategoryResponse {
  Category category = 1;
}

message CategoryList {
  repeated Category categories = 1;
}

service CategoryService {
  rpc CreateCategory(CreateCategoryRequest) returns (Category) { }
  rpc ListCategories(Blank) returns (CategoryList) { }
}
```

Agora execute o comando abaixo para gerar o código:

```bash
protoc --go_out=. --go-grpc_out=. proto/course_category.proto
```

Agora nós vamos implementar esse serviço. Para isso, abre o arquivo: `category.go` e inclua o seguinte código:

- category.go

```go
func (c *CategoryService) CreateCategory(ctx context.Context, in *pb.CreateCategoryRequest) (*pb.Category, error) {
	category, err := c.CategoryDB.Create(in.Name, in.Description)

	if err != nil {
		return nil, err
	}

	categoryResponse := &pb.Category{
		Id:          category.ID,
		Name:        category.Name,
		Description: category.Description,
	}

	return categoryResponse, nil
}

func (c *CategoryService) ListCategories(ctx context.Context, in *pb.Blank) (*pb.CategoryList, error) {
	categories, err := c.CategoryDB.FindAll()

	if err != nil {
		return nil, err
	}

	var categoriesResponse []*pb.Category

	for _, category := range categories {
		categoryResponse := &pb.Category{
			Id:          category.ID,
			Name:        category.Name,
			Description: category.Description,
		}

		categoriesResponse = append(categoriesResponse, categoryResponse)
	}

	return &pb.CategoryList{Categories: categoriesResponse}, nil
}
```

Agora vamos testar o serviço usando o Evans. Para isso, digite o seguinte comando:

```bash
go run cmd/grpcServer/main.go
```

E em outro terminal execute o comando abaixo para testar o servidor:

```bash
evans -r repl
```

E digite o seguinte comando para listar as categorias:

```bash
call ListCategories
```

### Buscando uma Categoria (Get Category by ID)

Para isso, vamos incluir o seguinte código no arquivo: `course_category.proto` e inclua:

- course_category.proto

```proto
(...)

message CategoryGetRequest {
  string id = 1;
}

service CategoryService {
    rpc CreateCategory(CreateCategoryRequest) returns (Category) { }
  rpc ListCategories(Blank) returns (CategoryList) { }
  rpc GetCategory(CategoryGetRequest) returns (Category) { }
}
```

Agora vamos atualizar o que recentemente colocar no código usando o comando: 

```bash
protoc --go_out=. --go-grpc_out=. proto/course_category.proto
```

Agora é o momento da gente fazer a implementação dessa interface chamada `GetCategory`. Para isso, abra o arquivo: `service/category.go` e inclua o seguinte código:

- service/category.go

```go
func (c *CategoryService) GetCategory(ctx context.Context, in *pb.CategoryGetRequest) (*pb.Category, error) {
	category, err := c.CategoryDB.Find(in.Id)

	if err != nil {
		return nil, err
	}

	categoryResponse := &pb.Category{
		Id:          category.ID,
		Name:        category.Name,
		Description: category.Description,
	}

	return categoryResponse, nil
}
```

Precisamos antes de executar esse código, atualizar o arquivo `database/category.go` para incluir o seguinte código:

- database/category.go

```go
func (c *Category) Find(id string) (Category, error) {
	var name, description string
	err := c.db.QueryRow("SELECT name, description FROM categories WHERE id = $1", id).Scan(&name, &description)

	if err != nil {
		return Category{}, err
	}

	return Category{
		ID:          id,
		Name:        name,
		Description: description,
	}, nil
}
```

Agora é só testar o serviço recém criado usando os comandos:

```bash
go run cmd/grpcServer/main.go
```

E em outro terminal execute o comando abaixo para testar o servidor:

```bash
evans -r repl
```

### Trabalhando com Stream

Trabalhar com stream é extremamente importante principalmente se você estiver trabalhando com inúmeros dados. Para isso, vamos incluir o seguinte código no arquivo: `course_category.proto`:

- course_category.proto
<br/>

```proto
(...)

rpc CreateCategoryStream(stream CreateCategoryRequest)
      returns (CategoryList) { }
```

Execute o comando abaixo para atualizar o código:

```bash
protoc --go_out=. --go-grpc_out=. proto/course_category.proto
```

E agora vamos implementar esse serviço. Para isso, abra o arquivo: `service/category.go` e inclua o seguinte código:

- service/category.go

```go
func (c *CategoryService) CreateCategoryStream(stream pb.CategoryService_CreateCategoryStreamServer) error {
	categories := &pb.CategoryList{}

	for {
		category, err := stream.Recv()

		if err == io.EOF {
			return stream.SendAndClose(categories)
		}

		if err != nil {
			return err
		}

		categoryResult, err := c.CategoryDB.Create(category.Name, category.Description)

		if err != nil {
			return err
		}

		// Aqui ele vai enviando e criando..  quando ele chegar no final do arquivo, ele vai enviar e fechar o stream
		categories.Categories = append(categories.Categories, &pb.Category{
			Id:          categoryResult.ID,
			Name:        categoryResult.Name,
			Description: categoryResult.Description,
		})
	}
}
```

Vamos testar esse serviço. Execute novamente o comando abaixo:

```bash
go run cmd/grpcServer/main.go
```

E em outro terminal execute o comando abaixo para testar o servidor:

```bash
evans -r repl
```

O resultado:

[![Captura-de-tela-2023-09-06-155930.png](https://i.postimg.cc/pLvdKtD8/Captura-de-tela-2023-09-06-155930.png)](https://postimg.cc/fJHZhpqT)

### Trabalhando com Streams bidirecionais

Agora vamos trabalhar com streams bidirecionais. Para isso, vamos incluir o seguinte código no arquivo: `course_category.proto`:

- course_category.proto

```proto
(...)

service CategoryService {
  rpc CreateCategory(CreateCategoryRequest) returns (Category) { }
  rpc CreateCategoryStream(stream CreateCategoryRequest) returns (CategoryList) { }
  rpc CreateCategoryBidirectional(stream CreateCategoryRequest) returns (stream Category) { }
  rpc ListCategories(Blank) returns (CategoryList) { }
  rpc GetCategory(CategoryGetRequest) returns (Category) { }
}
```

Execute o comando abaixo para atualizar o código:

```bash
protoc --go_out=. --go-grpc_out=. proto/course_category.proto
```

E agora vamos implementar esse serviço. Para isso, abra o arquivo: `service/category.go` e inclua o seguinte código:

* service/category.go

```go
func (c *CategoryService) CreateCategoryBidirectional(stream pb.CategoryService_CreateCategoryBidirectionalServer) error {
	for {
		category, err := stream.Recv()

		if err == io.EOF {
			return nil
		}

		if err != nil {
			return err
		}

		categoryResult, err := c.CategoryDB.Create(category.Name, category.Description)

		if err != nil {
			return err
		}

		// Aqui ele vai enviando e criando..  quando ele chegar no final do arquivo, ele vai enviar e fechar o stream
		err = stream.Send(&pb.Category{
			Id:          categoryResult.ID,
			Name:        categoryResult.Name,
			Description: categoryResult.Description,
		})

		if err != nil {
			return err
		}
	}
}
```

Vamos testar esse serviço. Execute novamente o comando abaixo:

```bash
go run cmd/grpcServer/main.go
```

E em outro terminal execute o comando abaixo para testar o servidor:

```bash
evans -r repl
```

O que isso nos ensina? Trabalhar com stream nos ajuda a trabalhar com grandes volumes de dados. E, isso é extremamente importante quando estamos trabalhando com microsserviços. E, claro pensando em performance e escalabilidade.

## Service Discovery e Consul

### Entendendo o contexto

#### Perguntas a se fazer?

- Qual máquina chamar?
- Qual porta utilizar?
- Precisamos saber o IP de cada instância?
- Como saber se tenho permissão para acessar?

#### Service Discovery

- Descobre as máquinas disponíveis para acesso
- Segmentação de máquinas para garantir segurança
- Resoluções via DNS
- Health Check
- Como saber se tenho permissão para acessar

### Visão geral do Consul

#### Hashicorp Consul

Sobre o [consul](https://www.consul.io/)

- Service Discovery
- Service Segmentation
- Load Balancer na Borda (Layer 7)
- Key/Value Configuration
- Health Check
- Open Source/Enterprise

O consul também garante recursos relacionados com segurança. 

### Service Registry

[![1639507071-discoverserviceswithdnsorapi.jpg](https://i.postimg.cc/MZfcQbTm/1639507071-discoverserviceswithdnsorapi.jpg)](https://postimg.cc/grdk9h3x)

### Health Check e Multicloud

Sobre Consul Health Check [aqui](https://developer.hashicorp.com/consul/tutorials/developer-discovery/service-registration-health-checks?in=consul%2Fdeveloper-discovery)

Ele roda em diferentes provedores de nuvem. E, melhor eles conseguem se comunicar independente da nuvem que estiverem. Ele é uma ferramenta Multi-Cloud.

[![1639531697-multiplatformservicemesh.jpg](https://i.postimg.cc/5NFkTGtQ/1639531697-multiplatformservicemesh.jpg)](https://postimg.cc/mtBwFmCT)

### Agent, Client e Server

- **Agent:** processo que fica sendo executado em todos nós do cluster. Pode estar sendo executado em Client Mode ou Server Mode.

- **Client:** registra os serviços localmente, Health Check, encaminha as informações e configurações dos serviços para o Server

- **Server:** mantém o estado do cluster, registra os serviços, Membership (que é o client e que é o server), retorno de queries (DNS ou API), troca de informações entre datacenters, etc.

#### Dev Mode

- Nunca utilize em produção
- Não é recomendado para ambientes de produção
- Roda como servidor
- Não escala
- Registra tudo em memória

### Iniciando um agente consul

Crie um arquivo `docker-compose.yml` e inclua o seguinte código:

<details><summary><b>docker-compose.yml</b></summary>
<br/>

```yml
version: '3'

services:
  consul01:
    image: consul:1.10
    container_name: consul01
    hostname: consul01
    command: ['tail', '-f', '/dev/null']
```

</details>
<br/>

Em seguida execute o comando abaixo:

```bash
docker-compose up -d
docker compose ps
```

Agora que está executando, queremos entrar nesse container. Para isso, execute o comando abaixo:

```bash
docker exec -it consul01 sh
```

Dentro do container, execute o comando abaixo:

```bash
consul agent -dev
```

O que esse comando faz? Ele inicia o agente consul em modo de desenvolvimento. E, ele vai executar em modo de servidor e client. 
Para ver como podemos trabalhar com comunicação entre sistemas, abre um novo terminal e repita os passos para entrar no container. Depois que entrar no container, digite agora:

```bash
consul members
```

O que esse comando faz? Ele mostra os membros que estão no cluster. E, como estamos em modo de desenvolvimento, ele mostra apenas um membro.

```bash
/ # consul members
Node      Address         Status  Type    Build    Protocol  DC   Segment
consul01  127.0.0.1:8301  alive   server  1.10.12  2         dc1  <all>
```

Vamos acessar agora os `catalogs`. Para isso, digite o seguinte comando:

```bash
curl localhost:8500/v1/catalog/nodes
```

Ao digitar esse comando apresentará o seguinte resultado:

```json
[
  {
    "ID": "2a90e273-580a-848f-66d8-2b70a74bc1ff",
    "Node": "consul01",
    "Address": "127.0.0.1",
    "Datacenter": "dc1",
    "TaggedAddresses": {
      "lan": "127.0.0.1",
      "lan_ipv4": "127.0.0.1",
      "wan": "127.0.0.1",
      "wan_ipv4": "127.0.0.1"
    },
    "Meta": {
      "consul-network-segment": ""
    },
    "CreateIndex": 11,
    "ModifyIndex": 12
  }
]
```

O plano de controle do Consul contém um ou mais `datacenters`. Um `datacenter` é a menor unidade da infraestrutura do Consul que pode realizar operações básicas do Consul. Um datacenter contém pelo menos um agente de servidor Consul, mas uma implantação no mundo real contém três ou cinco agentes de servidor e vários agentes de cliente do Consul. Você pode criar vários datacenters e permitir que nós em diferentes datacenters interajam entre si. Mais informações **[AQUI](https://developer.hashicorp.com/consul/docs/architecture)**.

E, mais sobre Gossip Protocol **[AQUI](https://developer.hashicorp.com/consul/docs/architecture/gossip)**.
Com Consul, você consegue trabalhar com API e Servidor DNS.

Vamos criar um servidor DNS. Mas, antes precisamos atualizar o `bind-tools`. Para isso, execute o comando abaixo:

```bash
apk -U add bind-tools
```

Agora, vamos fazer a consulta. Para isso, digite o seguinte comando:

```bash
dig @localhost -p 8600 consul01.node.consul
```

Ele retornar o ip do servidor consul: `consul01.node.consul.   0       IN      A       127.0.0.1`

### Criando nosso cluster

Vamos criar um cluster com 3 nós. Para isso, crie um arquivo chamado: `docker-compose.yml` e inclua o seguinte código:

<details><summary><b>docker-compose.yml</b></summary>
<br/>

```yml
version: '3'

services:
  consulserver01:
    image: consul:1.10
    container_name: consulserver01
    hostname: consulserver01
    command: ['tail', '-f', '/dev/null']
  consulserver02:
    image: consul:1.10
    container_name: consulserver02
    hostname: consulserver02
    command: ['tail', '-f', '/dev/null']
  consulserver03:
    image: consul:1.10
    container_name: consulserver03
    hostname: consulserver03
    command: ['tail', '-f', '/dev/null']
```
</details>
<br/>

E, novamente execute o comando abaixo:

```bash
docker-compose up -d
docker compose ps
```

Agora vamos levantar o cluster. Para isso, execute o comando abaixo:

```bash
docker exec -it consulserver01 sh
```

Agora vamos iniciar o agente consul. Mas, antes precisamos identificar o ip da máquina. Para isso, execute o comando abaixo: (rede do Docker)

```bash
ifconfig
```

> Resposta: `addr:<numero-do-ip-eth0>` (rede do Docker)

Agora, vamos executar o comando do consul para executar o agente. Para isso, execute o comando abaixo:

```bash
mkdir /etc/consul.d
mkdir /var/lib/consul
```

```bash
consul agent -server -bootstrap-expect=3 -node=consulserver01 -bind=<numero-do-ip-eth0> -data-dir=/var/lib/consul -config-dir=/etc/consul.d
```

Após executar esse comando, abre um novo terminal e vamos verificar os `members`. Para isso, execute o comando abaixo:

```bash
docker exec -it consulserver01 sh
```

E, dentro do container execute o comando abaixo:

```bash
consul members
```

> Resposta: 

```bash
/ # consul members
Node            Address          Status  Type    Build    Protocol  DC   Segment
consulserver01  <numero-do-ip-eth0>:8301  alive   server  1.10.12  2         dc1  <all>
```

Vamos criar um novo agente. Para isso, abre um novo terminal e execute o comando abaixo:

```bash
docker exec -it consulserver02 sh
```

E, dentro do container execute o comando abaixo:

```bash
ifconfig
```

> Resposta: `addr:<numero-do-ip-eth0>` (rede do Docker) 

Agora, vamos executar o comando do consul para executar o agente. Para isso, execute o comando abaixo:

```bash
mkdir /etc/consul.d
mkdir /var/lib/consul
```

```bash
consul agent -server -bootstrap-expect=3 -node=consulserver02 -bind=<numero-do-ip-eth0> -data-dir=/var/lib/consul -config-dir=/etc/consul.d
```

Após executar esse comando, abre um novo terminal e vamos verificar os `members`. Para isso, execute o comando abaixo:

```bash
docker exec -it consulserver01 sh
```

E, dentro do container execute o comando abaixo:

```bash
consul members
```

Ok. Agora temos 2 servidores executando em máquinas diferentes. Porém, queremos que eles se comuniquem. Para isso, execute o comando abaixo:

```bash
consul join <numero-do-ip-eth0>
```

Aparecerá a seguinte mensagem: `Successfully joined cluster by contacting 1 nodes.`

Agora, digitar o comando `consul members`, aparecerá os 2 servidores sendo executados em um único `cluster`.

Mas, nos propusemos a colocar 3 servidores. Então, vamos criar um novo agente. Para isso, abre um novo terminal e execute o comando abaixo:

```bash
docker exec -it consulserver03 sh
```

E, dentro do container execute o comando abaixo:

```bash
ifconfig
```

> Resposta: `addr:<numero-do-ip-eth0>` (rede do Docker)

Agora, vamos executar o comando do consul para executar o agente. Para isso, execute o comando abaixo:

```bash
mkdir /etc/consul.d
mkdir /var/lib/consul
```

```bash
consul agent -server -bootstrap-expect=3 -node=consulserver03 -bind=172.20.0.3 -data-dir=/var/lib/consul -config-dir=/etc/consul.d
```

Após executar esse comando, abre um novo terminal e vamos verificar os `members`. Para isso, execute o comando abaixo:

```bash
docker exec -it consulserver03 sh
```

E, dentro do container execute o comando abaixo:

```bash
consul members
```

Agora podemos notar que as 3 máquinas estão executando em um único `cluster`

### Criando primeiro client

Agora será o momento da gente criar o `client`. Para isso, vamos adicionar no arquivo `docker-compose.yml` o seguinte código:

<details><summary><b>docker-compose.yml</b></summary>
<br/>

```yml
version: '3'

services:
  consulserver01:
    image: consul:1.10
    container_name: consulserver01
    hostname: consulserver01
    command: ['tail', '-f', '/dev/null']
  consulserver02:
    image: consul:1.10
    container_name: consulserver02
    hostname: consulserver02
    command: ['tail', '-f', '/dev/null']
  consulserver03:
    image: consul:1.10
    container_name: consulserver03
    hostname: consulserver03
    command: ['tail', '-f', '/dev/null']

  consulclient01:
    image: consul:1.10
    container_name: consulclient01
    hostname: consulclient01
    command: ['tail', '-f', '/dev/null']
		volumes: 
			- ./clients/consul01:/etc/consul.d
```

</details>
<br/>

Agora, na raiz do projeto, crie uma pasta chamado: `clients/consul01`. E, agora digite o comando:

```bash
docker-compose up -d
docker compose ps
```

E, agora vamos executar o comando para iniciar o agente. Para isso, execute o comando abaixo:

```bash
docker exec -it consulclient01 sh
```

E, dentro do container execute o comando abaixo:

```bash
ifconfig
```

> Resposta: `addr:<numero-do-ip-eth0>` (rede do Docker)

Agora, vamos executar o comando do consul para executar o agente. Para isso, execute o comando abaixo:

```bash
mkdir /etc/consul.d
mkdir /var/lib/consul
```

```bash
consul agent -bind=<numero-do-ip-eth0> -data-dir=/var/lib/consul -config-dir=/etc/consul.d
```

No momento em que a gente executar o comando acima, observe que o agent `client` vai executar. Porém, note que no final da execução há uma mensagem de error: `2023-09-27T02:03:05.696Z [ERROR] agent.anti_entropy: failed to sync remote state: error="No known Consul servers"`. O que isso quer nos dizer? Que o `client` não está conseguindo se comunicar com o `server`. Para isso, vamos executar o comando abaixo:

> não se esqueça de realizar todo o processo de reinicialização do cluster, caso tenha parado. 

```bash
consul join <numero-do-ip-eth0>
```

Apresentará a seguinte mensagem: `Successfully joined cluster by contacting 1 nodes.`
E, no lado do server, apresentará a seguinte mensagem abaixo:

```bash
2023-09-27T02:11:56.533Z [INFO]  agent.server.serf.lan: serf: EventMemberJoin: consulclient01 <ip-do-client>`. 
```

E, agora vamos executar o comando para verificar os `members`. Para isso, execute o comando abaixo:

```bash
consul members
```

Você verá que o `client` está se comunicando com o `server`.

### Registrando o serviço

Dentro da pasta `clients/consul01` crie um arquivo chamado: `services.json` e inclua o seguinte código:

<details><summary><b>services.json</b></summary>
<br/>

```json
{
	"service": {
		"id": "nginx",
		"name": "nginx",
		"tags": ["web"],
		"port": 80
	}
}
```

Após isso, reinicie o `client` e execute o comando abaixo:

> na mesma tela do prompt onde foi executado o comando: consul join <ip-do-server>

```bash
consul reload
```

Aparecerá a seguinte mensagem: `Configuration reload triggered`. Agora, na mesma tela, digite o comando:

```bash
apk -U add bind-tools
```

E, agora o comando:

```bash
dig @localhost -p 8600 nginx.service.consul
```

### Registrando segundo serviço com retry join

Abre o arquivo `docker-compose.yml` e inclua o seguinte código:

<details><summary><b>docker-compose.yml</b></summary>
<br/>

```yml
version: '3'

services:
  consulserver01:
    image: consul:1.10
    container_name: consulserver01
    hostname: consulserver01
    command: ['tail', '-f', '/dev/null']

  consulserver02:
    image: consul:1.10
    container_name: consulserver02
    hostname: consulserver02
    command: ['tail', '-f', '/dev/null']

  consulserver03:
    image: consul:1.10
    container_name: consulserver03
    hostname: consulserver03
    command: ['tail', '-f', '/dev/null']

  consulclient01:
    image: consul:1.10
    container_name: consulclient01
    hostname: consulclient01
    command: ['tail', '-f', '/dev/null']
    volumes:
      - ./clients/consul01:/etc/consul.
      
  consulclient02:
    image: consul:1.10
    container_name: consulclient02
    hostname: consulclient02
    command: ['tail', '-f', '/dev/null']
    volumes:
      - ./clients/consul02:/etc/consul.d
```

</details>
<br/>

E dentro da pasta `clients/consul02` crie um arquivo chamado: `services.json` e inclua o seguinte código:

<details><summary><b>services.json</b></summary>

```json
{
  "service": {
    "id": "nginx2",
    "name": "nginx",
    "tags": ["web"],
    "port": 80
  }
}
```

</details>
<br/>

Agora, vamos executar o comando abaixo:

```bash
docker-compose up -d
docker compose ps
```

E, agora vamos executar o comando para iniciar o agente. Para isso, execute o comando abaixo:

```bash
docker exec -it consulclient02 sh
```

E, dentro do container execute o comando abaixo:

```bash
ifconfig
```

> Resposta: `addr:<numero-do-ip-eth0>` (rede do Docker)

Agora, vamos executar o comando do consul para executar o agente. Para isso, execute o comando abaixo:

```bash
mkdir /etc/consul.d
mkdir /var/lib/consul
```

> no -retry-join incluir o ip do outro server

```bash
consul agent -bind=<numero-do-ip-eth0> -data-dir=/var/lib/consul -config-dir=/etc/consul.d -retry-join=<numero-do-ip-eth0>
```

Agora execute o comando abaixo:

```bash
docker exec -it consulclient02 sh
```

E, dentro do container execute o comando abaixo:

```bash
consul members
```

Na mesma tela, execute o comando abaixo:

```bash
apk -U add bind-tools
```

E, agora o comando:

```bash
dig @localhost -p 8600 nginx.service.consul
```

### Implementando checks

Se você deseja saber um pouco mais sobre Health Checks no consul, acesse [aqui](https://developer.hashicorp.com/consul/docs/services/usage/checks).

Bom abre o arquivo `services.json` e inclua o seguinte código:

```json
{
  "service": {
    "id": "nginx",
    "name": "nginx",
    "tags": ["web"],
    "port": 80,
    "check": {
      "id": "nginx",
      "name": "HTTP 80",
      "http": "http://localhost",
      "interval": "10s",
      "timeout": "1s"
    }
  }
}
```

Agora digite o comando:

```bash
consul reload
```

E, agora o comando:

```bash
dig @localhost -p 8600 nginx.service.consul
```

### Sincronizando server via arquivo

Crie uma pasta chamada `servers/server01` e dentro dela crie um arquivo chamado: `server.json` e inclua o seguinte código:

```json
{
  "server": true,
  "bind_addr": "172.20.0.2",
  "bootstrap_expect": 3,
  "data_dir": "/tmp",
  "retry_join": ["172.20.0.4", "172.20.0.3"]
}
```

Altere o arquivo `docker-compose.yml` e inclua o seguinte código:

```yml
version: '3'

services:
  consulserver01:
    image: consul:1.10
    container_name: consulserver01
    hostname: consulserver01
    command: ['tail', '-f', '/dev/null']
    volumes:
      - ./servers/server01:/etc/consul.d

  consulserver02:
    image: consul:1.10
    container_name: consulserver02
    hostname: consulserver02
    command: ['tail', '-f', '/dev/null']

  consulserver03:
    image: consul:1.10
    container_name: consulserver03
    hostname: consulserver03
    command: ['tail', '-f', '/dev/null']

  consulclient01:
    image: consul:1.10
    container_name: consulclient01
    hostname: consulclient01
    command: ['tail', '-f', '/dev/null']
    volumes:
      - ./clients/consul01:/etc/consul.

  consulclient02:
    image: consul:1.10
    container_name: consulclient02
    hostname: consulclient02
    command: ['tail', '-f', '/dev/null']
    volumes:
      - ./clients/consul02:/etc/consul.d
```

> o processo de alteração se repitirá para o `consulserver02` e `consulserver03`

Agora que você criou uma pasta/arquivo para o `consulserver02` e `consulserver03`, modifique os volumes de ambos no `docker-compose.yml`.

```yml
version: '3'

services:
  consulserver01:
    image: consul:1.10
    container_name: consulserver01
    hostname: consulserver01
    command: ['tail', '-f', '/dev/null']
    volumes:
      - ./servers/server01:/etc/consul.d

  consulserver02:
    image: consul:1.10
    container_name: consulserver02
    hostname: consulserver02
    command: ['tail', '-f', '/dev/null']
    volumes:
      - ./servers/server02:/etc/consul.d

  consulserver03:
    image: consul:1.10
    container_name: consulserver03
    hostname: consulserver03
    command: ['tail', '-f', '/dev/null']
    volumes:
      - ./servers/server03:/etc/consul.d

  consulclient01:
    image: consul:1.10
    container_name: consulclient01
    hostname: consulclient01
    command: ['tail', '-f', '/dev/null']
    volumes:
      - ./clients/consul01:/etc/consul.

  consulclient02:
    image: consul:1.10
    container_name: consulclient02
    hostname: consulclient02
    command: ['tail', '-f', '/dev/null']
    volumes:
      - ./clients/consul02:/etc/consul.d
```

Agora, execute o comando abaixo:

```bash
docker-compose up -d
docker compose ps
```

E, agora vamos executar o comando para iniciar o agente. Para isso, execute o comando abaixo:

```bash
docker exec -it consulserver02 sh
```

E, dentro do container execute o comando abaixo:

```bash
consul agent -config-dir=/etc/consul.d
```

### Trabalhando com criptografia


(...refazer essa aula posteriormente...)

### User Interface e dicas para Produção


(...refazer essa aula posteriormente...)
