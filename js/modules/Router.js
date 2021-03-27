import landing from './Landing.js'
import products from './Product.js'
import contactUs from './ContactUs.js'


let pages = {
    'landing': landing,
    'products': products,
    'contactUs': contactUs,
}

class Router{
    constructor(){
        this.prevPage = null
    }
    goTo(page){
        if(this.prevPage != null){
            this.prevPage.close()
        }
        pages[page].open()
        this.prevPage = pages[page]
    }
}

let router = new Router()



export default router
