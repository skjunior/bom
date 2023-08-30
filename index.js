let nome;
let cor;
nome = prompt( "Qual o seu nome?");
cor = prompt("Qual a sua cor favorita?");
console.log("A cor favorita de " + nome + " é " + cor);
console.log(`A cor favorita de ${nome} é ${cor}` );

const noMe = "Sergio Krug"
console.log(noMe.length);
//comando length le o número de caracteries escrita.

const frase = "OieEeEee!"
const fraseMinuscula = frase.toLowerCase()
console.log(fraseMinuscula);
//o comando .toLowerCase transforma todas as letras da fraser em minusculas.

const fraseMaiuscula = frase.toUpperCase()
console.log(fraseMaiuscula);
// ja o comando .toUpperCase é o oposto do outro, esse deixa todas as leatras maisusculas.
const email =  "    sergio@gmail.com        "
console.log(email. trim ());
// esse comando .trim() retira os espaços das frases.

const frases = "Hoje comi cenoura"
frases .includes("cenoura");
frases .includes("batata");
console.log(frases .includes("cenoura"));
//"pesquisa" a palavra dentro da frase escrita e retorna se é vdd ou não.

const outraFrase = "Hoje eu comi cenoura, adoro cenoura"
const novaFrase = outraFrase .replaceAll("cenoura","batata");
console.log(outraFrase);
console.log(outraFrase .replaceAll("cenoura", "batata"));
//comando raplaceAll() troca as palavras q vc deseja.


let palavra;
palavra = prompt("escreva uma frase.");
console.log(palavra.toUpperCase());
console.log(palavra.replaceAll("o","i"));
console.log(palavra.trim());

const listaDeCompras = ["abacate","banana","tomate"]
const segundoItem = listaDeCompras[2]
console.log(segundoItem);
//esse é usado para listar alguma coisa, e conta apartir de 0.


let raçasDog = ["pug","labrador","pastor alemão","poodle","cartamelo"]
let numero;
numero = prompt('escolha um numero de 0 a 4');
console.log(raçasDog[numero]);;

const pokemon = ["bulbasauro", "squirtle", "charmander"]
console.log(pokemon.length);

const séries = ["la casa de papel","the boys"]
console.log(séries.includes("the boys"));
console.log(séries.includes("Game of Thrones"));

const itens =[1,2,3,] 
itens.push(4,5,6,7); //.push adiciona ao final da lista masi itens 
itens.pop(); //.pop retira o ultimo item da linha
console.log(itens);

//exercico 4
const letras = ["A","B","C","D","E","F","G","H"]
console.log(letras.splice(2, 1));
console.log(letras.splice(3, 2));

const valores = [1,2,3,4,5,6]
console.log(valores.push(7));
console.log(valores.splice(3, 2));
console.log(valores.length);
