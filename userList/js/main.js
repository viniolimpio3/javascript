function d(element){
    return document.querySelector(element);
}
//Elementos!!! html   
var btnElement = d('button#insere');
var nomeElement = d('input#name');//.querySelctor[attr="valueAttr"]
var emailElement = d('input#mail');
var senhaElement = d('input#pass');


//Eventos
nomeElement.onkeypress = function focus_mail(e){
    tecla = e.keyCode;
    if(tecla == 13){
        emailElement.focus()
    }
}
emailElement.onkeypress = function focus_pass(e){
    tecla = e.keyCode;
    if(tecla == 13){
        senhaElement.focus();
    }
}

senhaElement.onkeypress = function enter(e){
    var tecla = e.keyCode;
    if(tecla == 13 ){
        console.log('Apertou Enter')
        insereUser();
    }
}
btnElement.onclick = console.log('Clicou')
btnElement.onclick = insereUser;

//definição -> usuario
var nomeUsers = ['vinicius','joaozinho','zé'];

var mailUsers = ['vini@mail.com','j@mail.com','ze@mail.com'];

var senhaUsers = ['123','456','789'];

var usuarios = [nomeUsers, mailUsers, senhaUsers];

//insere, gera e itera usuarios
function insereUser (){
    
    //values dos elementos html
    var nome = nomeElement.value;
    var email = emailElement.value;
    var senha = senhaElement.value;

    var validado = validaUser(nome,email, senha);

    if(validado){
        removeAll();
        console.log('validado')
        //add to arrays

        nomeUsers.push(nome)
        mailUsers.push(email)
        senhaUsers.push(senha)
  
        geraUser();

        iteraUsers();
        
        nomeElement.value = "";
        emailElement.value = "";
        senhaElement.value = "";

        console.log(usuarios)
    }else{
        console.log('erro');
    }
        
}

window.onload = iteraUsers;

function iteraUsers(){

    
    var nome = usuarios[0];
    var mail = usuarios[1];
    var senha = usuarios[2];

    

    //console.log(nome[0]) - vinicius

    for(var i = 0; i < nomeUsers.length; i++ ){
        var element = '<div id="linha_'+i+'" > <li class="list-group-item"> <div class="row linha"> <div class="col"> <p class="pcol">'+ nome[i] +'</p>  </div> <div class=" col"> <p class="pcol">'+ mail[i] +'</p> </div>  <div class=" col"> <p class="pcol">'+ senha[i] +'</p> </div> <div class="col text-center"> <button id="btn_exclui_'+ i +'" onclick="removeUser('+i+')" class="btn btn-danger"> <span class="fa fa-trash lixo "> </span> </button> </div> </div> </li> </div>';
        $('#insereUser').append(element);
    }

}
   

function geraUser(){

    usuarios[0] = nomeUsers;
    usuarios[1] = mailUsers;
    usuarios[2] = senhaUsers;

}

//Validação de Campos
function error(msg){
    var p = d('#erro');
    p.style.display = 'block';
    p.innerHTML = msg;

    setTimeout(function(){
        p.style.display = 'none'
    },5000);//setTimeout(o que vai acontercer após o tempo,tempo para o que vai acontecer)
}


function validaUser(name, mail, senha){

    //validação dos campos
    if(name == "" || mail == "" || senha == "") {
        error('Você deve preencher todos os campos');
        return false;
    }
    if(mail.indexOf('@') == -1){
        error('Preencha o email de forma correta');
        return false
    }

    //verfica se usuário já existe
    for(var i = 0; i < nomeUsers.length; i++){

        if(name === nomeUsers[i] || mail === mailUsers[i]){
            error('Usuário existente');
            return false;
        }
    }


    return true    

}

function removeAll(){
    var lista = d('#insereUser')
    lista.innerHTML = "";
}

function removeUser(id){
    //remover da view
    console.log("id " + id)
    var idHtml = "linha_"+id;
    console.log("removeu " + idHtml)
    
    var element = document.getElementById(idHtml);
    element.innerHTML = ""

    //remover do array
    nomeUsers.splice(id,1);
    mailUsers.splice(id,1);
    senhaUsers.splice(id,1);
    //condicional ternária
    nomeUsers.length == 0 ? console.log("lista vazia"):console.log(nomeUsers);
    
    removeAll();
    geraUser();
    iteraUsers();
}




