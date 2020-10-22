import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import contactList from '../components/contacts/contact-list'

let router = new Router ({
    routes: [
        {
            path: '/',
            name: 'contacts',
            component: contactList
        }
    ]
})

export default router;