let numeroSecreto = 0;
let listaNumerosSorteados = [];
let numeroIntento = 1;
let numeroMaximo = 10;  
condicionesIniciales();

function  asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
} 

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

    
     if(numeroUsuario=== numeroSecreto){
        asignarTextoElemento("p", `Acertaste el numero en ${numeroIntento} ${(numeroIntento === 1) ? "intento" : "intentos"}`);
        document.querySelector("#reiniciar").removeAttribute("disabled");
        } else {
        //El usuario no acierta.
        if(numeroUsuario > numeroSecreto){
            asignarTextoElemento("p", `El numero secreto es menor`);
        }else{
            asignarTextoElemento("p", `El numero secreto es mayor`);
        } 
        numeroIntento++;
        limpiarCaja();  
    }
    return;   
}

function limpiarCaja(){
    let valorCaja = document.querySelector("#valorUsuario").value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados); 
    //Si ya se soortearon todos los numeros  
    if (listaNumerosSorteados.length == [numeroMaximo]){
    asignarTextoElemento("p", "Ya se soortearon todos los numeros posibles")
        }else{
         //si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }   else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
    }   
    }

}

function condicionesIniciales(){
asignarTextoElemento("h1", "Juego del numero secreto");
asignarTextoElemento("p", `Escoje un número del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
numeroIntento = 1; 
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numero
    //Restablecer intentos a 1
    //Generar numero aleatorio 
    condicionesIniciales()
    //Deshabilitar boton de nuego juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}
