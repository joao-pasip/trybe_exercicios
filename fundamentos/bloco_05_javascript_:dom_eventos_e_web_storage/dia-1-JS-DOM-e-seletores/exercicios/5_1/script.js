// ADMINISTRADOR DO TEMPO
document.getElementById("header-container").style.backgroundColor = "green";

let perguntasEmergenciais = document.getElementsByClassName("emergency-tasks");
for (let index = 0; index < perguntasEmergenciais.length; index +=1) {
  perguntasEmergenciais[index].style.backgroundColor = "orange"; 
}

let tasksH = document.querySelectorAll(".emergency-tasks h3");
  for (let i = 0; i < tasksH.length; i+=1) {
    tasksH[i].style.backgroundColor = "purple";
  }

let perguntasNaoEmergenciais = document.getElementsByClassName("no-emergency-tasks");
  for (let index = 0; index < perguntasNaoEmergenciais.length; index += 1) {
    perguntasNaoEmergenciais[index].style.backgroundColor = "yellow";
  }

let taskNH = document.querySelectorAll(".no-emergency-tasks h3");
  for (let index = 0; index < taskNH.length; index +=1) {
    taskNH[index].style.backgroundColor = "black";
  }