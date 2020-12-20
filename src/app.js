//Importer fastifer
const fastify = require('fastify')();
fastify.register(require('fastify-cors'), {
    logger: true
});

const pgDB = require("./query.js");

//Creation du enpoint rest qui renvoie l'objet json ci-dessous
fastify.get('/', async (request, reply) => {
    reply.type('application/json').code(200);
    
    return {"name":"Simple NodeJs App","deploy_type":"Cloud Native","deploy_on":"compose","Author":"mombe090"}
});

fastify.get('/users', pgDB.getUsers);
fastify.get('/users/:id', pgDB.getUserById);
fastify.post('/users', pgDB.createUser);
fastify.put('/users/:id', pgDB.updateUser);
fastify.delete('/users/:id', pgDB.deleteUser);

//Demarrer le serveur fastify.
fastify.listen(3000, '0.0.0.0', (err, address) => {
    if (err) throw err;
    fastify.log.info(`Server a bien demarrer sur l'adresse suivante ${address}`)
});


