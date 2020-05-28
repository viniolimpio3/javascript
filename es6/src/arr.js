const seres = [
    {
        nome:'Vinícius',
        idade:16,
        altura:1.8,
        tipo:'humano'
    },
    {
        nome:'Outra Humano',
        idade:160,
        altura:1.8,
        tipo:'humano'
    },
    {
        nome:'zé',
        idade:96,
        altura:1.38,
        tipo:'cachorro'
    },
    {
        nome:'outra_pessoa',
        idade:1,
        altura:0.2,
        tipo:'zebra'
    }


];


//.map()
console.log('\nObjeto de Resposta -----------------------------------------------------------')
const newArr = seres.map((item, index)=>{//como um foreach - item é o valor em si; index a posição
    return `Ser: ${item.nome}, posição: ${index}`;
});

console.log(newArr)

//.filter()
function busca(tipo){
    const filter = seres.filter((ser)=>{

        let res = 'Nenhum ser corresponde a sua busca';
        if(ser.tipo === tipo) res = `ser do tipo ${tipo}: ${ser.nome}`;
        
        if(ser.tipo !== tipo) return false;

        return console.log(res);
    })
}
console.log('\nResultado da busca: ------------------------------------------------------')
busca('humano');

console.log('\nReduce ---------------------------------------------------------------------')
//.reduce()
const arr = [11, 2, 3, 4, 5];

const reduce = arr.reduce((current, next)=>{
    return current + next;
});

console.log(reduce);
