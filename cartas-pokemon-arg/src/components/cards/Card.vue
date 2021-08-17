<template>
<div v-if="card">
    <img :src="img_small" :alt="name">
</div>
</template>

<script>
export default {
    name: 'card',
    props: ['card'],

    data: () => ({

    }),

    computed: {
        images() {
            return this.card.images ? this.card.images : {};
        },

        img_small() {
            return this.images.small ? this.images.small : '';
        },
        
        img_large() {
            return this.images.large ? this.images.large : '';
        },

        name() {
            return this.card.name ? this.card.name : '';
        }
    }
}
</script>

<style scoped>
img {
    width: 100px;
}

</style>