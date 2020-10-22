import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        contacts: []
    },
    getters: {},
    mutations: {
        set_contacts_to_store(state, contacts) {
            state.contacts = contacts;
        }
    },
    actions: {
        fetch_contacts({commit}) {
            return axios.get('http://localhost:8080/contacts')
            .then((contacts) => {
                commit('set_contacts_to_store', contacts.data)
            })
        } 
    }
});

export default store;