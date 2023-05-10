//Operadores Aritiméticos(Matemáticos)

let salario = 100;
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);
// + , - , * , / , **

//Operadores Atribuição

let valorTecladoGamer = 100;
//Forma mais rapida = valorTecladoGamer + valorTecladoGamer;
//Tanto para mais tanto para menos, forma de aceleraçãodo processo
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);

//Operadores de Comparação

//Igualdade estrita
console.log(1 === 1);
console.log("1" === 1); //recomentado pois a comparação sera correta

//Igualdade solta
console.log(1 == 1);
console.log("1" == 1); //Não é recomendado

//Caso o cliente tenha 100 prontos: Premium. Caso não: Comum.
//Para ver o resoltado mude o valor!
let pontos = 200;
let tipo = pontos > 100 ? "premium" : "comum";
console.log(tipo);

//Operadores Lógicos

//Operador Logico e (&&)
//Retorma true se os dois operadores forem true
console.log(true && true);

let MaiorDeIdade = true;
let PossuiCarteiraDeTrabalho = true;
let PodeAplicar = MaiorDeIdade && PossuiCarteiraDeTrabalho;
console.log(PodeAplicar);

//Operador Logico e (||)
//Retornar true se um dos operadores forem true
let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
console.log('pode aplicar: ',podeAplicar);

//Operadores Bitwise

//Operador NOT
let candidatoRecusado = !podeAplicar

console.log('Candidato Recusado',candidatoRecusado)
