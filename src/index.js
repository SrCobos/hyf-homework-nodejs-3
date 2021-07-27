const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/users', (req, res) => {
    res.send('Haz recibido al usuario')
})

app.listen(3000, function() { 
    console.log( "The server is running" ) ;
})