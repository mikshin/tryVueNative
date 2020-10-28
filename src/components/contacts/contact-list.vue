<template>
    <div class="contact-list">
        <contact-user
            v-for="contact in contacts"
            :key="contact.id"
            :contact_data="contact"
            @to-contact-info="toContactInfo(contact)"
        />
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
            'fetch_contacts',
            'set_user_to_header'
        ]),
        toContactInfo(contact) {
            this.$router.push({
                name: 'contact',
                query: {'id' : contact.id }
            })
            this.set_user_to_header(contact.name)
        }
    },
    computed: {
        ...mapState([
            'contacts'
        ])
    },
    mounted() {
        this.fetch_contacts()
    }
}
</script>