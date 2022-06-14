
//1 - Criar um loop que conte de 1 até 10 usando FOR
console.log("aqui começa o loop de 1 a 10 com o for :")
for(number = 1 ; number <= 10 ; number += 1){
    console.log(number)
}
//2 - Criar um loop que conte de 10 até 1 usando WHILE
console.log("aqui começa o loop de 10 a 1 com o while :")
let number2 = 10;
while(number2 >= 1){
    console.log(number2);
    number2 -= 1;
}

//3 - Criar um loop que conte todos os números ímpares de 1 até 100
console.log("aqui começa o loop para encontrar numeros impares de 1 a 100 com o for :")
for(i = 1 ; i <= 100 ; i+=2){
    console.log(i);
}

//4- Criar um loop que conte todos os números pares de 0 a 100
let p = 0;
while(p <= 100){
    console.log(p);
    p += 2;
}