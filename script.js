
// # Inizializziamo dei valori constanti per il programma
/* vari sconti */
const ScontoMinorenni = 21;
const ScontoOver65 = 42;



// # Chiediamo all'utente le informazioni sul suo biglietto
let chilometri = parseInt(prompt("Quanti chilometri devi percorrere?"));
let eta = parseInt(prompt("Quanti anni hai?"));




// calcolare il prezzo del biglietto in base ai chilometri in centesimi
let prezzoTotale = chilometri * 0.276; 


//# Controlliamo l'età dell'utente
if (eta <= 18) {
    console.log(prezzoTotale / ScontoMinorenni * 100)
    

}else if(eta >= 65){
    console.log(prezzoTotale / ScontoOver65 * 100)
}else{
    /* non fai nulla */
}
