<template>
  <div class="home">
    <img class="mx-auto" alt="Vue logo" src="../assets/logo.png">
    <div class="content grid grid-cols-3 gap-2">
      <div>
        <SearchBox />
        <ProductList />
      </div>
      <ProductCart />
      <ProductCheckout />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from "@/components/ProductList.vue"
import ProductCheckout from "@/components/ProductCheckout.vue"
import ProductCart from "@/components/ProductCart.vue"
import SearchBox from "@/components/SearchBox.vue"

export default {
  name: 'Home',
  components: {
    ProductList,
    ProductCheckout,
    ProductCart,
    SearchBox
  }
}
</script>
