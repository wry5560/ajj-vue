<template>
  <span class="header-buttons-bar">
      <a-select></a-select>
      <a @click="closeTabs" >一键关闭</a>
      <a @click="reFreshRoute" >刷新本页</a>
  </span>
</template>
<script>
  export default{
    name: 'HeaderButtonsBar',
    methods:{
      closeTabs(){
        console.debug('closeTabs')
      },
      reFreshRoute(){
        //iframe页面的刷新
        if (this.$store.state.iframePages.pages.indexOf(this.$route.path)>0){
            // debugger
          const thisFrameRouteIndex =this.$store.state.iframePages.routes.findIndex((item)=>{return item.path==this.$route.path})
          if (thisFrameRouteIndex>-1){
            const thisFrameRoute= this.$store.state.iframePages.routes.splice(thisFrameRouteIndex,1)
            setTimeout(()=>this.$store.state.iframePages.routes.push(thisFrameRoute[0]),65)
          }
        }else{
          //普通vue router页面的刷新
          if (this.$route.meta.keepAlive){
            this.$store.commit('SET_FRESH_KEEPALIVE')
            this.$route.meta.keepAlive = false
            this.$router.push('/fresh')
          }else{
            this.$router.push('/fresh')
          }
        }
      },
    }
  }
</script>
<style lang="scss" scoped>
  .header-buttons-bar{
    a {
      color: rgba(0, 0, 0, 0.71);
      line-height: 22px;
      display: inline-block;
      &:hover {
        color: #1890ff;
      }
      margin-left:5px;
      padding:0 10px;
    }
  }
</style>