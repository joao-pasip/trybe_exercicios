  document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "green";
  document.getElementById("elementoOndeVoceEsta").firstElementChild.innerText = "TRYBE";
  
  let mensagemTrybe = "Curiosidades";
  let criaIrmao = document.querySelector('#pai');
  let paragrafoText = document.createElement('h3');
  paragrafoText.innerText = mensagemTrybe;
  criaIrmao.appendChild(paragrafoText);
  // novaSection.appendChild(mensagem);

  let criaFilho = document.getElementById("elementoOndeVoceEsta");
  let textTrybe = "Escola que ensina programar, aprender e trabalhar.";
  let descricaoTrybe = document.createElement('p');
  descricaoTrybe.innerText = textTrybe;
  criaFilho.appendChild(descricaoTrybe);

  let filho = document.getElementById("primeiroFilhoDoFilho");
  let msg = "Foca no processo!";
  let textPrimeiroFilho = document.createElement("h2");
  textPrimeiroFilho.innerText = msg;
  filho.appendChild(textPrimeiroFilho);
