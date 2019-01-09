import Vue from 'vue'
import { login, loginAjj,getInfo,gsoftGetInfo, logout } from '@/api/login'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { welcome } from '@/utils/util'
import initGsoftInfo from '@/utils/initGsoftInfo'

const user = {
  state: {
    token: '',
    name: '',
    welcome: '',
    avatar: '',
    roles: [],
    info: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, { name, welcome }) => {
      state.name = name
      state.welcome = welcome
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          const result = response.result
          Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
          commit('SET_TOKEN', result.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    //安监系统登录
    LoginAjj({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        loginAjj(userInfo).then(response => {
          // debugger
          // const result = response.result
          // Vue.ls.set(ACCESS_TOKEN, result.token, 7 * 24 * 60 * 60 * 1000)
          // commit('SET_TOKEN', result.token)
          Vue.ls.set(ACCESS_TOKEN, 'tokentoken', 7 * 24 * 60 * 60 * 1000)
          commit('SET_TOKEN',  'tokentoken')
          // debugger
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          const result = response.result
          if (result.role && result.role.permissions.length > 0) {
            const role = result.role
            // console.log("role:"+ JSON.stringify(role))
            role.permissions = result.role.permissions
            // console.log("role.permissions:"+ JSON.stringify(role.permissions))
            role.permissions.map(per => {
              if (per.actionEntitySet != null && per.actionEntitySet.length > 0) {
                const action = per.actionEntitySet.map(action => { return action.action })
                per.actionList = action
              }
            })
            // console.log("role.permissions:"+ JSON.stringify(role.permissions))
            role.permissionList = role.permissions.map(permission => { return permission.permissionId })
            commit('SET_ROLES', result.role)
            commit('SET_INFO', result)
            // console.log(role.permissionList)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_NAME', { name: result.name, welcome: welcome() })
          commit('SET_AVATAR', result.avatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    //ajj系统获取用户信息
    GsoftGetInfo({commit}){
      return new Promise((resolve,reject)=>{
        gsoftGetInfo().then(response=>{
          const data=response.data
          if(data.length >0){
            data.initData=initGsoftInfo(data)
              // const permissionList = initData.permissionList;
              // const routes=initData.routes;
            commit('SET_ROLES', data)
            commit('SET_INFO', response)
          } else{
            reject('gsoftGetInfo:data must be a non-null array !')
          }
          commit('SET_NAME', { name: '等接口', welcome: '欢迎回来！' })
          resolve(response)
        }).catch(error=>{
          reject(error)
        })
      })
    },

    // 登出
    Logout({ commit, state }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        Vue.ls.remove(ACCESS_TOKEN)

        logout(state.token).then(() => {
          resolve()
        }).catch(() => {
          resolve()
        })
      })
    },

  }
}

export default user