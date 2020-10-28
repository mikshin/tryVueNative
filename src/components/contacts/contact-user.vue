<template>
    <div class="contact-user" 
        @click="toContactInfo"
    >
        <div class="user__avatar">

        </div>
        <div class="user__name">
            <span>{{ contact_data.name }}</span>
        </div>
        <div class="user__status">
            <span>{{ contact_data.name }}</span>
        </div>    
    </div>
</template>

<script>
export default {
    name: "contact-user",
    props: {
        contact_data: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {}
    }, 
    computed: {

    },
    methods: {
        toContactInfo() {
            this.$emit('to-contact-info')
        }
    }
}
</script>