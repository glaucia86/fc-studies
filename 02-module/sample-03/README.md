## Entrando no modo interavito do container sem ter o Node instalado na máquina

Para entrar no modo interativo do container, basta executar o comando abaixo:

```bash
docker run --rm -it -v "%cd":/usr/src/app -p 3000:3000 node:18 bash
```

Example using  If you intended to pass a host directory, use absolute path.

```bash
docker run --rm -it -v "C:\Users\user\Documents\GitHub\docker\02-module\sample-03":/usr/src/app -p 3000:3000 node:18 bash
```