import Vue from 'vue'
import Vuex from 'vuex'
import products from "../data/product"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: "",
    searched: "",
    cart: [],
    price: 0,
  },
  mutations: {
    setProduct(state, payload) {
      state.products = payload
      console.log(state.products)
    },
    setCart(state, payload) {
      state.cart.push(payload)
    },
    searchedProduct(state, payload) {
      state.searched = payload
      console.log(state.searched)
    },
    updateTotal(state, payload) {
      if (payload.increase) {
        state.cart[payload.index].total++
      }
      if (payload.decrease) {
        state.cart[payload.index].total--
      }
      console.log(state.cart[payload.index].total)
    },
    updatePrice(state) {
      console.log(state.cart.length)
      let price = 0
      for (let index = 0; index < state.cart.length; index++) {
        price += state.cart[index].total * state.cart[index].price
      }
      state.price = price
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
      commit("updatePrice")
    },
    updateTotal({ commit }, payload) {
      commit("updateTotal", payload)
      commit("updatePrice", payload)
    }
  },
  modules: {
  }
})
