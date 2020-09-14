import Vue from 'vue'
import Vuex from 'vuex'
import products from "../data/product"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: "",
    searched: "",
    cart: [],
    total: 0,
    price: 0
  },
  mutations: {
    setProduct(state, payload) {
      state.products = payload
      console.log(state.products)
    },
    setCart(state, payload) {
      state.cart.push(payload)
      state.total += payload.total
      state.price += payload.price * payload.total
    },
    searchedProduct(state, payload) {
      state.searched = payload
      console.log(state.searched)
    },
    updateTotal(state, payload) {
      state.cart[payload.index].total += payload.total
      state.total += payload.total
      // state.price += state.cart[payload.index].total * state.cart[payload.index].price
    }
  },
  actions: {
    getProduct({ commit }) {
      const data = products
      console.log(data)
      commit("setProduct", data)
    },
    postSearch({ commit }, payload) {
      const searched = this.state.products.products.filter(val => val.name.toLowerCase().includes(payload))
      console.log(payload)
      commit("searchedProduct", searched)
    },
    postCart({ commit }, payload) {
      commit("setCart", payload)
    },
    updateTotal({ commit }, payload) {
      commit("updateTotal", payload)
    }
  },
  modules: {
  }
})
