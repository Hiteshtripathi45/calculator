let storeNo=document.getElementById('display')
let num1=''
let num2=''
let sign 
let turn = false
let rresult
nums=document.getElementsByClassName('num')
Array.from(nums).forEach(no =>{
    no.addEventListener('click',()=>{
        if(turn==true){
            num2+=no.textContent
            storeNo.textContent=num1+sign+num2
        }
        else{
            num1+=no.textContent
            storeNo.textContent=num1
        }
        
    })

})
const symbols = document.getElementsByClassName('symbol');
Array.from(symbols).forEach(sym => {
    sym.addEventListener('click', () => {
        if (num1 !== '') {
            if (turn && num2 !== '') {
                answer(); // Calculate the result if there are already two numbers and an operator
            }
            sign = sym.textContent;
            storeNo.textContent = num1 + sign;
            turn = true;
        }
    });
});

result=document.getElementById('result')
result.addEventListener('click',answer)

function answer(){
    nu=parseFloat(num1)
    n=parseFloat(num2)
    switch(sign){
        case '+':
           rresult= nu + n;
            break;
        case '-':
            rresult= nu - n;
            break;
        case 'x':
            rresult =nu * n;
            break;    
        case '/':
            rresult =nu / n;
            break; 
        case '%':
            rresult =nu % n;
            break;   
    }
    console.log(rresult)
    storeNo.textContent=rresult
    num1 = rresult.toString();
    num2 = '';
    sign = undefined;
    turn = false;
}
let clear =document.getElementById('clear')
clear.addEventListener('click',()=>{
    storeNo.textContent=undefined
    num1 = ''
    num2 = '';
    sign = undefined;
    turn = false;

})