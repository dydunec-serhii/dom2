// const div = document.querySelector('.div');
// div.addEventListener('click', (event) => {
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.currentTarget);
// })
// document.addEventListener('keydown', event => {
// console.log(event.key);
// console.log(event.code);
// })
// document.addEventListener('keyup', event => {
//     console.log(event);
//     })
const dox = document.querySelector('#box');
let position = window.innerWidth / 2 - 25;
document.addEventListener('keydown', (event) => {
    const step = 10;
    if (event.key === 'ArrowLeft') {
        position -= step;
    }
    if (event.key === 'ArrowRight') {
        position += step;
    }
    box.style.left = `${position}px`
    box.style.left = `${position}px`
})
// document.addEventListener('click', (event) => {
//  document.querySelector('.clientX').textContent = event.clientX;
//  document.querySelector('.clientY').textContent = event.clientY;
//  document.querySelector('.pageX').textContent = event.pageX;
//  document.querySelector('.pageY').textContent = event.pageY;

// })
const block = document.querySelector('.block');
document.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;
    const centreWIdth = block.offsetWidth / 2;
    const centreHeight = block.offsetHeight / 2;
    const vidstan = x - centreWIdth;
    const vidstan2 = y - centreHeight;
    block.style.left = vidstan + 'px';
    block.style.top = vidstan2 + 'px';
    // Рухаємо блок на відстань, яку миша змістилася відносно центру блоку
});