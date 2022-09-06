const menuBar = document.getElementById('menu-bar');
const menuToggle = document.querySelector('.menu-toggle-bar')


menuBar.addEventListener('click', (e) => {
    e.preventDefault();
    menuToggle.classList.toggle('toggle')
})




const btn  = document.getElementById('btn')
const active = document.querySelector('.box')

btn.addEventListener('click', () => {
    active.classList.toggle('active')
})

