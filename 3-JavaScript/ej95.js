let sucesion = null; 
let sumandoA =-1; //El primer sumando debe ser el número por el que deseo iniciar -1
let sumandoB = 1;
let longitudDeLaSucesion = 1; //Contador
let longitudDeseada = 10 //Cantidad de números a sumar en la suceción

for(; longitudDeLaSucesion <= longitudDeseada; longitudDeLaSucesion++) {
    sucesion = sumandoA + sumandoB;   
    sumandoA = sumandoB;
    sumandoB = sucesion;
    console.log(sucesion);
    //formula que compartió nico.
}