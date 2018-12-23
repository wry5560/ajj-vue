<template>
    <vue-iframe
      :menuUrl="getMenuPath"
      :menuName="menuName"
    ></vue-iframe>
</template>

<script>
  import PageLayout from '@/components/page/PageLayout'
  import RouteView from '@/components/layouts/RouteView'
  import vueIframe from '@/components/Iframe/Iframe'

  export default{
      components:{
        RouteView,
        PageLayout,
        vueIframe
      },
      data (){
          return {
            menuName:'111',
            menuPathName:this.$route.name
          }
      },
    watch: {
      '$route' (to, from) {
        this.menuPathName=to.name
      }
    },
    computed:{
        getMenuPath(){
          // return 'http://feooe.myds.me:6200/asrsajj/g.html?menuId='+ this.menuPathName
          return 'http://feooe.myds.me:6200/asrsajj/g.html?menuId=10002031'
        }
    }
  }
</script>