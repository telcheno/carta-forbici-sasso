//funzione per la scelta di un numero random per la scelta del pc
function numAleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
};

//finzione per la scelta della giocata
function giocata(scelta){
    let risultato ="";
    if(scelta == 1){
        risultato = "Carta ✋"
    }else if(scelta == 2){
        risultato = "Forbici ✌️"
    }else if(scelta == 3){
        risultato = "Sasso  ✊"
    }else{
        risultato = "Scelta Svagliata 😰"
    }
    return risultato
};

//variabili 
let giocatote = 0;
let pc = 0;
let vincite = 0;
let sconfitte = 0;

//gioco: si arrriva a 3, vincite o sconfitte
while(vincite < 3 && sconfitte < 3){
    //scelta del pc numero aleatorio
    pc = numAleatorio (1, 3);
    
    //scelta del giocatore
    giocatote = prompt("Sceglie: 1 per Carta ✋, 2 per Firbici ✌️, 3 per Sasso ✊");

    //visualisazione scelte
    alert("Pc sceglie " + giocata(pc));
    alert("Giocatore sceglie " + giocata(giocatote));

    //
    if(giocatote == pc){
        alert("PAREGGIO 🤔");
    }else if(giocatote == 1 && pc == 3){
        vincite++
        alert("HAI VINTO 😂");
    }else if(giocatote == 2 && pc == 1){
        vincite++
        alert("HAI VINTO 😂");
    }else if(giocatote == 3 && pc == 2){
        vincite++
        alert("HAI VINTO 😂");
    }else {
        sconfitte++
        alert("HAI PERSO 😫");
    }

    alert("Hai vinto " + vincite + " vincite. Hai " + sconfitte + " sconfitte." )

    //risultato finale
    if(vincite >= 3){
        alert("Complimenti AHI VINTO 😂😂😂!!");
    }if(sconfitte == 3){
        alert("Peccato AHI PERSO 😫!!");
    }
    
}

