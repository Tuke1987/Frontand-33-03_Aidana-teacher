// function init() {
//     let name = prompt('name - ')
//     let displayName = () => {
//         return alert(name)
//     }
//     return displayName()
// }
//
// init()

//slider
const fileInput = document.querySelector('#file')
const slider = document.querySelector('.slider')
const slidesContainer = document.querySelector('.slides')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')

let imgFiles = []
let currentSlide = 0

fileInput.onchange = (e) => {
    const files = Array.from(e.target.files)
    if (files.length === 0) return alert('Файл не выбран!')

    imgFiles = imgFiles.concat(files)
    console.log(files)

    slidesContainer.innerHTML = ''

    imgFiles.forEach((file, index) => {
        const  imgUrl = URL.createObjectURL(file)
        const  slide = document.createElement('div')
        slide.className = 'slide'
        slide.innerHTML = `<img src="${imgUrl}" alt="Slide ${index + 1}">`
        slidesContainer.appendChild(slide)
    })
    showIndex(currentSlide)
}
console.log(imgFiles)

function showIndex(index){
    const slides = document.querySelectorAll('.slide')
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    })
}

prevButton.addEventListener('click', () => {
    if (currentSlide > 0){
        currentSlide --
        showIndex(currentSlide)
    }
})

nextButton.addEventListener('click', () => {
    if (currentSlide < imgFiles.length - 1){
        currentSlide++
        showIndex(currentSlide)
    }

})

    const div = document.createElement('div')
    const deleteButton = document.createElement('button')
    const divButtons = document.createElement('div')

    deleteButton.innerHTML = 'DELETE'

    deleteButton.setAttribute('class', 'delete_button')
    divButtons.setAttribute('class', 'div_button')

    divButtons.append(deleteButton)
    div.append( divButtons)

    deleteButton.onclick = () => div.remove()