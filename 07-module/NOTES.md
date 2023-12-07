# DDD: Modelagem Tática e Patterns

## Introdução

### Elementos Táticos

Quando estamos falando sobre DDD e precisamos olhar mais a fundo um bounded context, precisamos ser capazes de modelarmos de forma mais assertiva os seus principais componentes, comportamentos e individualidades, bem como suas relações.

## Entidades

### Entidades

"Uma entidade é algo único que é capaz de ser alterado de forma contínua durante um longo período de tempo." - Vaughn Vernon: Implementando Domain-Driven Design

"Uma entidade é algo que possui uma continuidade em seu ciclo de vida e pode ser distinguida independente dos atributos que são importantes para a aplicação do usuário. Pode ser uma pessoa, cidade, carro, um ticket de loteria ou uma transação bancária." - Eric Evans: Domain-Driven Design

Entidade é algo que tem Identidade. Voce consegue distinguir de quaisquer outros elementos.

### Configurando projeto TypeScript

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/tree/54220353ba7abf2a0a2415349e4fd502de918133)**

### Criando entidade anêmica

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/tree/fbbef2f4d238e75090ea4fafb935fa1293827255)**

### Regras de Negócio

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/tree/19f5cb1c8d91faf5c4452452b408ba58921d9161)**

### Consistencia constante em primeiro lugar

Se os seus dados na aplicação não estiverem consistentes, representa que você não está seguindo as regras de negócio. E, isso pode ser um problema muito sério para a sua aplicação.

### Princípio da autovalidação

Uma importante regra de ouro em relação ao princípio da autovalidação é: "Uma Entidade por padrão ela sempre vai ter que se autovalidar. Se deixar a validação para algo externo, você pode deixar a sua aplicação inconsistente."

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/8821e31f54f44e2aabae7dcfeb0235e089686dfa)**

### Entity vs ORM

Vejamos um exemplo de uma organização de um projeto

```text
Domain 
- entity
  - customer.ts (regra de negócio)

Infra (tudo relacionado ao mundo externo)
  - entity
    - model
      - customer.ts (get, set)
```

Observe bem, não podemos confudir que só porque uma determinada seja uma entidade. Pois podem ter contextos diferentes na aplicação. Uma determinada `entidade` pode se referir a regra de negócio, enquanto uma outra entidade, pode se referir a uma `model` de uma determinada `entidade` que está sendo persistida no banco de dados.

- **Domain**: é complexidade de negócio
- **Infra**: é complexidade acidental

## Value Objects

### Introdução aos objetos de valor

### Entendendo Value Objects

"Quando você se preocupa apenas com os atributos de um elemento de um model, classifique isso como um Value Object.
"Trate o Value Object como imutável." - Eric Evans: Domain-Driven Design

### Value Objects na prática

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/281e61e0a72d4727033afaf0737bb770e0262091)**

## Agregados

### Introdução aos agregados

Uma `Entidade` está totalmente correlacionada com outra `Entidade`. Por exemplo: um pedido está totalmente correlacionado com um cliente. Ou seja, um pedido não existe sem um cliente. E, um cliente não existe sem um pedido.

E, eventualmente uma `Entidade` está totalmente correlacionada com um `Objeto de Valor`. Por exemplo: um pedido está totalmente correlacionado com um endereço. Ou seja, um pedido não existe sem um endereço. E, um endereço não existe sem um pedido.

### Entendendo Agregados

#### Agregate

> "Um agregado é um conjunto de objetos associados que tratamos como uma unidade para propósito de mudança de dados." - Eric Evans: Domain-Driven Design

Exemplo:

[![Agregados](https://i.postimg.cc/gkxvgrBd/teste.png)](https://postimg.cc/F7QdRF4n)

### Agregados na prática

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/c5f4abffc367ba990cd4773758fcb48114441ea6)**

## Avançando com Testes

### Introdução aos testes automatizados

### Preparando o ambiente com testes

Vamos instalar os seguintes pacotes:

```bash
npm i -D jest @types/jest ts-node --save-dev
```

```bash
npm i -D @swc/jest @swc/cli @swc/core
```

E, agora vamos configurar o `jest` na aplicação. Para isso, digite o comando abaixo:

```bash
npx jest --init
```

Aparecerá as seguintes opções: (basta colocar conforme abaixo)

```bash
The following questions will help Jest to create a suitable configuration for your project

✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … yes
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … no
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls, instances, contexts and results before every test? … yes
```

Após isso, será criado um arquivo chamado: `jest.config.js`. E, dentro dele, vamos adicionar o seguinte código:

```ts
import type { Config } from 'jest';

const config: Config = {

  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  clearMocks: true,
  coverageProvider: "v8",
};

export default config;
```

Retorne ao arquivo `tsconfig.json` e faça as seguintes alterações:

<details><summary><b>tsconfig.json</b></summary>
<br/>

```json
{
  "compilerOptions": {
    "incremental": true,
    "rootDir": ".",
    "target": "ES2021",
    "module": "commonjs",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "strictNullChecks": false,
    "skipLibCheck": true
  },
  "include": [
    ".eslintrc.js",
    "src/**/*.ts"
  ]
}
```

</details>
<br/>

Agora, dentro da pasta: `entity` crie o seguinte arquivo: `customer.spec.ts` e adicione o seguinte código:

<details><summary><b>customer.spec.ts</b></summary>
<br/>

```ts
/**
 * file: src/entity/customer.spec.ts
 * description: file responsible for test the Customer class
 * data: 10/16/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

describe("Customer unit tests", () => {

  it("should return '1' as result", () => {
    const result = 1;
    expect(result).toBe(1);
  });
});
```

</details>
<br/>

Abre o terminal e execute o comando: `npm run test`. Esse teste que estamos criando é simplesmente para averiguar se a configuração que criamos está funcionando. Se tudo der certo é porque está tudo ok!

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/bd411eb4cd0b85500b940c4e5f0d6ca47df3fcec)**

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/42dfe10c59e32367a2e29f88f11294ce97cb0e03)**

### Testando Customer

> resalva... há error no arquivo customer.ts altere com o código abaixo:

<details><summary><b>src/entity/customer.ts</b></summary>
<br/>

```ts
/**
 * file: src/entity/customer.ts
 * description: file responsible for the Customer class
 * data: 10/06/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Address from "./address";

export default class Customer {
  private _id: string;
  private _name: string = "";
  private _address!: Address;
  private _active: boolean = false;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Customer Id is required");
    }
    if (this._name.length === 0) {
      throw new Error("Customer Name is required");
    }
  }

  // aqui agora eu tenho um modelo rico. Que representa alguma regra de negócio
  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  activate() {
    if (this._address === undefined) {
      throw new Error("Address is mandatory to activate a customer");
    }

    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  set Address(address: Address) {
    this._address = address;
  }
}

const customer = new Customer("1234", "Glaucia");
console.log(customer);
```

</details>
<br/>

Agora crie um arquivo chamado `customer.spec.ts` dentro da pasta `entity` e adicione o seguinte código:

<details><summary><b>customer.spec.ts</b></summary>
<br/>

```ts
/**
 * file: src/entity/customer.spec.ts
 * description: file responsible for test the Customer class
 * data: 10/16/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Customer from "./customer";

describe("Customer unit tests", () => {

  it("should throw an error when 'id' is empty", () => {
    expect(() => {
      new Customer("", "Glaucia Lemos");
    }).toThrowError("Id is required");
  });

  it("should throw an error when 'name' is empty", () => {
    expect(() => {
      new Customer("1234", "");
    }).toThrowError("Name is required");
  });
});
```

</details>
</br>

Execute o comando: `npm run test` e veja se o teste passou ou não. Se passou, é porque está tudo ok!

[![Captura-de-tela-2023-10-18-205636.png](https://i.postimg.cc/ZqPzYSfn/Captura-de-tela-2023-10-18-205636.png)](https://postimg.cc/v1mNXpww)

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/70e02883214f60bf8fa662e18cfeb49a9c7976ca)**

### Criando testes de Order

Crie um arquivo chamado `order.spec.ts` dentro da pasta `entity` e adicione o seguinte código:

<details><summary><b>order.spec.ts</b></summary>
<br/>

```ts
/**
 * file: src/entity/order.spec.ts
 * description: file responsible for test the Order class
 * data: 10/20/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
  it("should return throw error when 'id' is empty", () => {
    expect(() => {
      new Order("", "1", []);
    }).toThrowError("Invalid param: id");
  });

  it("should return throw error when 'Customer id' is empty", () => {
    expect(() => {
      new Order("1", "", []);
    }).toThrowError("Invalid param: customerId");
  });

  it("should return throw error when 'Order item' is empty", () => {
    expect(() => {
      new Order("1", "1", []);
    }).toThrowError("Items are required");
  });

  it("should calculate total order", () => {

    const item = new OrderItem("1", "mobile", 100);
    const item2 = new OrderItem("2", "mouse", 200);
    const order = new Order("order-1", "customer-1", [item, item2]);

    const total = order.total();

    expect(total).toBe(300);
  });
});
```

</details>
</br>

Agora, execute o comando: `npm run test` e veja se o teste passou ou não. Se passou, é porque está tudo ok!

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/cc537166727eca5758610d482cf878b478ce72c8)**

### Criando classe Product e testes

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/40eefc61b569baf6cf34ad2f88c7214d781eec4b)**

### Relacionando Item com Product

Só para recapitular, na nossa aplicação exemplo, nós temos os seguintes `Agregados`. Que são eles:

- Customer => Address
  - aqui temos um relacionamento entre value object e entidade
- Order => OrderItem
  - aqui temos um relacionamento entre value object e entidade
- Product

Então o relacionamento entre `Customer` e `Order` são por meio de `Id`. Da mesma forma, será entre `Product` com `Order`. Pois estão em agregados diferentes.

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/d8b91363e81eb70f5f89086cf999973ca3af986f)**

### Refactoring

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/5109c26957ae870a6cbfebc23cbd54e223815215)**

> p.s.: tive que desfazer o refactoring

### Jest vs SWC

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/c60e669afce60abcb7abcfc6cd9e5d51fdf16f22)**

## Domain Services

### Entendendo Domain Services

> "Um serviço de domínio é uma operação sem estado que cumpre uma tarefa específica do domínio. Muitas vezes, a melhor indicação de que você deve criar um Serviço no modelo de domínio é quando a operação que você precisa executar parece não se encaixar como um método em um Agregado ou um Objeto de Valor." ~ Vernon, Vaugh. Implementando Domain-Driven Design 

- Uma entidade pode realizar uma ação que vai afetar todas as entidades?
- Como realizar uma operação em lote?
- Como calcular algo cuja as informações constam em mais de uma entidade?

#### Domain Services: Cuidados

- Quando houver muitos Domain Services em seu projeto, **TALVEZ**, isso pode indicar que seus agregados estão anemicos.
- Domain Services são Stateless, ou seja, não possuem estado.

### Definindo nosso `ProductService`

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/8fb87e3d0ad27932c639801febb1492153f6da5e)**

### Implementando `ProductService`

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/95be76bd30eb39d167cfec7ea75977b1dea3b8d1)**

### Definindo `OrderService`

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/51b6ed63fa52ca6eddb422d6f1c4757081f5db9b)**

### Realizando cálculo com OrderService

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/60b2253be3101fa7a7947484fb464dd3e3932143)**

### Definindo políticas de Rewards

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/bfaccf6677fccb953fa42c35100679cdaec69088)**

### Implementando o programa de rewards

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/b2a623057a3135298fb1a196d81c4546180b2fbf)**

### Testando regra de reward points

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/480ac5e1d808003d12e63e99a5d44c7b42666836)**

## Repositories

### Introdução aos Repositórios

> Um repositório comumente se refere a um local de armazenamento, geralmente considerado um local de segurança ou preservação dos itens nele armazenados. Quando você armazena algo em um repositório e depois retorna para recuperá-lo, você espera que ele **esteja no mesmo estado que estava quando você o colocou lá**. Em algum momento, você pode optar por remover o item armazenado do repositório. ~ Vernon, Vaugh. Implementando Domain-Driven Design.

> Esses objetos semelhantes a coleções são persistência. Todo tipo **Agregado** persistente terá um **Repositório**. De um modo geral, existe uma relação **um-para-um entre um tipo Agregado e um Repositório.** ~ Vernon, Vaugh. Implementando Domain-Driven Design.

### Definindo Interface

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/fbfee45824cabcb1cb458694bd0279a7603349ec)**

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/4177280a4ce17cf77f5b1902ae10b3af72d1dee3)**

### Entendendo camada de Infra

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/e8a35de8020a426bdfe3425726f5e4fb4433428a)**

### Configurando sequelize

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/6eaeb92a4039c3d9f64898cde078572ef6d6ae5f)**

### Verificando Jest com Sequelize

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/5712f3b407f5bdce2f4ff8888aa62aee763e9718)**

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/6191f115a51e880dff10d1d9290c9964d82c2c4d)**

### Implementando `ProductRepository`

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/bfe536afd82e466ff595c132d06e3f18d92807a2)**

### Implementando `CustomerRepository`

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/22ea02f19bf00c5a81280cb53989e070cec7c7a5)**

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/9a16cb7cb62386442101e866f894d7c28144e405)**

### Criando teste para `OrderRepository`

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/56ed63a6da6fa8a9b4a930aadcf5a40b1e88d4ab)**

### Criando teste para `OrderRepository`

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/3a7b27ffc281c96115057980f145922d4ad0c469)**

### Implementando `OrderRepository`

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/9ddbe261a4fdc23b9907b1a7e4abc929e5c4d717)**

## Domain Events

"Use um evento de domínio para capturar uma ocorrência de algo que aconteceu no domínio." ~ Vernon, Vaugh. Implementando Domain-Driven Design.

"A essencia de um evento de domínio é que você o usa para capturar coisas que podem desencadear uma mudança no estado do aplicativo que você está desenvolvendo. Esses objetos de evento são processados para causar alterações no sistema e armazenados para fornecer um AuditLog." ~ Fowler, Martin. Domain Event

Todo evento deve ser representado em uma ação realizada no passado:

- `CustomerCreated`
- `OrderCreated`
- `OrderItemCreated`

### Quando usar Domain Events?

Normalmente um Domain Event deve ser utilizado quando queremos notificar Bounded Contexts de uma mudança de estado.

### Componentes de um Domain Event

- **Event**: é a representação de um evento que ocorreu no passado.
- **Event Handler**: é a representação de um manipulador de eventos. Ele é responsável por executar uma ação quando um evento ocorre.
- **Event Dispatcher**: é responsável por armazenar e executar os handlers de um evento quando ele for disparado.

### Dinâmica

- Criar um "Event Dispatcher"
- Criar um "Evento"
- Criar um "Handler" para o "Evento"
- Registrar o Evento, juntamente com o Handler no "Event Dispatcher"

Agora para disparar um evento, basta executar o método "notify" do "Event Dispatcher". Nesse momento todos os Handlers registrados no evento serão executados.

### Definindo Interfaces

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/f65b59f4c2d896049646016dbcf31ee03612882b)**

### Definindo teste para registrar evento

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/8933b17ff45ff0a5f6c9199cf2778cd7c090f302)**

### Criando evento e event handler

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/366399b446c8f7a9c312e861c4f790d0cb5b55e0)**

### Registrando nosso primeiro evento

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/773683080576fe938bf4960cce09ab7276166b40)**

### Desregistrando eventos

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/db273434fef3bb1a4b01c53de844bb9e93e1b24c)**

### Disparando eventos

Code Developed: **[commit](https://github.com/glaucia86/fc-studies-ddd/commit/1880562c42abf0dd2c7957d3ae11971f8e6ed80d)**

### Exemplo de implementação

Code Developed: **[here](https://github.com/devfullcycle/fc-ddd-patterns/tree/domain-events)**










