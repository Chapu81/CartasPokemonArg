<template>
<div>
    <ul class="d-flex flex-wrap" v-if="cards.length">
        <template v-for="(card, key) in cards">
            <li :key="key">
                <card-c :card="card" :stock="merge_stock_cards(card.id)" />
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
		stock: [],
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

		merge_stock_cards(id) {
			let arr = this.cards_stock.length 
					? this.cards_stock 
					: this.stock;
			return arr.find(card_stock => card_stock.id == id);
		}
	},

	computed: {
		logued() {
			return this.$store.getters.logued;
		},
		
		cards_stock() {
			return this.$store.getters.cards_stock ?? [];
		},

		set() {
			return this.$route.params.set;
		},
	}
}
</script>

<style scoped>
ul {
	padding: 15px 0;
    padding-left: 0;
	max-width: 300px;
	margin: 0 auto;
}

li {
	margin: 5px;
}

@media screen and (min-width: 375px){
	ul {
		max-width: 360px;
	}
}

@media screen and (min-width: 768px){
	ul {
		max-width: 750px;
	}

	li {
		margin: 10px;
	}
}

@media screen and (min-width: 992px){
	ul {
		max-width: 960px;
	}
}

@media screen and (min-width: 1200px){
	ul {
		max-width: 1160px;
	}

	li {
		margin: 20px;
	}
}
</style>