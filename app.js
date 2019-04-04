var redis = require("redis");
var client = redis.createClient();

client.on('connect', function () {
    console.log('Connected');
    client.set('total', 1800);

    // Retorno
    // { 'portugues', 'Brasil', 'espanhol', 'Espanha' }
    client.hmset('languages', 'portugues', 'Brasil', 'espanhol', 'Espanha');

    client.hgetall('languages', function (err, object) {
        console.log(object);
    })

    client.rpush(['frameworks', 'angular', 'react', 'vue'], function (err, reply) {
        console.log(reply);
    });

    // Retorna todos os itens com a chave framework
    // lrange frameworks 0 -1
    client.lrange('frameworks', 0, -1, function (err, reply) {
        console.log(reply);
    });

    // Set não permite inserir dados duplicados
    client.sadd(['tags', 'angularjs', 'angularjs', 'backbonejs', 'emberjs'], function (err, reply) {
        console.log(reply);
    });

    // Retorna os dados do Set
    // smembers tags
    client.smembers('tags', function (err, reply) {
        console.log(reply);
    });

    // Set tempo de expiração de dado, esse é de 10 segundos
    client.expire('total', 10);

    // Remove instantaneamente o registro
    // del tags
    client.del('frameworks', function(err, reply) {
        console.log(reply);
    });
});