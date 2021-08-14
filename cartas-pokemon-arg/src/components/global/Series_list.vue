<template>
<ul class="series">
    <template v-for="(serie, key) in data_list">
        <li :key="key" @click="test(serie.text_search)" :elevation="2">
            <v-card
                :elevation="2"
            >
                <img :src="`/series/${serie.img}.webp`" :alt="serie.name">
                <br>
                {{ serie.name }}
            </v-card>
        </li>
    </template>
</ul>
</template>

<script>
export default {
    name: 'serieslist',
    props: ['list'],

    data: () => ({

    }),

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
		},

        data_list() {
            return this.list ? this.list : this.series;
        }
    }
}
</script>

<style scoped>
.series {
    padding-left: 0;
}
.series li {
    text-align: center;
    width: 250px;
    border-radius: 4px;
    margin: 25px auto;
}

.series li img {
    width: 210px;
}
</style>