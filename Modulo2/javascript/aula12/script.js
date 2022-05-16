/* Cria uma instância JavaScript de Date que representa um único momento no tempo. 
Objetos Date são baseados no valor de tempo que é o número de milisegundos desde 1º de Janeiro de 1970 (UTC).*/

const dataModeloUm = new Date(2021, 05, 04, 10, 30, 00);
console.log(dataModeloUm);

const dataModeloDois = new Date("May 4, 2021 10:30:00");
console.log(dataModeloDois);