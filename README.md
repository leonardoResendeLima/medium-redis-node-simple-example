- Baixa a imagem do redis

docker pull redis

- Inicializa o Redis

docker run --name redis13 -p 6379:6379 -d redis redis-server --appendonly no