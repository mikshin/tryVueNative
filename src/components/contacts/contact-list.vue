<template>
    <div class="contact-list">
        <contact-user/>
    </div>
</template>

<script>
import contactUser from "./contact-user"
import {mapActions, mapState} from 'vuex'

export default {
    name: "contact-list",
    components: {
        contactUser
    },
    props: {},
    data() {
        return {}
    },
    methods: {
        ...mapActions([
            'fetch_contacts'
        ])
    },
    mounted() {
        this.fetch_contacts()
    },
    computed: {}
}
</script>