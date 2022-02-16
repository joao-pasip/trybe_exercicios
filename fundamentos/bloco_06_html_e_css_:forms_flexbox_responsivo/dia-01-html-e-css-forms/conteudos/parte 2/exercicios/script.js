const select = document.getElementById("option_estado");
const data = document.getElementById("input_data")
let optionsStates = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

for(let index = 0; index < optionsStates.length; index+=1) {
  let option = document.createElement("option");
  option.innerText = optionsStates[index];
  option.value = optionsStates[index];
  select.appendChild(option);
}

function validateData() {
  let name = document.querySelector("[name=name]");

  //verificar maxLength e Required
  if(name.value.length > 40 || name.value.length === 0) {
    alert("Nome inválido!");
  }
}

function handleSubmit (event) {
  event.preventDefault();
  //validar dados
  validateData();
}

window.onload = function () {
  let button = document.querySelector(".submit-button");
  button.addEventListener("click", handleSubmit);
}
