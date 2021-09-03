<template>
<ul class="series d-flex align-center flex-wrap">
    <template v-for="(serie, key) in data_list">
        <li :key="key" 
            :elevation="2"
        >
			<router-link :to="`/${link}/${serie.text_search}`">
            <v-card
                :elevation="2"
            >
				<div class="img-container d-flex justify-center align-center">
					<img
						v-if="list"
						:src="serie.img" 
						:alt="serie.name"
						@load="img_load++"
					>
					<img
						v-else
						:src="require(`../../assets/series/${serie.img}.webp`)" 
						:alt="serie.name"
						@load="img_load++"
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

	data: () => ({
        img_load: 0,
    }),

	watch: {
		img_load() {
			if(this.img_load === this.data_list.length) {
				this.$emit('loaded');
			}
		}
	},

	methods: {
		src() {
			return '../../assets/series/base.webp';
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
		},

		subseries() {
			return {
				
			}
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
	max-width: 320px;
	margin: 0 auto;
}

.series li {
    text-align: center;
    width: 140px;
    border-radius: 8px;
    margin: 15px 10px;
}

.series li .v-card{
    padding: 10px 2px;
	overflow: hidden;
}

.series li img {
    max-width: 120px;
	max-height: 80px;
}

.series li .img-container {
	min-height: 80px;
}

.series li span {
    color: #888;
	font-size: 14px;
	white-space: nowrap;
}

@media screen and (min-width: 768px){
	.series {
		max-width: 750px;
	}

	.series li {
		width: 230px;
		margin: 20px 10px;
	}

	.series li .v-card{
		padding: 10px 5px;
	}

	.series li img {
		max-width: 200px;
		max-height: 110px;
	}

	.series li .img-container {
		min-height: 120px;
	}

	.series li span {
		font-size: 16px;
	}
}

@media screen and (min-width: 992px){
	.series {
		max-width: 810px;
	}

	.series li {
		width: 230px;
		margin: 20px;
	}

	.series li span {
		font-size: 18px;
	}
}

@media screen and (min-width: 1200px){
	.series {
		max-width: 1080px;
	}
}

</style>