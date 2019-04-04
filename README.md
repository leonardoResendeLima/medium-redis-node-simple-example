Artigo Medium

https://medium.com/@programadriano/node-primeiros-passos-com-redis-9393ec2b2e6d

- Baixa a imagem do redis

docker pull redis

- Inicializa o Redis

docker run --name redis13 -p 6379:6379 -d redis redis-server --appendonly no

- Linha de comando do Redis

docker exec -it redis13 redis-cli