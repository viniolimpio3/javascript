//Métodos úteis para trabalhar com strings
const textSize = `Texto`.length
console.log(textSize);

//separa o 'x' do texto, criando uma array, que está desestruturada no caso
const [tex, to] = `Texto`.split('x');

//replace
const textReplaced = `Texto`.replace('Texto', 'TEXTO');

// 'fatia' da string - no caso -1 é a última letra
// retorna a seção de uma string
//slice(start, end)
const lastChar = `Text`.slice(-1);

const allWithoutLastChar = `Text`.slice(0, -1);

const secondToEnd= `Text`.slice(1);

// Retorna N caracteres apartir de alguma posição
//substr(start, numbers)
const twoCharsBeforeFirstPosition = `Texto`.substr(0, 2);//2 primeiras letras!!