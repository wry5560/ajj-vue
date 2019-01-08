<template>
  <div>
    <a-button @click="addTab">tab add test</a-button>
    <div>测试</div>
    <router-link to="/iframe/test/aaa">aaa</router-link>
    <router-link to="/iframe/test/bbb">bbb</router-link>
    <keep-alive>
      <router-view></router-view>
      <router-view name="aaa"></router-view>
      <router-view name="bbb"></router-view>
    </keep-alive>

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