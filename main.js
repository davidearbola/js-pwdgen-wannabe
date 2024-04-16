let userName = prompt("Qual è il tuo nome?");

let userSurname = prompt("Qual è il tuo cognome?");

let favouriteColor = prompt("Qual è il tuo colore preferito?");

let currentYear = prompt("In che anno siamo?");

let userPass = userName + userSurname + favouriteColor + "#" + currentYear;

// codice per scrivere direttamente il risultato dei prompt nel documento:
document.writeln(userPass); 

// codice per cambiare il testo nel H1 che farà venire fuori la password
document.getElementById("textPassword").innerHTML = "La tua Password è: " + userPass;

// codice per far uscire un alert con la password
alert("La tua password è: " + userPass + " Questa password non è sicura!");







