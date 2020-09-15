<template>
    <div class="check mt-8 mx-auto">
        <div class="px-8 py-8 bg-white h-64 w-64" >
            <div class="mx-auto my-16">
                <p class="text-gray-700 text-base">
                    Price: {{ price }}
                </p>
                <p class="text-gray-700 text-base">
                    PPN: 10%
                </p>
                <p class="text-gray-700 text-base">
                    Total: {{ price * 0.1 + price}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    name: "ProductCheckout",
    computed: {
        ...mapState(["price", "total"])
    }
}
</script>