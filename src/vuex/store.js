import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        contacts: [],
        chats: [],
        currentUserChat: {}
    },
    getters: {},
    mutations: {
        set_contacts_to_store(state, contacts) {
            state.contacts = contacts;
        },
        set_chats_to_store(state,chats) {
            state.chats = chats;
        },
        set_user_to_head(state,user) {
            if (user) {
                state.currentUserChat = user;
            } else {
                state.currentUserChat = '';
            }
        }
    },
    actions: {
        fetch_contacts({commit}) {
            return axios.get('http://localhost:3000/contacts')
            .then((contacts) => {
                commit('set_contacts_to_store', contacts.data)
            })
        },
        fetch_chats({commit}) {
            return axios.get('http://localhost:3000/chats')
            .then((chats) => {
                commit('set_chats_to_store', chats.data)
            })
        },
        set_user_to_header ({commit}, user) {
            commit('set_user_to_head', user)
        }
    }
});

export default store;