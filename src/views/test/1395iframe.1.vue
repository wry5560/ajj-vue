<template>
<div style="height:100%">
  <iframe v-for="(item,index) in iframeList" :key="index"   style="background:#fff;padding:5px" frameborder="0" width="100%" height="99%" :src="item.src" :ref="item.name" v-show="item.show" ></iframe>
</div>
</template>
<script>
export default {
  data () {
    return {
      routeNames: [],
      iframeList: []
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // console.log(vm.$store.state.app.tagNavList)
      let tagNavList = vm.$store.state.app.tagNavList
      let array = []
      for (let item of tagNavList) {
        if (item.meta.iframeUrl) {
          vm.routeNames.push(item.name)
          let obj = {
            src: item.meta.iframeUrl,
            name: item.name,
            show: item.name === to.name
          }
          array.push(obj)
        }
      }
      vm.iframeList = array
    }
    )
  },
  watch: {
    '$route' (to) {
      if ((this.routeNames.indexOf(to.name) < 0) && to.meta.iframeUrl) {
        let obj = {
          src: to.meta.iframeUrl, name: to.name, show: true
        }
        this.iframeList.push(obj)
      }
      for (let item of this.iframeList) {
        if (item.name === to.name) {
          console.log(item)
          item.show = true
        } else {
          item.show = false
        }
      }
    }
  }
}
</script>
