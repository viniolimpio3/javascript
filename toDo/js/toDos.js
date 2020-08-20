function d(element){
    return document.querySelector(element)
}
//elementos da DOM

var listElement = d('#main ul')
var btnAdd = d('#main #add')
var inputElement = d("#main #tarefa")
var main = d('#main');

var to_dos = JSON.parse(localStorage.getItem('listTodos')) || [
    
]

//events
btnAdd.onclick = addTo_do;

function enter (e){
    var tecla = event.keyCode;
    if(tecla == 13) addTo_do()

}

window.onload = function(){
    geraTo_dos()
}

//Function To_dos
function addTo_do(){
    //recupera último id
    var lastIndex = to_dos.slice(-1)[0];
    
    var newId;
    console.log(lastIndex);
    (lastIndex != undefined) ? newId = lastIndex.id + 1 : newId = 0;

    //recupera txt input
    var newText = inputElement.value;

    

    //insere no array
    var newTo_do = {
        id:newId,
        text:newText
    }
    if(newTo_do.text != ""){
        to_dos.push(newTo_do);
        inputElement.value = "";
        geraTo_dos();
        saveToStorage();
        console.log(newTo_do);
    }else{
        erro('Preencha o Campo para Inserir um To-Do!');
    }
    
}

function erro(msg){
    var element = document.createElement('p');
    element.style.color = "#f00";
    element.style.marginTop = "15px";
    element.setAttribute('class','text-center');
    var text = document.createTextNode(msg);

    element.appendChild(text);
    main.appendChild(element);

    setTimeout(function(){

        element.remove();
    
    }, 5000)

}

function geraTo_dos(){

    listElement.innerHTML = "";

    for(to_do of to_dos){// = foreach

        var li = document.createElement('li');

        //texto
        var text = document.createTextNode(to_do.text);
        
        //botão remove
        var btnRemove = document.createElement('button');
        btnRemove.setAttribute('class','btn btn-danger exclui');
        btnRemove.setAttribute('onclick','removeTo_do("'+ to_do.id +'")');
        
        var id_btn = 'exclui_' + to_do.id;
        btnRemove.setAttribute('id', id_btn);

        var span = document.createElement('span');
        span.setAttribute('class','fa fa-trash');
        btnRemove.appendChild(span);
        
        

        btnRemove.style.marginLeft = '15px';
        
        var right = document.createElement('div');
        right.setAttribute('class','text-right');
        right.appendChild(btnRemove);
        right.style.marginLeft = '30%';
        right.style.display = "inline";
        right.style.position = 'absolute';
        right.style.top = '10%';
        right.style.left = '59%';

        //inclui conteudo pro item-lista
        li.appendChild(text);
        li.append(right);
        li.style.marginBottom = "20px"
        li.setAttribute('class','list-group-item');
        li.setAttribute('id',to_do.id);

        //inclui na lista UL da DOM
        listElement.appendChild(li);

        //console.log(to_do.text); //acessando a props text !!!

    }


}

function removeTo_do(idBtn){
    //removendo do array
    var index = idBtn - 1;
    var indexArray = to_dos.findIndex(i => i.id == idBtn );

    
    to_dos.splice(indexArray, 1);
    console.log(to_dos);
    geraTo_dos();
    saveToStorage();

}

function saveToStorage(){
    localStorage.setItem('listTodos', JSON.stringify(to_dos));
}