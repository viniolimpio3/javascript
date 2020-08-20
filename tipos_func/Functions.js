const arrowFunction = () => 'Retorno';//return IMPLÍCTO NESSE CASO -> por que não tem um bloco/objeto

const arrowFn = () => {
    return log('Valor'); 
}
//parâmetros arrow functions
const log = (...data) => {
    console.log(...data);
}
//receber e retornar funções
const controlFnExec = fnParam => allowed =>{
    if(allowed) fnParam();
}


const handleExec = controlFnExec(arrowFn);

handleExec(true);// permite execução da função arrowFn -  que é passada como parâmetro de controlFnExec 

handleExec(false);

//EM FUNÇÕES CONVENCIONAIS SERIA BASICAMENTE ISSO:
function controlExecFn(fnParam){
    return function fnParam(allowed){
        if(allowed) fnParam();
    }
}


// DIFERENÇAS ENTRE ARROW FUNCTIONS E FUNCTIONS CONVENCIONAIS;
// o this!!!!
global.name = 'name no Contexto da Criação';

const getNameInContextArr = () => this.name;

function getNameInContext(){
    return this.name;//neste escopo global!
}

log('Arrow function context',getNameInContextArr());// retorna undefined!!!
log('Conventional Function context', getNameInContext());// retorna global.name


const user = {
    name:'Nome no contexto de Execução',
    getNameInContextArr,
    getNameInContext,
}
log(user.getNameInContext());// retorna user.name
log(user.getNameInContextArr());// undefined

//BASICAMENTE -> Arrow functions não reconhecem contexto

