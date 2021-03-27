import router from './Router.js'

let showMenu = () =>{
    let links = {
        'landing': 'Home',
        'products': 'Our amazing products',
        'contactUs': 'Contact us',
    }

    let menu = document.createElement('ul')
    Object.keys(links).map(key =>{
        let linkNonde = document.createElement('li')
        linkNonde.innerText = links[key]
        linkNonde.addEventListener('click', ()=>{
            router.goTo(key)
        }) 
        menu.appendChild(linkNonde)
    })
    
    return menu
}

export { showMenu }