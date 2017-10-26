import Vue from 'vue'

const state = {
    orderList:[],
    params:{}
}
const getters = {
    getOrderList: function (state) {
      return state.orderList
    }
}
const actions = {
      fetchOrderList ({commit,state}) {
        Vue.http.get('/Vue-demo/db.json',state.params)
          .then((res)=> {
          commit('changeOrderList',res.data.getOrderList.list)
        },(err)=> {

        })
      }
}
const mutations = {
    changeOrderList(state,payload) {
      state.orderList= payload
    },
    updateparams (state,{key,val}) {
      state.params[key] = val
      console.log(state.params)
    }
}
export default {
  state,
  getters,
  actions,
  mutations
}
