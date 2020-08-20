class Input{

    constructor(){
        this.input = document.querySelector('#view');
        this.count;
    }
    insert(t, equal){
        if(!equal){
            let uD = this.input.value.substr(-1,1);//último dígito
            //se ultimo digito e t não forem sinais, passa
            if(   !((uD == '+' || uD == '*' || uD == '-' || uD == '/') && (t == '+' || t == '-' || t =='*' || t =='/')) ){
                if(t !== '<') {
                    this.input.value += t;
                    console.log(this.input.value)
                }else{
                    this.input.value = this.input.value.substring(0, this.input.value.length -1 )
                    console.log(this.input.value)
                }
            }
            return false
        }   
        this.count = this.input.value;
        let result = eval(this.count);//eval - function que converte para "numero"

        this.input.value = result;
    }
    clear(){
        this.count = 0;
        this.input.value = '';
    }
}

const input = new Input();

//Keyboards Events
document.onkeypress = (e)=>{
    console.log(e.keyCode);
    let c = e.keyCode;

    (c === 48) ? input.insert('0', false):'';
    (c === 49) ? input.insert('1', false):'';
    (c === 50) ? input.insert('2', false):'';
    (c === 51) ? input.insert('3', false):'';
    (c === 52) ? input.insert('4', false):'';
    (c === 53) ? input.insert('5', false):'';
    (c === 54) ? input.insert('6', false):'';
    (c === 55) ? input.insert('7', false):'';
    (c === 56) ? input.insert('8', false):'';
    (c === 57) ? input.insert('9', false):'';

    (c === 43 ) ? input.insert('+', false):'';
    (c === 45 ) ? input.insert('-', false):'';
    (c === 47 ) ? input.insert('/', false):'';
    (c === 42 ) ? input.insert('*', false):'';
    (c === 127) ? input.insert('<', false):'';
    (c === 99 ) ? input.clear() : '';

    (c === 61 ||  c === 13) ? input.insert('=', true) : '';
}



