<template>
  <div class="user-list">
      <vUser
        v-for="chat in chats"
        :key="chat.id"
      /> 
  </div>
</template>

<script>
import vUser from './v-user'
import {mapActions, mapState} from 'vuex'

export default {
    name: 'user-list',
    component: { 
        vUser
    },
    props: {},
    data() {
        return {}
    },
    computed: {
        ...mapState([
            'chats'
        ])
    },
    methods: {
       ...mapActions([
           'fetch_chats',
           'set_user_to_header'
       ]) 
    },
    mounted() {
        this.fetch_chats() 
    }
}
</script>