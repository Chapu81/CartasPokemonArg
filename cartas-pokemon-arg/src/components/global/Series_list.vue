<template>
<ul class="series d-flex align-center flex-wrap justify-center">
    <template v-for="(serie, key) in data_list">
        <li :key="key" 
            :elevation="2"
        >
			<router-link :to="`/${link}/${serie.text_search}`">
            <v-card
                :elevation="2"
            >
				<div class="img-container">
					<img
						v-if="list"
						:src="serie.img" 
						:alt="serie.name"
					>
					<img
						v-else
						:src="`/series/${serie.img}.webp`" 
						:alt="serie.name"
					>
				</div>
                <span>
                    {{ serie.name }}
                </span>
            </v-card>
			</router-link>
        </li>
    </template>
</ul>
</template>

<script>
export default {
    name: 'serieslist',
    props: ['list', 'param_link'],

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
            return this.list ? this.sets : this.series;
        },

		sets() {
			let res = [];
			this.list.forEach(set => {
				res.push({
					name: set.name,
					img: set.images.logo,
					text_search: set.id,
				})
			});

			return res;
		},

		link() {
			return this.param_link ? this.param_link : 'expansiones';
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
    border-radius: 8px;
    margin: 25px;
}

.series li .v-card{
    padding: 20px;
}

.series li img {
    max-width: 210px;
	max-height: 135px;
}

.series li .img-container {
	min-height: 135px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.series li span {
    color: #888
}
</style>