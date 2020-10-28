<template>
    <div class="contact-user-info">
        <div class="info__avatar"></div>
        <div class="info__content">
            <div class="info__name">
                <!-- <span>{{contact_info.phone}}</span> -->
            </div>
            <div class="info__tools">
                <button class="start-call">
                    <span>call</span>
                </button>
                <button class="start-chat">
                    <span>start chat</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: "contact-user-info",
    props: {},
    data() {
        return {
            contact_data: {}
        }
    },
    computed: {
        ...mapState([
            'contacts'
        ])
    },
    mounted() {
      this.contacts.find((contact) => {
        if (contact.id === this.$route.query.id) {
          this.contact_info = contact
        }
      })
    }
}
</script>