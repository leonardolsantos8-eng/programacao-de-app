const lilstaDeAlunos = [
    {nome: 'Ana', nota: 5.0},
    {nome: 'Bruno', nota: 10.0},
    {nome: 'Maria', nota: 2.0},
    {nome: 'Marta', nota: 7.0},
    {nome: 'Cecília', nota: 6.0},
]

console.log(`\nMostre todos os alunos, seu nomes e suas notas:`)
lilstaDeAlunos.forEach(u => console.log(u.nome, u.nota))


console.log(`\nMostre a média geral da turma; `)
let somaNota = lilstaDeAlunos.reduce((total, u) => total + u.nota, 0)
console.log(somaNota / 5)



console.log(`\nMostre o nome e nota dos alunos com nota abaixo de  7.0: `)
let alunosPerdidos = lilstaDeAlunos.filter(u => u.nota <7)
alunosPerdidos.forEach(u => console.log(u.nome, u.nota))



console.log(`\nMostre apenas o nome dos alunos com nota maior ou igual a 7: `)
let alunosAcima = lilstaDeAlunos.filter(u => u.nota >=7)
alunosAcima.forEach(u => console.log(u.nome, u.nota))




console.log(`\nMostre o nome e a nota do aluno Bruno: `)
const usuarioEncontrado = lilstaDeAlunos.find(u => u.nome === 'Bruno')
console.log(usuarioEncontrado)
console.log(`${usuarioEncontrado.nome} tem ${usuarioEncontrado.nota} nota. `)