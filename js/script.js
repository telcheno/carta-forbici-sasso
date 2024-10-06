//variabili 
let giocatote = 0;
let pc = 0;
let vincite = 0;
let sconfitte = 0;


//recupero ellemeti del DOM
const imgPc = document.getElementById("img-pc");
const imgGiocatore = document.getElementById("img-giocatore");
const idRisultato = document.getElementById("risultato");
const btnCarta = document.getElementById("btn-carta");
const btnForbici = document.getElementById("btn-forbici");
const btnSasso = document.getElementById("btn-sasso");
let numVincite = document.getElementById("num-vincite");
let numSconfite = document.getElementById("num-sconfite");
const fineGioco = document.getElementById("fine-gioco");


//funzione per la scelta di un numero random per la scelta del pc
function numAleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
};


//scelta pc
function sceltaPc(pc){
    let scelta;
    if(pc == 1){
        imgPc.src = "./img/paper.svg";
        console.log("PC " + pc);    
    }else if(pc == 2){
        imgPc.src = "./img/scissors.svg";
        console.log("PC " + pc);    
    }
    if(pc == 3){
        imgPc.src = "./img/rock.svg";
        console.log("PC " + pc);    
    }

}

//funzione di gioco
function risultato(){
    if(giocatote == pc){
        idRisultato.innerText = "PAREGGIO 🤔!";
        // alert("PAREGGIO 🤔");
    }else if(giocatote == 1 && pc == 3){
        idRisultato.innerText = "HAI VINTO 😂!";
        vincite++;
        numVincite.innerText = vincite;
        // alert("HAI VINTO 😂");
    }else if(giocatote == 2 && pc == 1){
        idRisultato.innerText = "HAI VINTO 😂!";
        vincite++;
        numVincite.innerText = vincite;
        // alert("HAI VINTO 😂");
    }else if(giocatote == 3 && pc == 2){
        idRisultato.innerText = "HAI VINTO 😂!";
        vincite++;
        numVincite.innerText = vincite;
        // alert("HAI VINTO 😂");
    }else {
        idRisultato.innerText = "HAI PERSO 😫!";
        sconfitte++
        numSconfite.innerText = sconfitte;
        // alert("HAI PERSO 😫");
    }

    
    //risultato finale
    if(vincite == 3){
        idRisultato.style.display = "none";
        btnCarta.style.display = "none";
        btnForbici.style.display = "none";
        btnSasso.style.display = "none";
        fineGioco.innerHTML = `
        <h2>Complimenti AHI VINTO 😂😂!!</h2>
        <button onclick="window.location.reload();">Vuoi giocare ancora</button>`;
        // idRisultato.innerText  = "Complimenti AHI VINTO 😂😂!!";
        // alert("Complimenti AHI VINTO 😂😂😂!!");
    }if(sconfitte == 3){        
        idRisultato.style.display = "none";
        idRisultato.style.display = "none";
        btnCarta.style.display = "none";
        btnForbici.style.display = "none";
        btnSasso.style.display = "none";
        fineGioco.innerHTML = `
        <h2>Peccato AHI PERSO 😫!!</h2>
        <button onclick="window.location.reload();">Vuoi giocare ancora</button>`;
        
        // idRisultato.innerHTML = "Peccato AHI PERSO 😫!!";
        // alert("Peccato AHI PERSO 😫!!");
    }


}

//scelta giocatore
btnCarta.addEventListener("click", () =>{
    giocatote = 1;
    imgGiocatore.src = "./img/paper.svg";
    pc = numAleatorio (1, 3);
    sceltaPc(pc);
    risultato();    
})

btnForbici.addEventListener("click", () =>{
    giocatote = 2;
    imgGiocatore.src = "./img/scissors.svg";
    pc = numAleatorio (1, 3);
    sceltaPc(pc);
    risultato();
})

btnSasso.addEventListener("click", () =>{
    giocatote = 3;
    imgGiocatore.src = "./img/rock.svg";
    pc = numAleatorio (1, 3);
    sceltaPc(pc);
    risultato();
})
    



// //finzione per la scelta della giocata
// function giocata(scelta){
//     let risultato ="";
//     if(scelta == 1){
//         risultato = "Carta ✋"
//     }else if(scelta == 2){
//         risultato = "Forbici ✌️"
//     }else if(scelta == 3){
//         risultato = "Sasso  ✊"
//     }else{
//         risultato = "Scelta Svagliata 😰"
//     }
//     return risultato
// };


// alert("CIAO COMINCIAMO");

// //gioco: si arrriva a 3, vincite o sconfitte
// while(vincite < 3 && sconfitte < 3){
//     //scelta del pc numero aleatorio
    // pc = numAleatorio (1, 3);
    
//     //scelta del giocatore
//     giocatote = prompt("Sceglie: 1 per Carta ✋, 2 per Firbici ✌️, 3 per Sasso ✊");

//     //visualisazione scelte
//     alert("Il pc sceglie " + giocata(pc));
//     alert("Tu hai scelto " + giocata(giocatote));

//     //
//     if(giocatote == pc){
//         alert("PAREGGIO 🤔");
//     }else if(giocatote == 1 && pc == 3){
//         vincite++
//         alert("HAI VINTO 😂");
//     }else if(giocatote == 2 && pc == 1){
//         vincite++
//         alert("HAI VINTO 😂");
//     }else if(giocatote == 3 && pc == 2){
//         vincite++
//         alert("HAI VINTO 😂");
//     }else {
//         sconfitte++
//         alert("HAI PERSO 😫");
//     }

//     alert("Hai vinto " + vincite + " vincite. Hai " + sconfitte + " sconfitte." )

//     //risultato finale
//     if(vincite >= 3){
//         alert("Complimenti AHI VINTO 😂😂😂!!");
//     }if(sconfitte == 3){
//         alert("Peccato AHI PERSO 😫!!");
//     }
    
// }
