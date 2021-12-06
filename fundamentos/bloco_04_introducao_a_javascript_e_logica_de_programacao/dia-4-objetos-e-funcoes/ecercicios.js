// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// console.log('Bem-vinda, '+info.personagem);

// info['recorrente'] = 'Sim';
// console.log(info);

// for (let index in info) {
  // console.log(index);
// }

//  for (let index in info) {
//    console.log(info[index]);
//  }

// let infoPato = {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O último MacPatinhas',
//   recorrente: 'Sim',
// };

// for (let inf in infoPato) {
//   console.log(infoPato[inf]);
// }

// for (let chave in info) {
//   if (
//     chave === 'recorrente' &&
//     info[chave] === 'Sim' &&
//     infoPato[chave] === 'Sim'
//   ) {
//     console.log('Ambos recorrentes');
//   } else {
//     console.log(info[chave] + ' e ' + infoPato[chave]);
//   }
// }


let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
// let fullName = leitor.nome + ' ' + leitor.sobrenome
// "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
// console.log('O livro favorito de '+ leitor.nome + ' ' + leitor.sobrenome+ ' se chama ' + leitor.livrosFavoritos[0]['titulo']);

leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  });

// console.log(leitor);
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' favoritos.');