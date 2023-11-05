

function display(num){

    // id.value= to get value on display
    output.value +=num;     
}

// clear

function clearAll(){

    output.value=''

}

function evaluateExp(){
    output.value=eval(output.value)
}

function removeLast(){
    currentExp=output.value
    output.value=currentExp.slice(0,-1)
}
