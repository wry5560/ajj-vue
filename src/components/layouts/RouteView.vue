<template>
    <keep-alive  v-if="keepAlive">
    <router-view />
  </keep-alive>
  <span v-else >
    <router-view/>
  </span>
</template>

<script>
  export default {
    name: 'RouteView',
    computed: {
      keepAlive () {
        return this.$route.meta.keepAlive
      },

    },
  }
</script>