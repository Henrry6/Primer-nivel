function calcularAreaCirculo(radio){
    
    const PI=3.14;
    let area;

    //area= PI*radio*radio;
    area= Math.PI*(radio*radio);
    return area;

}
function calcularAreaRectangulo(base,altura){
 
    let area;

    area= base*altura;
    return area;

}
function calcularAreaTriangulo(base,altura){
    
    let area;

    area= base/2*altura/2;
    return area;

}
function calcularAreaCuadrado(lado){
   
    let area;

    area= lado*lado;
    //area= Math.pow(lado,4);
    return area;

}




var areaCuadrado;
var areaRectangulo;
var areaTriangulo;
var areaCirculo = prompt("INGRESE EL RADIO");
areaCirculo= parseInt(areaCirculo);

 areaCirculo= calcularAreaCirculo(areaCirculo);
 alert(areaCirculo);
