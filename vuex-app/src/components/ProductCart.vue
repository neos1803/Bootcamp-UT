<template>
    <div class="cart mt-8 grid grid-cols-1 gap-3">
        <div class="list mx-auto" v-for="(c,index) in cart" :key="index">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <div class="grid grid-cols-3 gap-1 mx-auto w-1/4">
                    <button @click="decrease(-1, index)" class="bg-blue-100">-</button>
                    <h1>{{c.total}}</h1>
                    <button @click="increase(1, index)" class="bg-blue-100">+</button>
                </div>
                <img class="w-full" v-bind:src="c.imgUrl" alt="Sunset in the mountains">
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{{ c.name }}</div>
                    <p class="text-gray-700 text-base">
                    {{ c.price }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
    name: "ProductCart",
    methods: {
        decrease(e, i) {
            const payload = {
                total: e,
                index: i
            }
            this.updateTotal(payload)
        },
        increase(e, i) {
            const payload = {
                total: e,
                index: i
            }
            this.updateTotal(payload)
        },
        ...mapActions(["updateTotal"])
    },
    computed: {
        ...mapState(["cart"])
    }
}
</script>