// Desafío complementario 



/* Uso del FOR 

let sandias = parseInt (prompt ("Cuántas sandías dejas en almacén"));

for (let i=0; i<=50; i++){
    let result = i+sandias;

    alert (result);
} */


/* Uso del WHILE */

 let almacen = parseInt (prompt ("¿Cuántas hay en almecén?"));


while (almacen < 50){
    let sandias = parseInt (prompt ("¿Cuántas sandías dejas en almacén?"));
    almacen = almacen + sandias
 
    alert ("El número de sandías en el almacén es " + almacen);
}
alert ("El almacén está lleno"); 