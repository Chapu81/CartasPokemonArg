<template>
	<series-list :list="sets" />
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
			this.get_series(this.set);
		}
	},

	methods: {
		get_series(serie) {
			if(serie !== '') {
				this.$pokemon.set.where({ q: `series:${serie}` })
				.then(result => {
					this.sets = result.data;
				})
			}
		}
	},

	computed: {
		set() {
			return this.$route.params.id;
		}
	}
}
</script>
