const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/users', (req, res) => {
    res.send('El usuario ha sido recibido !!!')
})

app.listen(3000, function() { 
    console.log( "The server is running" ) ;
})