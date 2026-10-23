const frasesBoba = [
    'Um panda tentando fazer café.',
    'Uma pizza fazendo exercício de madrugada.',
    'Um cachorro tentando ser chef de cozinha.',
    'Um robô dançando sozinho no elevador.',
    'Um sapo ganhando campeonato de salto duplo.',
    'Uma banana aprendendo a tocar teclado.'
];

function gerarFraseBoba() {
    const fraseBoba = document.getElementById('frase-boba');
    const fraseAleatoria = frasesBoba[Math.floor(Math.random() * frasesBoba.length)];
    fraseBoba.textContent = fraseAleatoria;
}

function gerarTabuada() {
    const numeroinput = document.getElementById('numero-input');
    const numero = parseInt(numeroinput.value);
    const resultadoDiv = document.getElementById('resultado-aqui');

    resultadoDiv.innerHTML = '';

    const titulo = document.createElement('h2');
    titulo.textContent = `Tabuada do numero ${numero}`;
    resultadoDiv.appendChild(titulo);

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        const item = document.createElement('p');
        item.classList.add('tabuada-item');
        item.textContent = `${numero} x ${i} = ${resultado}`;
        resultadoDiv.appendChild(item);
    }
}

const btnGerar = document.getElementById('btn-gerar');
btnGerar.addEventListener('click', gerarTabuada);

const btnCaos = document.getElementById('btn-caos');
btnCaos.addEventListener('click', gerarFraseBoba);