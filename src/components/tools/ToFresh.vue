<template></template>

<script>
  export default {

    beforeRouteEnter (to, from, next) {
      next(vm => {
        if(vm.$store.state.app.freshKeepAlive){
          from.meta.keepAlive=true;
          vm.$store.commit('RESET_FRESH_KEEPALIVE')
        }
      })
    },
    created(){
      this.$router.go(-1)
    }
  }
</script>