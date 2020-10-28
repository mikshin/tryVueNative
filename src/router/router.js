import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import contactList from '../components/contacts/contact-list'
import contactUserInfo from '../components/contacts/contact-user-info'
import userList from '../components/users/user-list'

let router = new Router ({
    routes: [
        {
            path: '/',
            name: 'contacts',
            component: contactList
        },
        {
            path: '/contact',
            name: 'contact',
            component: contactUserInfo 
        },
        {
            path: '/chats',
            name: 'chats',
            component: userList
        }
    ]
})

export default router;