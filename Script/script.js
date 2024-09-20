// Criando uma variavel
const alunos = [
    {nome: "Jhon", notas: [10, 9, 10]},
    {nome: "Alicia", notas: [7, 4,7]},
    {nome: "Rosana", notas: [8, 5, 5]},
    {nome: "Pedro", notas: [7, 7, 7]}
];

// Um novo array será gerado, contendo a média e o status

function calculaMedia(alunos) {

    // Calcula a média

    return alunos.map(aluno => {
        const media = aluno.notas.reduce((soma, notas) => soma + notas, 0)/ aluno.notas.length;

        // Verifca se o aluno foi Aprovado ou Reprovado

        const status = media >= 7 ? "Foi Aprovado": "Foi Reprovado"
        return {nome: aluno.nome, media: media.toFixed(2), status: status}
    });
}

// Puxa da Função calculaMedias o parametro alunos
console.log(calculaMedia(alunos))