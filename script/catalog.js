import {getData} from './getData.js'
import generateSubCatalog from './generateSubCatalog.js'


export const catalogMenu = () => {
    const updateSubCatalo = generateSubCatalog()

    const btnBurger = document.querySelector('.btn-burger'),
        catalog = document.querySelector('.catalog'),
        btnClose = document.querySelector('.btn-close'),
        subcatalog = document.querySelector('.subcatalog'),
        catalogList = document.querySelector('.catalog-list'),
        overlay = document.createElement('div');

    overlay.classList.add('overlay')
    document.body.insertAdjacentElement('beforeend', overlay)

    const openMenu = () => {
        catalog.classList.add('open')
        overlay.classList.add('active')
    }

    const openSubMenu = event => {
        event.preventDefault()
        const target = event.target
        const itemList = event.target.closest('.catalog-list__item')
        if (itemList){
            getData.subCatalog(target.textContent, (data) => {
                updateSubCatalo(target.textContent, data)
                subcatalog.classList.add('subopen')
            })

            
        }
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
    catalogList.addEventListener('click', openSubMenu)
    subcatalog.addEventListener('click', (e) => {
        const btnReturn = e.target.closest('.btn-return');
        if (btnReturn) closeSubMenu();
    })
}