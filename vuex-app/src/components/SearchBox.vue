<template>
    <div>
        <div class="search mt-8">
            <input v-model="search" v-on:keyup="searchProduct" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="tex" placeholder="Insert Title">
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
    name: "SearchBox",
    data: function() {
        return {
            search: ""
        }
    },
    computed: {
        ...mapState(["searched"])
    },
    methods: {
        searchProduct() {
            this.postSearch(this.search.toLowerCase())
        },
        ...mapActions(["postSearch"])
    }
}
</script>