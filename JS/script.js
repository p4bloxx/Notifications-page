/* VARIABLES */
const counter = document.getElementById('counter');
const marker = document.getElementById('marker');
const cards = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot')

marker.addEventListener('click', () => {
  cards.forEach(el => {
    el.style.backgroundColor = 'white'
  })

  dots.forEach(el => {
    el.style.opacity = 0
  })

  counter.innerText = 0
})