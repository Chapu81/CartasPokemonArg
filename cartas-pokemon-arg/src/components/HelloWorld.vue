<template>
<v-container> 
	<ul>
		<template v-for="(serie, key) in series">
			<li :key="key" @click="test(serie.text_search)">
				<img :src="`/series/${serie.img}.webp`" :alt="serie.name">
				<br>
				{{ serie.name }}
			</li>
		</template>
	</ul>
</v-container>
</template>

<script>
export default {
	name: 'series',

	mounted() {
		/* this.$pokemon.card.find('base1-4')
		.then(card => {
		    console.log(card) // "Charizard"
		}) */

		/* this.$pokemon.card.where({ q: 'set.id:pl2' })
		.then(result => {
    		console.log(result.data) // "Blastoise"
		}) */

		/* this.$pokemon.set.find('')
		.then(set => {
			console.log(set)
		}) */
	},

	methods: {
		test(serie) {
			if(serie !== '') {
				this.$pokemon.set.where({ q: `series:${serie}` })
				.then(result => {
					console.log(result)
				})
			}
		}
	},

	computed: {
		series() {
			return [
				{
					name: 'Base Set',
					img: 'base',
					text_search: 'Base',
				},
				{
					name: 'Gym Heroes',
					img: 'gym',
					text_search: 'Gym',
				},
				{
					name: 'Neo Genesis',
					img: 'neo',
					text_search: 'Neo',
				},
				{
					name: 'Otros',
					img: 'legendary',
					text_search: 'Other',
				},
				{
					name: 'e-Card',
					img: 'e-Card',
					text_search: 'E-Card',
				},
				{
					name: 'EX Ruby & Sapphire',
					img: 'ex',
					text_search: 'EX',
				},
				{
					name: 'Nintendo Promos',
					img: 'pop',
					text_search: 'POP',
				},
				{
					name: 'Diamond & Pearl',
					img: 'diamond',
					text_search: 'Diamond', // PROBLEM
				},
				{
					name: 'Platinum',
					img: 'platinum',
					text_search: 'Platinum',
				},
				{
					name: 'HeartGold SoulSilve',
					img: 'heartgold',
					text_search: 'HeartGold', // PROBLEM
				},
				{
					name: 'Black & White',
					img: 'blackwhite',
					text_search: 'Black', // PROBLEM
				},
				{
					name: 'XY',
					img: 'xy',
					text_search: 'XY',
				},
				{
					name: 'Sun & Moon',
					img: 'sun',
					text_search: 'Sun', // PROBLEM
				},
				{
					name: 'Sword & Shield',
					img: 'sword',
					text_search: 'Sword', // PROBLEM
				},
			]
		}
	}
};
</script>

<style scoped>
	img {
		width: 210px;
	}
</style>