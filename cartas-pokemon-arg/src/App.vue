<template>
<v-app>
	<h1 class="title-page">Cartas Pokemon Arg</h1>
	<navbar-c></navbar-c>
    <v-main>
		<router-view />
    </v-main>

	<user-c />
</v-app>
</template>

<script>
import Navbar from './components/global/Navbar'
import User from './components/global/User'
export default {
	name: "App",
	components: {
		'navbar-c': Navbar,
		'user-c': User,
	},

	beforeMount() {
		this.get_stock();
		this.set_store_mobile();
		this.set_store_pokemon();
	},

	methods: {
		screenTest(e) {
			this.$store.commit('set_mobile', e.matches);
		},

		set_store_mobile() {
			let mql = window.matchMedia('(max-width: 600px)');
			mql.addListener(this.screenTest);
			let mobile = window.innerWidth > 600 ? false : true; 
			this.$store.commit('set_mobile', mobile);
		},

		set_store_pokemon() {
			this.$store.commit('set_pokemon', this.$pokemon);
		},

		async get_stock() {
			try {
				await this.$store.dispatch('save_get_stock');
			}catch (error) {
				console.log(error);
			}
		},
	},
};
</script>
