let buttons = document.querySelectorAll('button')
let para = document.querySelectorAll('p')
let arrow = document.querySelectorAll('.arrow')

function remover() {
    for(let button of buttons) {
        button.classList.remove('clicked')
    }
}

function flipper() {
    for (let arr of arrow) {
        arr.classList.remove('rotate')
    }
}
for (let par of para) {
par.style.color = 'transparent'
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() { 
        remover()
        flipper()      

    if(para[i].style.color == 'transparent'){
        for(let par of para) {
            par.classList.remove('slide')
            arrow[i].classList.add('rotate')
            par.style.color = 'transparent'
            
        }
        para[i].classList.add('slide')
        para[i].style.color = 'hsl(240, 6%, 50%)'
       
        buttons[i].classList.add('clicked');
        
        
        
       
    } else {
    para[i].classList.remove('slide')
    buttons[i].classList.remove('clicked')
    arrow[i].classList.remove('rotate')
    para[i].style.color = 'transparent'
    console.log('hi');


    } 
    }
    ) } 


    