const express = require('express');

const app = express();
const port = 3000;

const jogadores = ['José', 'Maria', 'João', 'Marcos', 'Fernanda'];

let index = 0;

app.get('/', (req, res) => {

    res.send(jogadores[index]);

    index = (index + 1) % jogadores.length;

});

app.listen(port, () => {
    console.log(`> > > Servidor inicializado na porta ${port}`);
})