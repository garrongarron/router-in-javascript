import router from './modules/Router.js'

import { showMenu } from './modules/Menu.js'

document.body.appendChild(showMenu())

router.goTo('landing')

