<template>
  <global-layout>
    <transition name="page-transition">
      <span>
        <span v-show="!showIframe">
          <keep-alive  v-if="keepAlive  && !freshView" >
            <router-view/>
          </keep-alive>
          <span  v-else>
            <router-view  v-if="!freshView"/>
          </span>
        </span>
        <keep-alive>
          <span v-show="showIframe">
          <iframe-pages  v-for="route in iframePages" :menuUrl="baseUrl+route.menuId" v-show="route.path ===pathNow"></iframe-pages>
        </span>
        </keep-alive>
      </span>
    </transition>
  </global-layout>
</template>
<script>
  import GlobalLayout from '@/components/page/GlobalLayout'
  import IframePages from "../Iframe/Iframe.vue";

  export default {
    name: 'BasicLayout',
    components: {
      IframePages,
      GlobalLayout
    },
    data () {
      return {
          baseUrl:'http://feooe.myds.me:6200/asrsajj/g.html?menuId='
      }
    },
    created(){
      if (this.$store.state.iframePages.pages.indexOf(this.$route.path)>=0) {
        const payload={
          path:this.$route.path,
          menuId:this.$route.name
        }
        this.$store.commit('ADD_PAGE',payload)
        this.$store.commit('SHOW_IFRAMEPAGES')
      }
    },
    watch: {
      '$route' (to, from) {
//        debugger
        if (this.$store.state.iframePages.pages.indexOf(to.path)>=0) {
          const payload={
            path:to.path,
            menuId:to.name
          }
          this.$store.commit('ADD_PAGE',payload)
          this.$store.commit('SHOW_IFRAMEPAGES')
        }else{
//          debugger
          this.$store.commit('NOT_SHOW_IFRAMEPAGES')
        }
      }
    },
    computed: {
      keepAlive () {
        return this.$route.meta.keepAlive
      },
      showIframe(){
        return this.$store.state.iframePages.showIframe
      },
      iframePages(){
        return this.$store.state.iframePages.routes
      },
      pathNow(){
        return this.$route.path
      },
      freshView(){
        return this.$store.state.app.freshView
      }
    },
    methods: {

    },
  }
</script>

<style lang="scss">

  /*
 * The following styles are auto-applied to elements with
 * transition="page-transition" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the page transition by editing
 * these styles.
 */

  .page-transition-enter {
    opacity: 0;
  }

  .page-transition-leave-active {
    opacity: 0;
  }

  .page-transition-enter .page-transition-container,
  .page-transition-leave-active .page-transition-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>