import Vue from 'vue'
import Vuex from 'vuex'
import db from '../main'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		logued_user: false,
		firebase: null,
		mobile: false,
		color_app: "blue darken-3",
		pokemon: null,
		cards_sets: {},
		cards_stock: {}
	},

	mutations: {
		log_state(state, user) {
			state.logued_user = user;
		},

		set_firebase(state, value) {
			state.firebase = value;
		},

		set_mobile(state, bool) {
			state.mobile = bool;
		},
		
		set_pokemon(state, pokemon) {
			state.pokemon = pokemon;
		},

		set_data_cards_sets(state, cards) {
			state.cards_sets[cards.set] = cards.data;
		},

		set_cards_stock(state, stock) {
			state.cards_stock[stock.set] = stock.stock;
		},
	},
	
	actions: {
		async get_data_cards_sets({ commit, state }, set) {
			await state.pokemon.card.where({ q: `set.id:${set}` })
			.then(result => {
				commit('set_data_cards_sets', {
					set: set,
					data: result.data
				});

				return result.data;
			})
		},

		async save_get_stock({ commit }, set) {
			try {
				// const call_db = db.collection('stock').orderBy('date', 'desc').limit(3);
				const snapshot = await db.collection('stock').get();
				var stock = [];
				snapshot.forEach(doc => {
					let data = {
						id: doc.id,
						...doc.data()
					};
					stock.push(data);
				});

				let res = {
					set,
					stock
				};
				
				commit('set_cards_stock', res);
				// return res;
				return stock;
	
			}catch (error) {
				console.log(error);
			}
		},
	},

	getters: {
		logued: (state) => {
			return state.logued_user;
		},
		firebase: (state) => {
			return state.firebase;
		},
		mobile: (state) => {
			return state.mobile;
		},
		color_app: (state) => {
			return state.color_app;
		},
		pokemon: (state) => {
			return state.pokemon;
		},
		cards_sets: (state) => {
			return state.cards_sets;
		},
		cards_stock: (state) => {
			return state.cards_stock;
		},
	},

})