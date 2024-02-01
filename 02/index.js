const express = require('express');

const app = express();
const port = 8000;

let minutos = 0;
let segundos = 0;
let intervaloId;

function formatTime(min, sec) {
    return `${min.toString().padStart(2, '0')} minutos e ${sec.toString().padStart(2, '0')} segundos`;
};

// RAIZ

app.get('/', (req, res) => {
    res.send(`Tempo atual do cronômetro: ${formatTime(minutos, segundos)}`);

});

// INICIAR

app.get('/iniciar', (req, res) => {
    if (!intervaloId) {
        intervaloId = setInterval(() => {
            segundos++;
            if (segundos === 60) {
                minutos++;
                segundos = 0;
            }
        }, 1000);
        res.send('Cronômetro iniciado!');
    } else {
        res.send('Cronômetro já está em execução!');
    }
});

// PAUSA
app.get('/pausar', (req, res) => {
    clearInterval(intervaloId);
    intervaloId = undefined;
    res.send('Cronômetro pausado!');
});

// CONTINUAR
app.get('/continuar', (req, res) => {
    if (!intervaloId) {
        intervaloId = setInterval(() => {
            segundos++;
            if (segundos === 60) {
                minutos++;
                segundos = 0;
            }
        }, 1000);
        res.send('Cronômetro já está em execução!');
    }
});

// ZERAR

app.get('/zerar', (req, res) => {
    minutos = 0;
    segundos = 0;
    res.send('Cronômetro zerado!');
});


app.listen(port, () => {
    console.log(`> > > Servidor inicializado na porta ${port}`);
})