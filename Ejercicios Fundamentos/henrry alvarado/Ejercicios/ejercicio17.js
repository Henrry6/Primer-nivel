var numero1=1;
var numero2=1;
var next;
console.log(numero1);
console.log(numero2);

for( var i=1;i<=10;i++){
    netx=numero1+numero2;
    numero1=numero2;
    numero2=netx;
    console.log(netx);
}