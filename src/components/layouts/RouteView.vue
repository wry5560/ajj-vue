<template>
  <span v-if="keepAlive">
    <keep-alive>
    <router-view />
  </keep-alive>
    <keep-alive>
      <router-view name="iframeView"></router-view>
    </keep-alive>
  </span>
  <span v-else >
    <router-view />
    <router-view name="iframeView"></router-view>
  </span>
</template>

<script>
  export default {
    name: 'RouteView',
    computed: {
      keepAlive () {
        return this.$route.meta.keepAlive
      }
    },
  }
</script>