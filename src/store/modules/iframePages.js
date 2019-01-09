const iframePages={
  state:{
    pages:[], //所有使用iframe方式加载的页面路由地址，用于判断是否需要在iframe组件中渲染
    routes : [], //数据为｛path:'',menuId:''｝数组
    showIframe:false
  },
  mutations:{
    ADD_PAGE: (state,payload)=>{
      let isInRoute
      state.routes.forEach((route)=>{
        if (route.menuId===payload.menuId){
          isInRoute= true
        }
      })
      if (!isInRoute){
        state.routes.push(payload)
      }
        // debugger

    },
    REMOVE_PAGE:(state,payload)=>{
      state.routes.filter(item=> item!==payload)
    },
    INIT_IFRAME_PAGES:(state,iframePages)=>{
      state.pages=iframePages
    },
    SHOW_IFRAMEPAGES:(state)=>{
      state.showIframe=true
},
    NOT_SHOW_IFRAMEPAGES:(state)=>{
      state.showIframe=false
    }
  },
  actions:{

  }
}

export default iframePages
