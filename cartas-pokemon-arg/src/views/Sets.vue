<template>
	<series-list :list="sets" :param_link="'cartas'" />
</template>

<script>
import Series from '../components/global/Series_list'

export default {
    name: 'Sets',

    components: {
		'series-list': Series
    },

	data: () => ({
		sets: [],
    }),

	created() {
		if(this.set) {
			this.$store.getters.sets[this.set] 
					? this.upd_sets()
					: this.get_series(this.set);
		}
	},

	methods: {
		async get_series(serie) {
			await this.$store.dispatch('get_data_set', serie);
			this.upd_sets();
		},

		upd_sets() {
			this.sets = this.$store.getters.sets[this.set];
		}
	},

	computed: {
		set() {
			return this.$route.params.set;
		},
	}
}
</script>
