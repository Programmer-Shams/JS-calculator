const number = document.querySelectorAll('.button')
const display = document.querySelector('.dis')
const Equal = document.querySelector('.Equal')
const clear = document.querySelector('.clear')
const del = document.querySelector('.delete')

number.forEach(element => {
element.addEventListener('click', () =>{
     display.value += element.value;
    })
    
});


const calculation = () => {
    const operators = ['+','-','*','/']
    const input = display.value
    let val1, val2;
    
    operators.forEach(opr =>{
        if(input.includes(opr)){
            operator = opr;
            [val1, val2] = input.split(opr).map(parseFloat);
        }
    })

   
    
    switch(operator) {
        case '+':
            display.value =  val1 + val2;
            break;
        case '-':
            display.value =   val1 - val2;
            break;
        case '*':
            display.value =   val1 * val2;
            break;
        case '/':
            display.value =  val1 / val2;
            break;
        default: 
        display.value =   ''

    }
}

Equal.addEventListener('click', calculation)
clear.addEventListener('click', () =>{
    display.value = ''
})
del.addEventListener('click', () => {
    const currentValue = display.value;
    if (currentValue.length > 0) {
        display.value = currentValue.slice(0, -1);
    }
});
