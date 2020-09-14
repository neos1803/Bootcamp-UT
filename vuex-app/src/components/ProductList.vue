<template>
    <div>
        <div v-if="searched" class="grid grid-cols-3 gap-4 mt-4">
            <div class="list" v-for="(p,index) in searched" :key="index">
                <button @click="toCart(p)">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <img class="w-full" v-bind:src="p.imgUrl" alt="Sunset in the mountains">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">{{ p.name }}</div>
                            <p class="text-gray-700 text-base">
                            {{ p.price }}
                            </p>
                        </div>
                    </div>
                </button>
            </div>
        </div>
        <!-- <button @click="check">
            Check
        </button> -->
        <div class="grid grid-cols-3 gap-4 my-4">
            <div class="list" v-for="(p,index) in products.products" :key="index">
                <button @click="toCart(p)">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <img class="w-full" v-bind:src="p.imgUrl" alt="Sunset in the mountains">
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">{{ p.name }}</div>
                            <p class="text-gray-700 text-base">
                            {{ p.price }}
                            </p>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
    name: "ProductList",
    created() {
        this.getProduct()
    },
    computed: {
        ...mapState(["products", "searched"])
    },
    methods: {
        // check() {
        //     console.log(this.products.products)
        // },
        toCart(e) {
            const payload = {
                "id": e.id,
                "name": e.name,
                "imgUrl": e.imgUrl,
                "price": e.price,
                "total": 1
            }
            this.postCart(payload)
        },
        ...mapActions(["getProduct", "postCart"])
    },
}
</script>