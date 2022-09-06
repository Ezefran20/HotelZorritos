const menuBar = document.getElementById('menu-bar');
const menuToggle = document.querySelector('.menu-toggle-bar')


menuBar.addEventListener('click', (e) => {
    e.preventDefault();
    menuToggle.classList.toggle('toggle')
})


const closeA = document.querySelector('.mariscos')
const closeB = document.querySelector('.bar')


function clicka(params) {
    alert('sexSo')
}

closeA.getElementsByClassName('box').forEach(a => {
    a.addEventListener('click', clicka);
  });