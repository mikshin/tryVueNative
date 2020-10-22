<template>
    <div class="footer">
        <router-link :to="{name: 'contacts'}">
           <span>1</span>
        </router-link>
        <router-link :to="{name: 'contacts'}">
           <span>2</span>
        </router-link>
        <router-link :to="{name: 'contacts'}">
           <span>3</span>
        </router-link>
        <router-link :to="{name: 'contacts'}">
           <span>4</span>
        </router-link>
        <router-link :to="{name: 'contacts'}">
           <span>5</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "footer",
        props: {},
        data() {
            return {}
        },
        computed: {},
    }
</script>

<style lang="scss" scoped>

</style>