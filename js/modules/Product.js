import cache from './Cache.js'

class Product{
    constructor(title){
        this.container = document.createElement('div')
        let h1 = document.createElement('h1')
        h1.innerText = title
        let p = document.createElement('p')
        p.innerText = 'dummy text'
        this.container.appendChild(h1)
        this.container.appendChild(p)
    }
    open(){
        document.body.appendChild(this.container)
    }
    close(){
        cache.appendChild(this.container) 
    }
}

let product = new Product('Products')

export default product