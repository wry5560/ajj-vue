<template>
  <div class="header-tabs-bar" >
    <div style="background-color: #f0f2f5;">
      <a-tabs
        v-model="activeKey"
        type="editable-card"
        @edit="onEdit"
        hideAdd= true
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
      const panes = [
        { title: 'Tab 1',  key: '1' },
        { title: 'Tab 2',  key: '2' },
        { title: 'Tab 3',  key: '3' },
      ]
      return {
        activeKey: panes[0].key,
        panes,
        newTabIndex: 0,
      }
    },
    methods: {
      callback (key) {
        console.log(key)
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
        if (lastIndex >= 0 && activeKey === targetKey) {
          activeKey = panes[lastIndex].key
        }
        this.panes = panes
        this.activeKey = activeKey
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