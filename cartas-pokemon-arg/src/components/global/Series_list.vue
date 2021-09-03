<template>
<ul class="series d-flex align-center flex-wrap">
    <template v-for="(item, key) in list">
        <li :key="key" 
            :elevation="2"
        >
			<router-link :to="`/${link}/${item.id}`">
            <v-card
                :elevation="2"
            >
				<div class="img-container d-flex justify-center align-center">
					<img
						:src="
							is_sets 
								? item.img 
								:require(`../../assets/series/${item.img}.webp`)
						" 
						:alt="item.name"
						@load="img_load++"
					>
				</div>
                <span>
                    {{ item.name }}
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
    props: ['list', 'is_sets'],

	data: () => ({
        img_load: 0,
    }),

	watch: {
		img_load() {
			if(this.img_load === this.list.length) {
				this.$emit('loaded');
			}
		}
	},

    computed: {
		link() {
			return this.is_sets ? 'cartas' : 'expansiones';
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