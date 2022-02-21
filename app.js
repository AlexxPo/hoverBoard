const board = document.querySelector('#board')
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
const SQUARES_NUMBER = 600

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    // square.addEventListener('mouseover', () => setColor(square))
    // square.addEventListener('mouseleave', () => removeColor(square))
    // можно сделать так:
    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)
    // смотри ниже:

    board.append(square);
}

// function setColor(element) {
    // Тогда присваиваем event.target константе
function setColor(event) {
    const element = event.target


    const color = getRandomColor()
    element.style.backgroundColor = color
    elemant.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

// function removeColor(element) {
    // то же самое для removeColor:
function removeColor(event) {
    const element = event.target


    element.style.backgroundColor = '#1d1d1d'
    elemant.style.boxShadow = `0 0 2px #000`
}

// function getRandomColor() {
//     const index = Math.floor(Math.random() * colors.length)

//     return colors[index]
// }
// можно ещё так:
function getRandomColor() {    
        return colors[Math.floor(Math.random() * colors.length)]
    }