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

<details><summary><b>course_category.proto</b></summary>
<br/>

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

</details>
<br/>

O que esse arquivo faz? Ele define o contrato da comunicação entre o client e o server, ou seja, ele define o que o client pode enviar e o que o server pode receber e vice-versa.

5. Agora execute o comando abaixo para gerar o código

```bash
protoc --go_out=. --go-grpc_out=. proto/course_category.proto
```

Será gerado uma pasta dentro de `internal` chamada `pb` e dentro dela terá os arquivos: `course_category.pb.go` e `course_category_grpc.pb.go`

[![Screen-Shot-08-10-23-at-07-22-PM.png](https://i.postimg.cc/5ty0QqFk/Screen-Shot-08-10-23-at-07-22-PM.png)](https://postimg.cc/qtf09Kw8)

6. Agora crie uma pasta chamada `service` e dentro dela crie um arquivo: `category.go` e cole o seguinte código:

<details><summary><b>service/category.go</b></summary>
<br/>

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

</details>
<br/>

7. Agora vamos criar o servidor do gRPC, para isso crie uma pasta chamada `cmd/grpcServer` e dentro da pasta crie um arquivo chamado: `main.go` e cole o seguinte código:

<details><summary><b>main.go</b></summary>
<br/>

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

</details>
<br/>

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

<details><summary><b>course_category.proto</b></summary>
<br/>

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

</details>
<br/>

Agora execute o comando abaixo para gerar o código:

```bash
protoc --go_out=. --go-grpc_out=. proto/course_category.proto
```

Agora nós vamos implementar esse serviço. Para isso, abre o arquivo: `category.go` e inclua o seguinte código:

<details><summary><b>category.go</b></summary>
<br/>

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

</details>
<br/>

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

<details><summary><b>course_category.proto</b></summary>
<br/>

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

</details>
<br/>

Agora vamos atualizar o que recentemente colocar no código usando o comando: 

```bash
protoc --go_out=. --go-grpc_out=. proto/course_category.proto
```

Agora é o momento da gente fazer a implementação dessa interface chamada `GetCategory`. Para isso, abra o arquivo: `service/category.go` e inclua o seguinte código:

<details><summary><b>service/category.go</b></summary>
<br/>

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

</details>
<br/>

Precisamos antes de executar esse código, atualizar o arquivo `database/category.go` para incluir o seguinte código:

<details><summary><b>database/category.go</b></summary>
<br/>

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

</details>
<br/>