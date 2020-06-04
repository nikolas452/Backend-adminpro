var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/hospitalDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('Bases de datos ONLINE'))
    .catch(e => { throw e });