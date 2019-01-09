<template>
  <div>
    <a-button @click="addTab">tab add test</a-button>
    <div>测试</div>
  </div>
</template>

<script>
  import RouteView from "../../components/layouts/RouteView";
  export default {
    components: {RouteView},
    methods:{
      addTab(){
        const payload={
          title:'首页',
          key:'/index'
        }
        this.$store.commit('ADD_HEADERTAB',payload)
      }
    }
  }

</script>