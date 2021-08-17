import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		logued_user: false,
		firebase: null,
		mobile: false,
		color_app: "blue darken-3",
		pokemon: null,
		sets: {},
		cards_sets: {}
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
		
		set_data_set(state, set) {
			state.sets[set.id] = set.data;
		},
		set_data_cards_sets(state, cards) {
			state.cards_sets[cards.set] = cards.data;
		},
	},
	
	actions: {
		async get_data_set({ commit, state }, serie) {
			await state.pokemon.set.where({ q: `series:${serie}` })
			.then(result => {
				commit('set_data_set', {
					id: serie,
					data: result.data
				});

				return result.data;
			})
		},
		
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
		sets: (state) => {
			return state.sets;
		},
		cards_sets: (state) => {
			return state.cards_sets;
		},
	},

})