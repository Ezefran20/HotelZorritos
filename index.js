const menuBar = document.getElementById('menu-bar');
const menuToggle = document.querySelector('.menu-toggle-bar')


menuBar.addEventListener('click', (e) => {
    e.preventDefault();
    menuToggle.classList.toggle('toggle')
})

const active = document.querySelector('.active')
const on = document.querySelector('.onclick')
active.addEventListener('click', () => {
    on.classList.toggle('active')
})

// ------------------ BOTON UP --------------------- //

const btn_scrolltop = document.getElementById("up-btn")
btn_scrolltop.addEventListener('click', () => {
  window.scrollTo(0, 0)
})

window.onscroll = () => {
add_btn_scrolltop()
}

const add_btn_scrolltop = () => {
  btn_scrolltop.classList.toggle("btnToggle")
}
