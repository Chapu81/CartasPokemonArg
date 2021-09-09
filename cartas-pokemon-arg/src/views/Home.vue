<template>
<div>
    <carousel-c />
</div>
</template>

<script>
import Carousel from '../components/home/Carousel.vue';
export default {
    name: 'home',
    components: {
        'carousel-c': Carousel,
    },

    data: () => ({

    }),
}
</script>

<style scoped>

</style>