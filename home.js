// nav style

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

// show or hide faq answer

const fcoln = document.querySelectorAll('.fcoln')

fcoln.forEach(fcoln => {
    fcoln.addEventListener('click',()=> {
        fcoln.classList.toggle('open');

        //change plus icon

        const icon = fcoln.querySelector('.ficon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus"
        }
        // to chane it back to plus after clicking
        else{
            icon.className ='uil uil-plus'
        }
    })

})

//menu button
const menu = document.querySelector('.menu');
const openbtn = document.querySelector('#openbtn');
const closebtn = document.querySelector('#closebtn');

openbtn.addEventListener('click', () =>{
    menu.style.display = 'block';
    closebtn.style.display = 'inline-block'
    openbtn.style.display = 'none'
})
closebtn.addEventListener('click', () =>{
    menu.style.display = 'none';
    closebtn.style.display = 'none'
    openbtn.style.display = 'inline-block'
})