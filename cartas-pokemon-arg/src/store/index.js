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
		cards_stock: [],
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
			state.cards_stock = stock;
		},
		
		push_cards_stock(state, stock) {
			state.cards_stock.push(stock);
		},
		
		delete_cards_stock(state, id) {
			let key = state.cards_stock.findIndex(el => el.id === id);
			state.cards_stock.splice(key, 1);
		},
		
		upd_cards_stock(state, card) {
			let key = state.cards_stock.findIndex(el => el.id === card.id);
			state.cards_stock.splice(key, 1, card);
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
		
		async get_data_cards_names({ state }, name) {
			console.log(name);
			let res = await state.pokemon.card.where({ q: `name:${name}` })
			.then(result => {
				return result.data;
			})

			return res;
		},

		async save_get_stock({ commit }) {
			try {
				// const call_db = db.collection('stock').orderBy('date', 'desc').limit(3);
				const snapshot = await db.collection('stock').get();
				var stock = [];
				snapshot.forEach(doc => {
					let data = {
						id_base: doc.id,
						...doc.data()
					};
					stock.push(data);
				});
				
				commit('set_cards_stock', stock);
				// return res;
				return stock;
	
			}catch (error) {
				console.log(error);
			}
		},

		async push_card({ commit }, data) {
			try {
				let res = await db.collection('stock').add(data)
				.then(doc => {
					let card = {
						...data,
						id_base: doc.id
					}
					commit('push_cards_stock', card);
				});

		
				return true;
	
			}catch (error) {
				console.log(error);
				return false;
			}
		},

		async delete_card({ commit }, {id, id_base}) {
			try {
				console.log(id);
				console.log(id_base);
				let res = await db.collection('stock').doc(id_base).delete();
				commit('delete_cards_stock', id);

				return true
	
			}catch (error) {
				console.log(error);
				return false;
			}
		},

		async update_card({ commit }, { id_base, data}) {
			try {
				await db.collection('stock').doc(id_base).update(data);

				commit('upd_cards_stock', data);
				
				return true

			}catch (error) {
				console.log(error);
				return false;
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