import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		restaurantName: "La belle vue",
		shoppingCart: {
			number :0,
			listOfProducts:[]
			
		},
		simpleMenu: [
			{
				name: "Croissant",
				image: {
					source: "/images/crossiant.jpg",
					alt: "Un croissant"
				},
				inStock: true,
				quantity: 1,
				price: 2.99
			},
			{
				name: "Baguette de pain",
				image: {
					source: "/images/french-baguette.jpeg",
					alt: "Quatre baguettes de pain"
				},
				inStock: true,
				quantity: 1,
				price: 3.99
			},
			{
				name: "Éclair",
				image: {
					source: "/images/eclair.jpg",
					alt: "Éclair au chocolat"
				},
				inStock: false,
				quantity: 1,
				price: 4.99
			}
		]
	},
	getters: {
		copyright: (state) => {
			const currentYear = new Date().getFullYear()
			return `Copyright ${state.restaurantName} ${currentYear}`
		},



	},
	mutations: {
		INCREASE_SHOPPING_CART(state, data) {
			
			state.shoppingCart.number += data.quantity

//			console.log(state.shoppingCart.listOfProducts[state.shoppingCart.listOfProducts.indexOf(data.name)].name)

			// if(state.shoppingCart.listOfProducts.indexOf(data.name)){
			// 	state.shoppingCart.listOfProducts[state.shoppingCart.listOfProducts.indexOf(data.name)].quantity++
			// } else {
				state.shoppingCart.listOfProducts = [...state.shoppingCart.listOfProducts, data]
			// }
		}
	},
	actions: {
		updateShoppingCart({ commit } , data) {
			commit('INCREASE_SHOPPING_CART', data);

		}
	},	
	modules: {

	}
})
