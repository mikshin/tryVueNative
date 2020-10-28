<template>
    <div class="header">
        <div 
        class="header__back" 
        @click="goBack"
        v-if="!isCoreRoute">
            <span>Назад</span>
        </div>
        <div 
        class="header__user_info"
        v-if="!isCoreRoute">
            <span>{{currentUserChat}}</span>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "v-header",
        props: {},
        data() {
            return {}
        },
        methods: {
            goBack() {
                this.$router.go(-1)
            }
        },
        computed: {
            ...mapState ([
                'currentUserChat'
            ]),
            isCoreRoute() {
                return this.$route.path === '/'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>