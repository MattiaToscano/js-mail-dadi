
console.log('Esercizio 1')
//inizializzo array con lista mail.
const listaMail = ['mattia@live.it' , 'turi@live.it' , 'melo@live.it' , 'alfio@live.it' ];


//Chiedo all'utente di inserire la sua mail.
let userMail =(prompt('Inserisci la tua mail'));

//Creo valiabile per check mail.
let mailCheck;

//Inizializzo ciclo per controllo mail.
for (let i=0; !mailCheck && i<listaMail.length; i++) {
    if (userMail == listaMail[i]) {
        mailCheck = true;
    }
}

if (mailCheck == true){
    console.log('La tua mail è presente nella lista, benvenuto/a');
}
else {
    console.log('La tua mail non è presente nella lista, riprova');
}

console.log('Esercizio 2')

