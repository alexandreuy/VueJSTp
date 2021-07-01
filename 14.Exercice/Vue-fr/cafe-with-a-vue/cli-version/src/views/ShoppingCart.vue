<template>
    <div class="shoppingcart">
        <h1>This is your Shopping Cart</h1>
        <p>
            Voici les produits que vous avez sélectionnés
        </p>
        <div>
			
			<div v-for="item in shoppingCart.listOfProducts" :key="item.name">
                <h3>{{ item.name }} {{item.quantity}} </h3>

			</div>
		</div>
    </div>
</template>


<script>
import { mapState } from "vuex"

export default {
    name: "ShoppingCart",
    components:{

    },
    computed: {
        ...mapState({ shoppingCart: "shoppingCart" })
    },
}
</script>

<style lang="scss" scoped>

</style>