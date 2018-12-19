<template>
    <vue-iframe
      :menuUrl="menuUrl"
      :menuName="menuName"
    ></vue-iframe>
</template>

<script>
  import PageLayout from '@/components/page/PageLayout'
  import RouteView from "@/components/layouts/RouteView"
  import vueIframe from "@/components/Iframe/Iframe"

  export default{
      components:{
        RouteView,
        PageLayout,
        vueIframe
      },
      data (){
          return {
              menmuName:'111',
              menuUrl:'https://www.baidu.com'
          }
      }
  }
</script>