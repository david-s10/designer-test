const links = document.querySelectorAll('.nav__link')
const cards = document.querySelectorAll('.how__card')
const boardForCursor = document.querySelector('.categories__section')
const dino = document.querySelector('.categories__dino')
const girl = document.querySelector('.start__img')

// function animCursor(e){
//     const cursor = this.querySelector('.categories__cursor')
//     const rect = boardForCursor.getBoundingClientRect()
//     const x = e.clientX - (rect.width / 2)
//     const y = e.clientY - (rect.height / 2)
//     cursor.style.transform = `translate(${x}px, ${y}px)`
//     console.log(x, y)
//     console.log(cursor.style.top)

// }

const girlAnim = (e) => {
    animObj(girl, e)
}

const dinoAnimate = (e) => {
    animObj(dino, e)
}

const animObj = (obj, e) => {
    // const obj = document.querySelector(classObj)
    const ract = obj.getBoundingClientRect()
    const x = e.clientX - (ract.left + Math.floor(ract.width / 2))
    const y = e.clientY - (ract.top + Math.floor(ract.height / 2))
    obj.style.transform = `translate(${x}px, ${y}px)`
}
const objMouseLeave = (obj) => {
    obj.removeAttribute('style')
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
    const contur = arrow.querySelector('path')
    if(textContainer.style.height){
        textContainer.removeAttribute('style')
        arrow.removeAttribute('style')
        contur.removeAttribute('style')
    }else{
        textContainer.style.height = textContainer.scrollHeight + 'px'
        arrow.style.transform = 'rotate(30deg)'
        contur.style.stroke = '#FAA1A1'
    }
}

// boardForCursor.addEventListener('mousemove', animCursor)
girl.addEventListener('mousemove', girlAnim)
girl.addEventListener('mouseleave', () => objMouseLeave(girl))
dino.addEventListener('mousemove', dinoAnimate)
dino.addEventListener('mouseleave', () => objMouseLeave(dino))
links.forEach(el => el.addEventListener('click', linksClass))
cards.forEach(el => el.addEventListener('click', cardHeightAnim))





