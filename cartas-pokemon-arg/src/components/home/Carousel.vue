<template>
<v-carousel :show-arrows="false" cycle height="auto">
	<v-carousel-item
		v-for="i in 3"
		:key="i"
		:src="`${route_img}/${i}.webp`"
	></v-carousel-item>
</v-carousel>
</template>

<script>
export default {
    name: 'carousel',
    computed: {
		mobile() {
            return this.$store.getters.mobile;
        },

		route_img() {
			let file = this.mobile ? 'mobile' : 'pc';
			return `/banner/${file}`;
		}
	}
}
</script>