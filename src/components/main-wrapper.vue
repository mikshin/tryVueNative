<template>
    <div class="main-wrapper">
        <vHeader/>
        <router-view></router-view>
        <vFooter/>
    </div>
</template>

<script>

import vHeader from "./layouts/v-header"
import vFooter from "./layouts/v-footer"

export default {
    name: "main-wrapper",
    components: {
        vHeader,
        vFooter
    },
    props: {},
    data() {
        return{} 
    },
    computed: {}
}
</script>

<style lang="scss" scoped>

</style>