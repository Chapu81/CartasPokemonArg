<template>
<div>
    <ul class="d-flex flex-wrap justify-space-around" v-if="cards.length">
        <template v-for="(card, key) in cards">
            <li :key="key">
                <card-c :card="card" :stock="random_stock()" />
            </li>
        </template>
    </ul>

    <loader-c v-if="loading" />

</div>
</template>

<script>
import Card from '../components/cards/Card.vue'
export default {
    name: 'cards',
    components: {
        'card-c': Card,
    },

    data: () => ({
		cards: [],
		loading: true,
    }),

	created() {
		if(this.set) {
			this.$store.getters.cards_sets[this.set] 
					? this.upd_cards()
					: this.get_cards_sets(this.set);
		}
	},

	methods: {
		async get_cards_sets(set) {
			await this.$store.dispatch('get_data_cards_sets', set);
			this.upd_cards();
		},

		upd_cards() {
			this.cards = this.$store.getters.cards_sets[this.set];
			this.loading = false;
		},

		random_stock() {
			return Math.random() < 0.5;
		}
	},

	computed: {
		set() {
			return this.$route.params.set;
		},
	}
}
</script>

<style scoped>
ul {
    padding-left: 0;
}
</style>