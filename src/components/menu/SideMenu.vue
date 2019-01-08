<template>
  <a-layout-sider
    :class="['sider', isDesktop() ? null : 'shadow', theme, fixSiderbar ? 'ant-fixed-sidemenu' : null ]"
    width="256px" 
    :collapsible="collapsible"
    v-model="collapsed" 
    :trigger="null">
    <logo />
    <s-menu
      :collapsed="collapsed"
      :menu="menus"
      :theme="theme"
      :mode="mode"
      @onClick="onClick"
      @select="onSelect"
      style="padding: 16px 0px;"></s-menu>
  </a-layout-sider>

</template>

<script>
  import ALayoutSider from 'ant-design-vue/es/layout/Sider'
  import Logo from '../tools/Logo'
  import SMenu from './index'
  import { mixin, mixinDevice } from '@/utils/mixin.js'

  export default {
    name: 'SideMenu',
    components: { ALayoutSider, Logo, SMenu },
    mixins: [mixin, mixinDevice],
    props: {
      mode: {
        type: String,
        required: false,
        default: 'inline'
      },
      theme: {
        type: String,
        required: false,
        default: 'dark'
      },
      collapsible: {
        type: Boolean,
        required: false,
        default: false
      },
      collapsed: {
        type: Boolean,
        required: false,
        default: false
      },
      menus: {
        type: Array,
        required: true
      }
    },
    methods: {
      onSelect (obj) {
        this.$emit('menuSelect', obj)
      },
      onClick(obj){
        // let title=''
        // function matchTitle(path,routers) {
        //   routers.forEach((router)=>{
        //     if (router.path ===path && router.meta.title){
        //       title=router.meta.title
        //     }
        //     if (router.children){matchTitle(path,router.children)}
        //   })
        // }
        // matchTitle(obj.key,this.$store.getters.addRouters)
        // // debugger
        // const payload={
        //   title:title,
        //   key :obj.key
        // }
        // this.$store.commit('ADD_HEADERTAB',payload)
        // debugger
      }
    }
  }
</script>