//Importer fastifer
const fastify = require('fastify')({
    logger: true
});

//Import Os pour pouvoir recuper le hostname qui nous seras utile par la suite.
const os = require("os");

//Creation du enpoint rest qui renvoie l'objet json ci-dessous
fastify.get('/', async (request, reply) => {
    reply.type('application/json').code(200);
    
    return {
        'status': 'Stop putting yourself guilty'
    }
});

//Demarrer le serveur fastify.
fastify.listen(3000, '0.0.0.0', (err, address) => {
    if (err) throw err
    fastify.log.info(`Server a bien demarrer sur l'adresse suivante ${address}`)
});

