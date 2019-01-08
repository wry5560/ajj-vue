const headerTabs={
  state:{
    panes : [],
    activeKey: '',
    newTabIndex: 0,
  },
  mutations:{
    ADD_HEADERTAB: (state,payload)=>{
      const havepane = state.panes.filter( pane => pane.key === payload.key)
      if (havepane.length === 0) {
        state.panes.push(payload)
      }
      state.activeKey=payload.key
      // debugger
    },
    REMOVE_HEADERTAB:(state,key)=>{
      const panes = state.panes.filter(pane=> pane.key !==key)
      state.panes= panes
    },
    CHANGE_HEADERTAB_ACTIVEKEY:(state,activekey)=>{
      state.activeKey=activekey
    }
  },
  actions:{

  }
}

export default headerTabs