const btnBurger = document.querySelector('.btn-burger'),
catalog = document.querySelector('.catalog'),
overlay = document.querySelector('.overlay'),
btnClose = document.querySelector('.btn-close'),
subcatalog = document.querySelector('.subcatalog'),
catalogList = document.querySelectorAll('.catalog-list'),
btnReturn = document.querySelector('.btn-return');

const openMenu = () => {
    catalog.classList.add('open')
    overlay.classList.add('active')
}

const openSubMenu = (event) => {
    event.preventDefault()
    // subcatalog.classList.add('subopen')
}

const closeMenu = () => {
    catalog.classList.remove('open')
    overlay.classList.remove('active')
    closeSubMenu()
}

const closeSubMenu = () => {
    subcatalog.classList.remove('subopen')
}


btnBurger.addEventListener('click', openMenu)
overlay.addEventListener('click', closeMenu)
btnClose.addEventListener('click', closeMenu)

catalogList.addEventListener('clicl', openSubMenu)

btnReturn.addEventListener('click', closeSubMenu)