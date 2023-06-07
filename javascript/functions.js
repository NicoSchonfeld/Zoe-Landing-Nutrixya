window.onscroll = function(){

    scroll = document.documentElement.scrollTop
    let header = document.querySelector(`.header`)

    if(scroll > 90){
        header.classList.add(`nav_mod`) //le agregamos al NODO header la clase `nav_mod` la cual le aplicamos atributos en css
    }
    else if(scroll < 90){
        header.classList.remove(`nav_mod`)
    }
}

const slider = () => {
    const sliders = [...document.querySelectorAll(`.app__container__body`)]

    console.log(sliders)

    const btnNext = document.querySelector(`#next`)
    const btnBefore = document.querySelector(`#before`)
    let value

    btnNext.addEventListener(`click`, () => {
        changePosition(1)
    })

    btnBefore.addEventListener(`click`, () => {
        changePosition(-1)
    })

    const changePosition = (add) => {

        const currentapp = document.querySelector(`.app__body--show`).dataset.id

        value = Number(currentapp)
        value += add
        
        sliders[Number(currentapp)-1].classList.remove(`app__body--show`)

        if(value == sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1
        }
        
        console.log(value)

        sliders[value-1].classList.add(`app__body--show`)
    }
}

slider()

const menu = () => {
    
    const btnOpen = document.querySelector(`.nav__menu`)
    const btnClose = document.querySelector(`.nav__close`)
    const navMenu = document.querySelector(`.nav__link`)

    btnOpen.addEventListener(`click`, () => {
        
        navMenu.classList.add(`nav__link--show`)

        btnClose.addEventListener(`click`, () => {
            navMenu.classList.remove(`nav__link--show`) 
        })
    })
}

menu()