//Importer fastifer
const fastify = require('fastify')({
    logger: true
});

fastify.register(require('fastify-cors'), {
    // put your options here
});


// Import Os pour pouvoir recuper le hostname qui nous seras utile par la suite.
const os = require("os");


/*
const mongoose = require('mongoose');
mongoose.connect('mongodb://root:123456@mongo:27020/devscom', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('DB successfully connected.');
});
*/


// Creation du enpoint rest qui renvoie l'objet json ci-dessous
fastify.get('/', async (request, reply) => {
    reply.type('application/json').code(200);
    
   /* const schema = mongoose.Schema({
        name: String,
        deploy_type: String,
        deploy_on: String,
        Author: String
    });
    
    const Model = mongoose.model("model", schema, "tutos");*/
    
   /* const response = new Model({
        name: 'Simple NodeJs App',
        deploy_type: 'Cloud Native',
        deploy_on: os.hostname(),
        Author: 'mombe090'
    });
    
    response.save(function (err, doc) {
        if (err) return console.error(err)
        
        console.log('Document successfully saved.');
        return response
    })*/
    return {'status': 'Error not found'}
});

//Demarrer le serveur fastify.
fastify.listen(3000, '0.0.0.0', (err, address) => {
    if (err) throw err
    fastify.log.info(`Server a bien demarrer sur l'adresse suivante ${address}`)
});

