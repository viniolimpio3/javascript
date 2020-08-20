
// Como fazer funções aceitarem N parâmetros!!!!!!!
function log(...data){
    console.log(...data);
}


const user = {
    name:'Vini'
}

//alterando props de um object
user.name = 'New Value';
user['name'] = 'Novo valor';

const prop = 'name';
user[prop] = 'Novo name';

function getProp(objectReferece, prop){
    return objectReferece[prop];//ÚTIL PACAS!!!
}

console.log(getProp(user, 'name'));

function setProp(objRef, prop, value){
    objRef[prop] = value;// !IMPORTANTE!!!
}
setProp(user, 'name', 'newName');
console.log(user);//user.name agora é = à 'newName'

// Criando uma propriedade
user.lastName = 'Olímpio';
//deletando uma prop
delete user.lastName;

// FUNÇÕES Object -----------------------------------------------------------------------------------
const usuario = {
    name: 'Vini',
    lastName: 'Olímpio'
}

// Recuperar as propriedades de um Object
console.log('Object keys', Object.keys(usuario));

// Recuperar valores das chaves do Object
console.log('Object Values', Object.values(usuario));

// Retorna um Array de Arrays contendo [key_prop, value_prop]
console.log('Object Entries', Object.entries(usuario));
// Object Entries [ [ 'name', 'Vini' ], [ 'lastName', 'Olímpio' ] ]

// Dar merge em propriedades de objects
// 'IGNORA' o conceito de imutabilidade
// Object.assign(target, sources, sources, sources.....) -> possibilita o merge com vários objetos, sendo que o primeiro parâmetro será 'mudado'
// o recomendado é criar um novo object pra fazer um novo objeto!!! -> pra 'ficar' no conceito da imutabilidade
Object.assign(usuario, {fullName: `${usuario.name} ${usuario.lastName}`})
console.log('Merge Usuário - Assign', usuario); 


// Previne TODAS as alterações em um objeto const!! - seguindo o conceito de imutabilidade total
// em casos 'normais', mesmo se um objeto é um const, posso dar um novo valor pra ele usando obj.prop = newValue
const freezeObject = { foo:'Anything' };
Object.freeze(freezeObject);

freezeObject.foo = 'Novo valor';
delete freezeObject.foo;
freezeObject.newProp = 'Valor';

log('Object Freeze', freezeObject);// retorno -> {foo: 'Anything'};


// Permite a alteração de propriedades EXISTENTES no Object
// não permite criar nem deletar, apenas alterar
const person = {name:'Vinícius'};
Object.seal(person);

person.name = 'José da Silva';
delete person.name;
person.newProp = 'Any';

log('Object Seal in "person"', person );// retorno -> {name:'José da Silva'};
