<template>
<div>
    <carousel-c />
</div>
</template>

<script>
import Carousel from '../components/home/Carousel.vue'
export default {
    name: 'home',
    components: {
        'carousel-c': Carousel
    },

    data: () => ({

    }),

    mounted() {
        this.get_set();
    },

    methods: {
        async get_set() {
			try {
				let res = await this.$store.dispatch('get_data_set');
                console.log(res);
			}catch (error) {
				console.log(error);
			}
		},
    },
}
</script>

<style scoped>

</style>