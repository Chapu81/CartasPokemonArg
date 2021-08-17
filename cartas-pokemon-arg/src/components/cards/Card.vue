<template>
<div v-if="card">
    <img :src="img_small" :alt="name" :class="stock ? 'stock' : ''">
</div>
</template>

<script>
export default {
    name: 'card',
    props: ['card', 'stock'],

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
    width: 75px;
    filter: grayscale(100%);
}

img.stock {
    filter: grayscale(0%);
    cursor: pointer;
}


@media screen and (min-width: 375px){
    img {
        width: 100px;
    }
}

</style>