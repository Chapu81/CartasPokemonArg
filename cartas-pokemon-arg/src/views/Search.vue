<template>
<div :class="!cards.length && !loading ? 'container-no-data' : ''">
    <ul class="d-flex flex-wrap" v-if="cards.length">
        <template v-for="(card, key) in cards">
            <li :key="key">
                <card-c :card="card" :stock="merge_stock_cards(card.id)" />
            </li>
        </template>
    </ul>

    <div class="no-data" v-if="!cards.length && !loading">
        <img
            alt="Pikachu triste"
            :src="require(`../assets/search/pikachu.jpg`)" 
        >
        <p>No se encontró resultado para tu busqueda</p>
    </div>


    <loader-c v-if="loading" />

</div>
</template>

<script>
import Card from '../components/cards/Card.vue'
export default {
    name: 'search',
    components: {
        'card-c': Card,
    },

    data: () => ({
		loading: true,
        cards: []
    }),

	created() {
		this.get_cards_name();
	},

	methods: {
		async get_cards_name() {
			let res = await this.$store.dispatch('get_data_cards_names', this.name);
            console.log(res);
            if(res) this.cards = [...res];

            this.loading = false;
		},

        merge_stock_cards(id) {
			return this.cards_stock.find(card_stock => card_stock.id == id);
		}
	},

	computed: {
		logued() {
			return this.$store.getters.logued;
		},

        cards_stock() {
			return this.$store.getters.cards_stock ?? [];
		},

        name() {
			return this.$route.params.name ? this.$route.params.name : '';
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

img {
    width: 100%;
    max-width: 450px;
}

.no-data {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
}

.container-no-data {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
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

    .no-data {
        font-size: 20px;
    }
}

@media screen and (min-width: 992px){
	ul {
		max-width: 960px;
	}

    .no-data {
        font-size: 24px;
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