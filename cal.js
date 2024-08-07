//for getting symbol of calculator//

let symbol = document.getElementsByClassName('symbol')
let sym;
Array.from(symbol).forEach(element => {
    element.addEventListener('click',()=>{
        sym=element.textContent

    })
    
});
