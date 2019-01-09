<template>
  <div class="header-tabs-bar" >
    <div style="background-color: #f0f2f5;">
      <a-tabs
        v-model="activeKey"
        type="editable-card"
        @change="tabChange"
        @edit="onEdit"
        :hideAdd= "true"
        size="small"
      >
        <a-tab-pane v-for="pane in panes" :tab="pane.title" :key="pane.key" :closable="pane.closable">
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>

  export default {
    data () {
      return {}
    },
    computed:{
      panes(){
        return this.$store.state.headerTabs.panes
      },
      activeKey:{
        get:function (){return this.$store.state.headerTabs.activeKey},
        set:function () {}
      },
      newTabIndex(){
        return this.$store.state.headerTabs.newTabIndex
      }
    },
    created(){
      const payload={
        title:this.$route.meta.title ? this.$route.meta.title:'',
        key: this.$route.path
      }
      this.$store.commit('ADD_HEADERTAB',payload)
    },
    watch:{
      '$route':'addTabs'
    },
    methods: {
      callback (key) {
        console.log(key)
      },
      addTabs(to){
        if (to.name==='Exception404'&& this.$store.state.headerTabs.panes.length===0)return
        let title=''
        function matchTitle(path,routers) {
          routers.forEach((router)=>{
            if (router.path ===path && router.meta.title){
              title=router.meta.title
            }
            if (router.children){matchTitle(path,router.children)}
          })
        }
        matchTitle(this.$route.path,this.$store.getters.addRouters)
        // debugger
        const payload={
          title:title,
          key :this.$route.path
        }
        this.$store.commit('ADD_HEADERTAB',payload)
      },
      tabChange(activekey){
        this.$store.commit('CHANGE_HEADERTAB_ACTIVEKEY',activekey)
        this.$router.push(activekey)
      },
      onEdit (targetKey, action) {
        this[action](targetKey)
      },
      add () {
        const panes = this.panes
        const activeKey = `newTab${this.newTabIndex++}`
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey })
        this.panes = panes
        this.activeKey = activeKey
      },
      remove (targetKey) {
        let activeKey = this.activeKey
        let lastIndex
        this.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1
          }
        })
        const panes = this.panes.filter(pane => pane.key !== targetKey)
        if (panes.length===0){
          this.$store.commit('REMOVE_HEADERTAB',targetKey)
          this.$store.commit('CHANGE_HEADERTAB_ACTIVEKEY','')
          this.$router.push('/exception/404')
          return
          }
        if (activeKey === targetKey) {
          lastIndex >= 0 ? activeKey = panes[lastIndex].key :activeKey=panes[0].key
        }
        this.$store.commit('REMOVE_HEADERTAB',targetKey)
        this.$store.commit('CHANGE_HEADERTAB_ACTIVEKEY',activeKey)
        this.$router.push(activeKey)
      },
    },
  }
</script>
<style lang="scss">
  .header-tabs-bar{
    .ant-tabs-bar{
      margin: 0 !important;
    }
    .ant-tabs.ant-tabs-card {
      .ant-tabs-card-bar{
        .ant-tabs-nav-container{
          height: 30px !important;
        }
        .ant-tabs-tab{
          margin-right: 0px !important;
          line-height: 28px !important;
        }
      }
    }
  }

</style>