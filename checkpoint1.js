function microondas(prato, tempo) {

   
    let poucoTempo = 'Tempo insufciente';
    let inexistente = 'Prato inexistente';
    let muitoTempo = 'kabummm!';
    let mensagemFinal = 'Prato pronto, bom apetite!';


    switch (prato) {
        case 1 'pipoca' :
            if(tempo < 10){
                console.log(poucoTempo);
            } 
            if(tempo == 30) {
                console.log(muitoTempo);
            }
            console.log(mensagemFinal);
        break;
        case 2 'Macarrão' :
            if(tempo < 8){
                console.log(poucoTempo);
            } 
            if(tempo == 24) {
                console.log(muitoTempo);
            }
            console.log(mensagemFinal);
        break;
        case 3 'Carne' :
            if(tempo < 15){
                console.log(poucoTempo);
            } 
            if(tempo == 45) {
                console.log(muitoTempo);
            }
            console.log(mensagemFinal);
        break;
        case 4 'Feijão' :
            if(tempo < 12){
                console.log(poucoTempo);
            } 
            if(tempo == 36) {
                console.log(muitoTempo);
            }
            console.log(mensagemFinal);
        break;
        case 5 'Brigadeiro' :
            if(tempo < 8){
                console.log(poucoTempo);
            } 
            if(tempo == 24) {
                console.log(muitoTempo);
            }
            console.log(mensagemFinal);
        break;
        default : 
            console.log(inexistente);

    }
}
microondas(4,25);