// pra que serve? O objetivo era criar uma espécie de Modificador de acesso
// maas, ele é apenas um atributo único!
const helloWorldSymbol = Symbol();
const symbol2 = Symbol('valor');

// o parâmetro da Symbol, server como uma descrição do Symbol

console.log(symbol2);
//Symbols são únicos!
console.log('Symbol "Hello" is equal to "Symbol2": ', helloWorldSymbol === symbol2 );//false!!!

// Previne conflito entre nome de propriedades de um Object!!!
// Por mais que os valores 'name' dos Symbol sejam iguais, ele é único!
const prop1 = Symbol('name');
const prop2 = Symbol('name');

const user = {
    [prop1]:'Vinícius',
    [prop2]:'Gabriel',
    lastName:'Olímpio'
}

console.log('Symbol props protected',user)
//nesse objeto, eu não poderia sobrescrever a propriedade Symbol(name)


//Symbols criam propriedades que não são enumerables - não são iteradas nem acessadas tão fácil
for(const key in user){
    if(user.hasOwnProperty(key)) console.log(`Valor da Chave ${key}: ${user[key]}`);
    // aqui ele retorna apenas o lastName, que é uma prop 'normal'
}

console.log('Object Keys',Object.keys(user));//aqui também só retorna lastName, Symbol Props não são acessíveis como enumerables
console.log('Key values User', Object.values(user));// aqui retorna o valor de lastName

//PARA EXIBIR UM SYMBOL
console.log('Symbols properties', Object.getOwnPropertySymbols(user));//retorna um array com as props 


//ACESSAR TODAS PROPRIEDADES DE UM OBJETO
console.log('All props into user', Reflect.ownKeys(user));


//criar enum - enums são objetos com várias constantes basicamente
const directions = {
    RIGHT: Symbol('RIGHT'),
    LEFT: Symbol('LEFT'),
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
}

function changeDirection(key, x, y){
    switch(key){
        case directions.RIGHT: 
            x++; 
            break;
        case directions.UP:
            y++;
            break;
        case directions.DOWN:
            y--;
            break;
        case directions.LEFT:
            x--;
            break;
    }
}