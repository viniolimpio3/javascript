class toDo{
    
    constructor(){
        this.data = [];//"atributo"
    }
    add(data){
        this.data.push(data);
        console.log(data);
    }
    metodo(){
        alert('a');
    }
}

class list extends toDo{
    procuraAtt(){
        console.log(this.data);
    }
}

const objeto = new toDo();
let inputElement = document.getElementById('txt');

let btn = document.getElementById('btn');


inputElement.onkeypress = function(e){
    let tecla = e.keyCode;
    if(tecla === 13) insere();
}

btn.onclick = insere();



function insere(){
    objeto.add(inputElement.value);
    inputElement.value = '';
}
