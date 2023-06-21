const links = document.querySelectorAll('.nav__link')
const cards = document.querySelectorAll('.how__card')
const dino = document.querySelector('.categories__dino')
const boardForCursor = document.querySelector('.categories__section')

// function animCursor(e){
//     const cursor = this.querySelector('.categories__cursor')
//     const rect = boardForCursor.getBoundingClientRect()
//     const x = e.clientX - (rect.width / 2)
//     const y = e.clientY - (rect.height / 2)
//     cursor.style.transform = `translate(${x}px, ${y}px)`
//     console.log(x, y)
//     console.log(cursor.style.top)

// }

const dinoAnimate = (e) => {
    const ract = dino.getBoundingClientRect()
    const x = e.clientX - (ract.left + Math.floor(ract.width / 2))
    const y = e.clientY - (ract.top + Math.floor(ract.height / 2))
    dino.style.transform = `translate(${x}px, ${y}px)`
}
const dinoOnMouseLeave = () => {
    dino.removeAttribute('style')
}

const linksClass = (e) => {
    links.forEach(i => {
        i.classList.remove('active')
    })
    e.target.classList.add('active')
}

const cardHeightAnim = function() {
    const textContainer = this.querySelector('.how__card-text')
    const arrow = this.querySelector('.how__card-btn')
    if(textContainer.style.height){
        textContainer.removeAttribute('style')
        arrow.removeAttribute('style')
    }else{
        textContainer.style.height = textContainer.scrollHeight + 'px'
        arrow.style.transform = 'rotate(30deg)'
    }
}

// boardForCursor.addEventListener('mousemove', animCursor)
dino.addEventListener('mousemove', dinoAnimate)
dino.addEventListener('mouseleave', dinoOnMouseLeave)
links.forEach(el => el.addEventListener('click', linksClass))
cards.forEach(el => el.addEventListener('click', cardHeightAnim))





