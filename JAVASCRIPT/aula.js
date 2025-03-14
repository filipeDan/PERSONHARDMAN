let nome:"Aprovado"
/* alert(nome) */
console.log(nome); /* é para rodar no console antes de ir para a pag  */

const x = 10;
const lista = [1,2,3,];/* array, cada posição tem um valor:posição 0=a,posição 1=b, posição 2=c */
const objeto = { name: "Fernando", age:51 } /* parecido com o json */

console.log (x);
console.log(typeof x);/* number */

console.log (lista);
console.log(typeof lista);/* array */

console.log (objeto);
console.log(typeof objeto);/* array, ele se especifica com pessoas, carros. ex: nome:tem cpf, rg,,idade*/

console.log(objeto.name)/* quando quero mostrar somente o nome do objeto */

console.log)lista([2]);/* são coisa, ex: lista de mercado, mosta entre []*/

let opcao = true; /* booleano */

if (2>1){
    console.log("2 é maior que 1? ")/*  ele vai mostrar se for verdadeira */
} // se caso não for verdadeiro vai ir para else
 else { 
    console.log("2 é menor que 1")
}

// estrutura de repetição

const arr = ["amora" , "banana", "caju", "damasco"]
for(let i = 0; 1<4; i++){
    console.log('o valor da repetição é ' + arr[i]) // + arr[i] aqui esta concatenando( vai mostrar o arr= array e i = incrementação)
}

/* // aqui ela vai mostra todas as array(frutas) que colocar mais, isso por causa o 'length'
const arr = ["amora" , "banana", "caju", "damasco"]
for(let i = 0; 1< arr.length; i++){
    console.log('o valor da repetição é ' + arr[i]) // + arr[i] aqui esta concatenando( vai mostrar o arr= array e i = incrementação)
}
 */

//template literal, com uso da crase 
console.log(`o valor da repetição é ${arr[i]}`) //depois do $ ele tras a variavel


//funcão
function soma (){
    console.log(22+11);
}
soma(); // vai mostrar a soma 

function calcula(a,b){
    console.log(a*b)
} 
calcula(12,12)// aqui tabm so mostra a resposta




















