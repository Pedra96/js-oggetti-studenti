/*
*1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
*2. Stampare a schermo attraverso un ciclo for (o eventualmente con for-in) tutte le proprietà dell'oggetto.
*3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
*4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
*5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
BONUS: Usiamo il DOM per stampare e chiedere le informazioni all'utente!
*/

let studente={
    nome:prompt("inserire nome studente"),
    cognome:prompt("inserire cognome studente"),
    eta:prompt("inserire età studente")
}

let numeroDiStudenti=prompt("quanti studenti aggiungiamo")
let arrayStudenti=[{
    nome:"Lorem",
    cognome:"Ipsum",
    eta:30
},
{
    nome:"Ipsum",
    cognome:"Dolores",
    eta:20
},
{
    nome:"Romel",
    cognome:"Sumi",
    eta:19
}
]

for(let attributi in studente){
    console.log(attributi + ": "+studente[attributi]);
}
arrayStudenti.push(studente);

for(let i=0;i<arrayStudenti.length;i++){
    console.log(`
    -----------studente${i}------------------------

            studente nome: ${arrayStudenti[i].nome}
            studente cognome:${arrayStudenti[i].cognome}

    --------------------------------------------
    `);
}


for(arrayStudenti.length;arrayStudenti.length<numeroDiStudenti;){
    console.log(arrayStudenti.length)
     studente={
        nome:prompt("inserire nome studente"),
        cognome:prompt("inserire cognome studente"),
        eta:prompt("inserire età studente")
     }
     arrayStudenti.push(studente);
}console.log(arrayStudenti);

function addStudent(event){
    event.preventDefault();
    console.log(arrayStudenti[0]);
}