<template>
  <div  style="height: 100%; width: 100%">
    <!--<div>测试</div>-->
    <!--<router-link :to="{name:'iframeBaidu'}">baidu</router-link>-->
    <!--<router-link :to="{name:'iframeTaobao'}">taobao</router-link>-->
    <div v-for="(item,index) in iframeList" style="width:calc(100% + 48px);height:calc(100% + 24px)" v-show="item.show">
      <keep-alive>
        <iframe  :key="index"   frameborder="0" width="100%" height="100%" :src="item.src" :ref="item.name" ></iframe>
      </keep-alive>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'iframeRouteTest',
    data () {
      return {
        routeNames: [],
        iframeList: []
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => {
          // console.log(vm.$store.state.app.tagNavList)
          let tagNavList =[
            {
              name: 'iframeBaidu',
              meta: { iframeUrl:'https://www.baidu.com', keepAlive: true, permission: [ 'user' ] },
            },
            {
              name: 'iframeTaobao',
              meta: { iframeUrl:'http://feooe.myds.me:6200/asrsajj/g.html?menuId=10002031',keepAlive: true, permission: [ 'user' ] },
            },
            {
              name: 'iframeQQ',
              meta: { iframeUrl:'http://feooe.myds.me:6200/asrsajj/g.html?menuId=10002032',keepAlive: true, permission: [ 'user' ] },
            }
          ]
          let array1 = []
          let array2 = []
          for (let item of tagNavList) {
            if (item.meta.iframeUrl) {
              array1.push(item.name)
              let obj = {
                src: item.meta.iframeUrl,
                name: item.name,
                show: item.name === to.name
              }
              array2.push(obj)
              debugger
            }
          }
          vm.iframeList = array2
          vm.routeNames=array1
        }
      )
    },
    // beforeRouteUpdate (to, from, next) {
    //   for (let item of this.iframeList){
    //     if (item.name === to.params.menuID){
    //       item.show=true
    //     }else{
    //       item.show=false
    //     }
    //   }
    //   next()
    // }
    watch: {
      '$route' (to) {
        // if ((this.routeNames.indexOf(to.params.menuID) < 0) && to.meta.iframeUrl) {
        //   let obj = {
        //     src: to.meta.iframeUrl, name: to.name, show: true
        //   }
        //   this.iframeList.push(obj)
        // }
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

<style scoped>
  iframe{
    margin: -24px;
    margin-bottom: 0;
  }
</style>