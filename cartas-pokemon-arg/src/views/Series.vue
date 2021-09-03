<template>
<div>
	<series-list :list="series" @loaded="loading = false" />
	<loader-c v-if="loading" />
</div>
</template>

<script>
import Series from '../components/global/Series_list'

export default {
    name: 'Series',
	data: () => ({
		loading: true,
    }),

    components: {
		'series-list': Series
    },

	computed: {
		series() {
			return [
				{
					name: 'Base Set',
					img: 'base',
					id: 'Base',
				},
				{
					name: 'Gym Heroes',
					img: 'gym',
					id: 'Gym',
				},
				{
					name: 'Neo Genesis',
					img: 'neo',
					id: 'Neo',
				},
				{
					name: 'Otros',
					img: 'legendary',
					id: 'Other',
				},
				{
					name: 'e-Card',
					img: 'e-Card',
					id: 'E-Card',
				},
				{
					name: 'EX Ruby & Sapphire',
					img: 'ex',
					id: 'EX',
				},
				{
					name: 'Nintendo Promos',
					img: 'pop',
					id: 'POP',
				},
				{
					name: 'Diamond & Pearl',
					img: 'diamond',
					id: 'Diamond', // PROBLEM
				},
				{
					name: 'Platinum',
					img: 'platinum',
					id: 'Platinum',
				},
				{
					name: 'HeartGold SoulSilve',
					img: 'heartgold',
					id: 'HeartGold', // PROBLEM
				},
				{
					name: 'Black & White',
					img: 'blackwhite',
					id: 'Black', // PROBLEM
				},
				{
					name: 'XY',
					img: 'xy',
					id: 'XY',
				},
				{
					name: 'Sun & Moon',
					img: 'sun',
					id: 'Sun', // PROBLEM
				},
				{
					name: 'Sword & Shield',
					img: 'sword',
					id: 'Sword', // PROBLEM
				},
			]
		},
	}
}
</script>
