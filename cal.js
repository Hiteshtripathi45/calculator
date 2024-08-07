//for getting symbol of calculator//

let symbol = document.getElementsByClassName('symbol')
let sym ='';
Array.from(symbol).forEach(element => {
    element.addEventListener('click',()=>{
        sym=Symbol(element.textContent)

    })
    
});
let num1 = ''
let num2 = ''
let num=document.getElementsByClassName('num')
Array.from(num).forEach(nums =>{
    nums.addEventListener('click',()=>{
        if(sym=''){
            num1=num1+nums.textContent
        }
        else{
            num2=num2+nums.textContent
        }
    })
})
