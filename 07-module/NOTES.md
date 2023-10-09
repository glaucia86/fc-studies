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






