import api from './index'
import { axios } from '@/utils/request'
import Qs from 'qs'
import request from 'request'

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login(parameter) {
  return axios({
    url: '/auth/login',
    method: 'post',
    data: parameter
  })
}
export function loginAjj(parameter) {
    console.log(parameter)
  const parameterQs=Qs.stringify(parameter)
  return axios({
    url: '/admin/jsonp-login.tk4loginNew.json',
    method: 'post',
    data: parameter
  })

  // return new Promise( (resolve, reject) =>{
  //   request.post({
  //     // url: '/login.html?m=loginAjj',
  //     // url: 'http://feooe.myds.me:6200/asrsajj/admin/jsonp-login.tk4loginNew.json',
  //     url: 'http://localhost:6200/api/admin/jsonp-login.tk4loginNew.json',
  //     form: parameter
  //   },(err, res) => {
  //     // debugger
  //     // console.log(JSON.stringify(res.headers))
  //     resolve(res)
  //     // console.log(body)
  //   }).catch(err =>{
  //     reject(err)
  //   })
  // })
}
export function getSmsCaptcha(parameter) {
  return axios({
    url: api.SendSms,
    method: 'post',
    data: parameter
  })
}

export function getInfo() {
  return axios({
    url: '/user/info',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function logout() {
  return axios({
    url: '/auth/logout',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function gsoftGetInfo() {
  return axios({
    url: '/base/SysMenu.query.json',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}