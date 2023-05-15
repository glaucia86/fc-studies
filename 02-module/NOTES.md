# Notes

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