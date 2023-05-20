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























