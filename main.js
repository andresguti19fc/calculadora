const botonNumeros = document.getElementsByName("data-number");
const botonOperadores = document.getElementsByName("data-operador");
const botonBorrar = document.getElementsByName("data-borrar")[0];
const botonIgual = document.getElementsByName("data-igual")[0];
var resultado = document.getElementById("resultado");
var operacionActual = "";
var operacionAnterior = "";
var operacion = undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener("click", function(){
        agregarNumero(boton.innerText);
        
    })
})
botonOperadores.forEach(function(boton){
    boton.addEventListener("click", function(){
        selectOperacion(boton.innerText);
        
    })
})
botonIgual.addEventListener("click", function(){
    calcular();
    actualizarPantalla();  
});
botonBorrar.addEventListener("click", function(){
    clear();
    actualizarPantalla();  
});

function agregarNumero(num){
    operacionActual = operacionActual.toString() + num.toString();
    actualizarPantalla();
}
function clear(){
    operacionActual = "";
    operacionAnterior ="";
    operacion = undefined;
}
function selectOperacion(op){
    if(operacionActual === "")return;
    if(operacionAnterior !== ""){
        calcular();
    }
    operacion = op.toString();
    operacionAnterior = operacionActual;
    operacionActual = "";
}
function calcular(){
    var calculo; 
    const anterior= parseFloat(operacionAnterior);
    const actual = parseFloat(operacionActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case "+":
            calculo = anterior + actual;
            break;
        case "-":
            calculo = anterior - actual;
            break;
            case "*":
                calculo = anterior * actual;
                break;
                case  "/":
                    calculo = anterior / actual;
                    break;
                    default:
                        return;    
    }
    operacionActual = calculo;
    operacion = undefined;
    operacionAnterior = "";
}
function actualizarPantalla(){
    resultado.value = operacionActual;
}