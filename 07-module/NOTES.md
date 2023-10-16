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









