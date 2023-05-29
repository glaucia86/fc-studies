# Notes

## Iniciando com Docker

Aqui são algumas anotações sobre os apredizagem do módulo 02.

**Volumes:** são containers que armazenam dados de outros containers. É possível criar volumes para armazenar dados de um banco de dados, por exemplo.

```bash
docker volume create <nome do volume>
```

```bash
docker volume ls
```

```bash
docker volume inspect <nome do volume>
```

```bash
docker volume rm <nome do volume>
```

```bash
docker run -d --name <nome do container> -v <nome do volume>:/<caminho do volume> <nome da imagem>
```

- **Network**: é uma forma de comunicação entre containers. É possível criar uma rede para que os containers se comuniquem entre si.

```bash
docker network create <nome da rede>
```

```bash
docker network ls
```

```bash
docker network inspect <nome da rede>
```

- **Cache**: é uma forma de armazenar imagens em cache para que o Docker não precise baixar novamente a imagem.
  - Registry: é um repositório de imagens.

```bash
docker build -t <nome da imagem> .
```

```bash
docker build --no-cache -t <nome da imagem> .
```

- Daemon: API do Docker que fica escutando requisições para executar comandos.

  - Docker Client: é a CLI do Docker que envia comandos para o Daemon.
    - Containers
    - Run, Pull, Push
    - Volumes
    - Network 

### Alguns comandos importantes do Docker

* **deteched**: executa o container em segundo plano

```bash
docker run -d <nome da imagem>
```

Exemplo do nginx na porta 8080 usando o deteched:

```bash
docker run -d -p 8080:80 nginx
```

* **ps**: lista os containers que estão rodando

```bash
docker ps
```

* **ps -a**: lista todos os containers

```bash
docker ps -a
```

* **stop**: para o container

```bash
docker stop <nome do container>
```

* **start**: inicia o container

```bash
docker start <nome do container>
```

* **rm**: remove o container

```bash
docker rm <nome do container>
```

* **name**: define o nome do container

```bash
docker run --name <nome do container> <nome da imagem>
```

Para parar um determinado container, basta executar o comando abaixo:
  
```bash
docker stop <container name>
```

Se você deseja remover todos os containers, basta executar o comando abaixo:

```bash	
docker rm $(docker ps -aq)
```

E, para forçar a remoção de um container, basta executar o comando abaixo:

```bash
docker rm -f <container name>
```

Exemplo com nginx

```bash
docker run --name meu-nginx nginx
```

Porém, como entrar no Container? Para isso, é necessário executar o comando abaixo:

```bash
docker exec -it <nome do container> bash
```

Se eu desejar listar o container que já está executando em segundo plano, basta executar o comando abaixo:

```bash
docker exec -it <nome do container> ls
```

Se você desejar entrar no container do `nginx` e alterar o arquivo `index.html` e abrir esse arquivo usando o `vim`, basta executar os comandos abaixo:

```bash
docker exec -it meu-nginx bash
```

```bash
cd /usr/share/nginx/html
```

Porém, você precisa instalar o `vim` no container. Para isso, basta executar o comando abaixo:

```bash
apt-get update
```

```bash
apt-get install vim
```

Agora, você pode alterar o arquivo `index.html` usando o `vim`:

```bash
vim index.html
```

Para sair do `vim`, basta executar o comando `:q`.

### Trabalhando com Bind Mounts

* **bind mounts**: é uma forma de compartilhar arquivos entre o host e o container.

```bash
docker run -d -p 8080:80 -v <caminho do host>:<caminho do container> <nome da imagem>
```

Exemplo com nginx usando volumes e indo até o diretório da máquina local onde contém os arquivos da pasta onde criamos agora pouco o arquivo em `02-module -> html -> index.html`:

```bash
docker run -d --name nginx -p 8080:80 -v "%cd%":/usr/share/nginx/html nginx
```

Porém, podemos usar um outro comando mais atualizado do Docker: `--mount`. Para isso, basta executar o comando abaixo, usando o mesmo exemplo acima:

```bash
docker run -d --name nginx -p 8080:80 --mount type=bind,source="%cd%",target=/usr/share/nginx/html nginx
```

### Trabalhando com Volumes

Vamos agora criar um volume em Docker. Para isso, basta executar o comando abaixo:

```bash
docker volume create <nome do volume>
```

Se você deseja listar os volumes, basta executar o comando abaixo:

```bash
docker volume ls
```

Se você deseja inspecionar o volume, basta executar o comando abaixo:

```bash
docker volume inspect <nome do volume>
```

Agora se você desejar realizar o bind mount usando o volume, basta executar o comando abaixo:

```bash
docker run --name nginx -d --mount type=volume,source=meuvolume,target=/app nginx
```

A partir daí, pode até criar arquivos dentro do container que ele vai ser salvo no volume.

Se você deseja criar com o volume, basta executar o comando abaixo:

```bash
docker run --name nginx3 -d -v meuvolume:/app nginx
```

Se você tiver volumes que não estão mais sendo usados, você pode executar o comando `prune` para remover os volumes que não estão sendo usados. Para isso, basta executar o comando abaixo:

```bash
docker volume prune
```

## Trabalhando com Imagens

Para listar as imagens, basta executar o comando abaixo:

```bash
docker images
```

E para remover uma imagem, basta executar o comando abaixo:

```bash
docker rmi <nome da imagem>
```

## Trabalhando com Dockerfile

O que é um Dockerfile? É um arquivo que contém instruções para criar uma imagem. Para criar um Dockerfile, basta executar o comando abaixo:

```bash
touch Dockerfile
```

Agora, vamos criar um Dockerfile com o seguinte conteúdo:

```dockerfile
FROM nginx:latest

RUN apt-get update 
RUN apt-get install -y vim
```

Agora, vamos criar uma imagem a partir do Dockerfile. Para isso, basta executar o comando abaixo:

```bash
docker build -t glaucia86/nginx-com-vim:latest .
```

**WORKDIR**: é uma forma de definir o diretório de trabalho.
**COPY**: é uma forma de copiar arquivos do host para o container.

```dockerfile
FROM nginx:latest

WORKDIR /app

RUN apt-get update && \  
    apt-get install vim -y

COPY html /usr/share/nginx
```

> observação: o comando `docker rm $(docker ps -a -q) -f` remove todos os containers que estão parados.

Se você desejar usar o CMD para executar um 'Hello World', basta executar o comando abaixo:

```dockerfile
FROM ubuntu:latest

CMD ["echo", "Hello World!"]
```

Executando o comando `docker build`:

```bash
docker build -t glaucia86/hello:latest .
```

Executando o comando `docker run`:

```bash
docker run --rm glaucia86/hello:latest
```

Agora como teste de que podemos alterar o 'echo' do CMD, basta executar o comando abaixo:

```bash
docker run --rm glaucia86/hello:latest echo "Hello World! - Glaucia Lemos"
```

O que é o **ENTRYPOINT**? É uma forma de executar um comando quando o container é iniciado.

Vamos entender agora como funciona o **ENTRYPOINT**. Para isso, vamos criar um Dockerfile com o seguinte conteúdo:

```dockerfile
FROM ubuntu:latest

ENTRYPOINT ["echo", "Hello"]

CMD ["echo", "World!"]
```

## Network

O que é o **Network**? É uma forma de conectar os containers entre si. 

Existem tipos de network: **brigde**, **host** e **none**.

* **brigde**: é uma forma de conectar os containers entre si, porém, não é possível conectar com o host.

* **host**: é uma forma de conectar os containers com o host.

* **overlay**: é uma forma de conectar os containers entre si, porém, é necessário ter um cluster de Docker Swarm.

* **maclan**: 

* **none**: é uma forma de não conectar os containers com o host.

### Trabalhando com Bridge

Vamos primeiramente criar um container:

```bash
docker run -d -it --name ubuntu1 bash
```

E outro container

```bash
docker run -d -it --name ubuntu2 bash
```

Para inspecionar o container, basta executar o comando abaixo:

```bash
docker network inspect bridge
```

O resultado do comando acima:

<details><summary><b>Inspect Network</b></summary>

```bash
[
    {
        "Name": "bridge",
        "Id": "88710ce52b1f05a1f1a4bad41e2e2613acfe61de98113d31e9cc365cc658e84b",
        "Created": "2023-05-22T20:01:59.027658328Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": null,
            "Config": [
                {
                    "Subnet": "172.17.0.0/16",
                    "Gateway": "172.17.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "72c31c2b7a235fc56f7237b573f78b987a9802623f1057bdb4f380774772d132": {
                "Name": "ubuntu2",
                "EndpointID": "106a09f3419f0ff62e407ffc2227defd33183ebff2c2441a1955f980b1dd91da",
                "MacAddress": "02:42:ac:11:00:03",
                "IPv4Address": "172.17.0.3/16",
                "IPv6Address": ""
            },
            "7ff2fec002415f8bb29fa78405f9004a67e94a5544d0d3d724644a2f71ad03b4": {
                "Name": "ubuntu1",
                "EndpointID": "f4ac4ac5715f23ef1b3906617a0d7d2ed74f75a1eb695e55c648ead0366458ab",
                "MacAddress": "02:42:ac:11:00:02",
                "IPv4Address": "172.17.0.2/16",
                "IPv6Address": ""
            }
        },
        "Options": {
            "com.docker.network.bridge.default_bridge": "true",
            "com.docker.network.bridge.enable_icc": "true",
            "com.docker.network.bridge.enable_ip_masquerade": "true",
            "com.docker.network.bridge.host_binding_ipv4": "0.0.0.0",
            "com.docker.network.bridge.name": "docker0",
            "com.docker.network.driver.mtu": "1500"
        },
        "Labels": {}
    }
]
```

</details>
<br />

Para entrar no modo `attach` de um container, basta executar o comando abaixo:

```bash
docker attach ubuntu1
```

Vamos agora criar uma network do tipo **brigde**. Para isso, basta executar o comando abaixo:

```bash
docker network create --driver bridge minharede
```

Agora que criamos a network, vamos executar o comando abaixo para conectar os containers na network:

```bash
docker run -dit --name ubuntu1 --network minharede bash
```

```bash
docker run -dit --name ubuntu2 --network minharede bash
```

Vamos entrar em um desses networks:

```bash
docker exec -it ubuntu1 bash
```

```
ping ubuntu2
```

Crie agora uma network fora da bridge:

```bash
docker run -dit --name ubuntu3 bash
```

Ao tentar executar o comando `ping ubuntu3` não irá funcionar. Pois, o container ubuntu3 não está na mesma network que os outros containers. 

Porém, se você executar o comando abaixo:

```bash
docker network connect minharede ubuntu3
```

Agora sim, você conseguirá executar o comando `ping ubuntu3`.

E, por fim se desejar inspecionar a network, basta executar o comando abaixo:

```bash
docker network inspect minharede
```

E, veja o resultado. Você encontrará os containers: ubuntu1, ubuntu2 e ubuntu3 conectados na mesma network.

<details><summary><b>Inspect Network</b></summary>

```bash
[
    {
        "Name": "minharede",
        "Id": "77a4fd67d51c0b07f9f2116de1e626dab75cf148fc6ce3f0fd2760dcc8f959d6",
        "Created": "2023-05-22T22:41:41.520043482Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "172.18.0.0/16",
                    "Gateway": "172.18.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "0e97c6f21b3269cec7af400bf6a1e64ccc1668b9b8932c28049c552e74f2dfdc": {
                "Name": "ubuntu1",
                "EndpointID": "1bc6dba3ddbaae7cc8007e7e6c520e60d85cee8ae643cfdcee07bf77ebcb91b8",
                "MacAddress": "02:42:ac:12:00:02",
                "IPv4Address": "172.18.0.2/16",
                "IPv6Address": ""
            },
            "68c31c456152dfed13a984d3cc599f8e0dc13a592821ffae137b086b6bd457db": {
                "Name": "ubuntu2",
                "EndpointID": "bbbe6363e681a00ea3d5b5f9df8e5fc08f2b20e653a0ffe83dd53cadbcf1f087",
                "MacAddress": "02:42:ac:12:00:03",
                "IPv4Address": "172.18.0.3/16",
                "IPv6Address": ""
            },
            "85ec3ca86298e6ed7c5a327017dbdaec7dc18c2da26dbe8a7283bcd20d65a010": {
                "Name": "ubuntu3",
                "EndpointID": "a37e75490ee7ef3fa6f9a4621f71fcf172aa6f185da330239a0dbbacde0f067c",
                "MacAddress": "02:42:ac:12:00:04",
                "IPv4Address": "172.18.0.4/16",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {}
    }
]
```

</details>
<br />


### Container acessando nossa maquina

Para um container acessar nossa maquina, basta executar o comando abaixo:

```bash
docker run --rm -it --name ubuntu ubuntu bash
```

Agora execute alguma aplicação localmente na sua máquina. Seja uma aplicação node ou o que for.
Dentro do container para acessar a aplicação local, basta executar o comando abaixo:

```bash
curl host.docker.internal:3000
```

## Entrando no modo interavito do container sem ter o Node instalado na máquina

Para entrar no modo interativo do container, basta executar o comando abaixo:

```bash
docker run --rm -it -v "%cd":/usr/src/app -p 3000:3000 node:18 bash
```

```bash
docker run --rm -it -v "C:\Users\user\Documents\GitHub\docker\02-module\sample-03":/usr/src/app -p 3000:3000 node:18 bash
```

Se você desejar fazer o build de um outro arquivo Dockerfile, por exemplo: `Dockerfile.prod`, basta executar o comando abaixo:

```bash
docker build -t glaucia86/hello-world-express node/ -f node/Dockerfile.prod
```

> p.s.: no local de `node/` você pode colocar o caminho do seu Dockerfile.

## Otimizando imagens com Multi-Stage Builds

Para otimizar as imagens com o Multi-Stage Builds, deem uma olhada no exemplo criado em `sample-02 -> laravel -> Dockerfile.prod`

```dockerfile
FROM php:7.4-cli AS builder

WORKDIR /var/www

RUN apt-get update && \
    apt-get install libzip-dev -y && \
    docker-php-ext-install zip

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php && \
    php -r "unlink('composer-setup.php');"

RUN php composer.phar create-project --prefer-dist laravel/laravel laravel

FROM php:7.4-fpm-alpine
WORKDIR /var/www
RUN rm -rf /var/www/html
COPY --from=builder /var/www/laravel .
RUN ln -s public html
RUN chown -R www-data:www-data /var/www
EXPOSE 9000
CMD [ "php-fpm" ]

```

Depois de criado o Dockerfile, basta executar o comando abaixo:

```bash
docker build -t glaucia86/laravel:prod laravel/ -f laravel/Dockerfile.prod
```

## Nginx como Proxy Reverso

Basta seguir o exemplo contigo em `nginx -> nginx.conf`. Coloque as informações de configuração do nginx.conf seguindo conforme a documentação do Laravel.

Depois de criado o arquivo `nginx.conf`, crie um arquivo chamado `Dockerfile.prod` e coloque as seguintes informações:

```dockerfile
FROM nginx:1.15.0-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

RUN mkdir /var/www/html -p && touch /var/www/html/index.php
```

Agora crie a imagem do nginx com o comando abaixo:

```bash
docker build -t glaucia86/nginx:prod . -f Dockerfile.prod
``` 

Vamos criar uma network para que o nginx possa se comunicar com o container do laravel:

```bash
docker network create laranet
```

Agora vamos rodar esse network criado:

```bash
docker run --rm -d --name laravel --network laranet glaucia86/laravel:prod
```

Agora vamos fazer o nginx trabalhar, para isso execute o comando abaixo:

```bash
docker run -d --network laranet --name nginx -p 8080:80 glaucia86/nginx:prod
```

## Começando com Docker Compose

Para executar o docker-compose, basta executar o comando abaixo:

```bash
docker-compose up -d
```

Mas, lembrando que antes de executar o comando acima, é necessário criar o arquivo `docker-compose.yml` com as informações necessárias.

Exemplo

```yaml
version: '3'

services:
  laravel:
    image: glaucia86/laravel:prod
    container_name: laravel
    networks:
      - laranet

  nginx:
    image: glaucia86/nginx:prod
    container_name: nginx
    networks:
      - laranet
    ports:
      - '8080:80'

networks:
  laranet:
    driver: bridge
```

> Não se esqueça de remover os containers que foram criados anteriormente. Para isso, basta executar o comando abaixo:

```bash
docker rm $(docker ps -a -q) -f
```

Para parar o docker-compose, basta executar o comando abaixo:

```bash
docker-compose down
```

Outro detalhe importante é que, se você precisar o usar o docker-compose para fazer o build de uma imagem, basta executar o comando abaixo:

```bash
docker-compose up -d --build
```

## Trabalhando com Banco de Dados com Docker Compose

Para trabalhar com banco de dados com o docker-compose, basta seguir o exemplo contido em  { `docker-compose.yml`

```yaml
version: '3'

services:
  db:
    image: mysql:5.7
    command: --innodb-use-native-aio=0
    container_name: db
    restart: always
    tty: true
    volumes:
      - ./mysql:/var/lib/mysql
    environment:
      - MYSQL_DATABASE=nodedb
      - MYSQL_ROOT_PASSWORD=root
    networks:
      - node-network

networks:
  node-network:
    driver: bridge
```

Agora vamos executar o docker-compose:

```bash
docker-compose up -d
```

Perceba uma coisa bastante interessante, dentro da pasta `mysql`, que antes estava vazia, agora temos os arquivos do banco de dados. Ou seja, o docker-compose criou um volume para o banco de dados. Por mais que você dê um `docker-compose down` e depois um `docker-compose up -d`, os dados do banco de dados não serão perdidos.


### Configurando app node com docker-compose

Para configurar o app node com o docker-compose, basta seguir o exemplo contido em `docker-compose.yml`

```yaml
version: '3'

services:
  app:
    build:
      context: node
    container_name: app
    networks:
      - node-network
    volumes:
      - ./node:/usr/src/app
    tty: true
    ports:
      - '3000:3000'

  db:
    image: mysql:5.7
    command: --innodb-use-native-aio=0
    container_name: db
    restart: always
    tty: true
    volumes:
      - ./mysql:/var/lib/mysql
    environment:
      - MYSQL_DATABASE=nodedb
      - MYSQL_ROOT_PASSWORD=root
    networks:
      - node-network

networks:
  node-network:
    driver: bridge
```

Agora, vamos executar o docker-compose:

```bash
docker-compose up -d --build
```

Vamos entrar no container do app node:

```bash
docker exec -it app bash
```

Vamos agora entrar de modo interativo no container do mysql:

```bash
docker exec -it db bash
```

Precisaremos inserir as credenciais do mysql (dentro do modo interativo):

```bash
mysql -u root -p
```

Coloque a senha que é: `root` e digite o comando abaixo:

```bash
show databases;
```

Ao executar o comando acima, você verá que o banco de dados `nodedb` foi criado. Agora vamos criar uma tabela dentro do banco de dados `nodedb`:

```bash
use nodedb;
```

Agora vamos criar uma tabela chamada `people`:

```bash
create table people(id int not null auto_increment, name varchar(255), primary key(id));
```

Digite o comando abaixo para ver se a tabela foi criada:

```bash
desc people;
```

Perfeito! Agora, vamos retornar ao container do `app` node. Porém, vamos instalar o pacote `mysql` para que possamos fazer a conexão com o banco de dados (dentro do modo interativo):

```bash
npm install mysql --save
```

Agora, vá até o arquivo `index.js` e coloque as seguintes informações:

```javascript
const express = require('express');
const mysql = require('mysql');

const app = express();

const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};

const connection = mysql.createConnection(config);
const sql = `INSERT INTO people(name) values('Glaucia Lemos')`;
connection.query(sql);
connection.end();

app.get('/', (_req, res) => {
  res.send('<h1>Olá, Developers!</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

Execute o comando abaixo (dentro do modo interativo):

```bash
node index.js
```

Abra o outro terminal onde está executando no modo interativo o `db` e digite o comando abaixo:

```bash
select * from people;
```

Se aparecer a informação conforme abaixo com os seus dados, então, deu tudo certo:

```bash
+----+---------------+
| id | name          |
+----+---------------+
|  1 | Glaucia Lemos |
+----+---------------+
1 row in set (0.00 sec)
```














