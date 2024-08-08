//for getting symbol of calculator//

let symbol = document.getElementsByClassName('symbol')
let sym
let turn =false
Array.from(symbol).forEach(element => {
    element.addEventListener('click',()=>{
        sym=element.textContent
        display.innerHTML+=sym
        turn = true

    })
    
});

//button logic//
let num1
let num2
let num=document.getElementsByClassName('num')
Array.from(num).forEach(nums =>{
    nums.addEventListener('click',()=>{
        if(turn ==false){
            num1=''
            num1=num1+nums.textContent
            display.innerHTML+=num1
        }
        else{
            num2=''
            num2=num2+nums.textContent
            display.innerHTML+=num1
        }
    })
})

//clear//
let clear = document.querySelector('.clear')
clear.addEventListener('click',()=>{
    num1 = ''
    num2 = ''
    display.innerHTML=''
    sym = null
    turn=false
})

//result//
let ans
let display = document.querySelector('.display')
let result = document.querySelector('.result')
function results(){
    switch(sym){
        case '+':
            ans = (Number(num1)+Number(num2))
            break;
            case'-':
            ans = (Number(num1)-Number(num2))
            break;
            case'x':
            ans =(Number(num1)*Number(num2))
            break;
            case'/':
            ans =(Number(num1)/Number(num2))
            break;
            case'%':
            ans =(Number(num1)%Number(num2))
            break; 
    }
    display.innerHTML=ans
    num1=ans
    num2=''

}
result.addEventListener('click',()=>{
    results()
})
