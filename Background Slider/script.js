//get elements
const body = document.body

const slides = document.querySelectorAll('.slide')

const leftBtn = document.getElementById('left')

const rightBtn = document.getElementById('right')

let activeSlide =0

//when we click on left and right arrow decrease and increase slide by one
//if it past last slide ,go back to the first
rightBtn.addEventListener('click' , ()=>{

  activeSlide++

  if(activeSlide > slides.length - 1){

    activeSlide = 0
  }
  setBgBody()

  setActiveSlide()
})

leftBtn.addEventListener('click' , ()=>{

  activeSlide--

  if(activeSlide < 0){

    activeSlide = slides.length - 1

  }
  setBgBody()

  setActiveSlide()
})

setBgBody()

function setBgBody(){

  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide(){

  slides.forEach((slide)=>

    slide.classList.remove('active'))
    
    slides[activeSlide].classList.add('active')

  
}