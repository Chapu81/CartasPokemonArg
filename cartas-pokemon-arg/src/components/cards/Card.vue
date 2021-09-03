<template>
<div v-if="card" class="card-container">
    <img 
        :alt="name" 
        :src="img_small" 
        @click="open_modal"
        :class="[stock ? 'stock' : '', logued ? 'pointer' : '']"
    >

    <modal-card 
        v-if="stock || logued"
        :stock="stock"
        :card="data_modal" 
        :action_open="modal" 
    />
</div>
</template>

<script>
import ModalCard from './Modal_card.vue'
export default {
    name: 'card',
    props: ['card', 'stock'],
    components: {
        'modal-card': ModalCard,
    },

    data: () => ({
        modal: false,
    }),

    methods: {
        open_modal() {
            if(this.stock || this.logued) {
                this.modal = !this.modal;
            }
        }
    },

    computed: {
        logued() {
			return this.$store.getters.logued;
		},
        
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
        },

        data_modal() {
            return {
                name: this.name,
                id: this.card.id,
                images: this.images,
            };
        }
    }
}
</script>

<style scoped>
.card-container {
    width: 90px;
}

img {
    width: 100%;
    filter: grayscale(100%);

    transition: box-shadow linear .15s;

    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%) !important;
}

img.stock:hover {
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%) !important;
}

img.stock {
    filter: grayscale(0%);
    cursor: pointer;
}


@media screen and (min-width: 375px){
    .card-container {
        width: 110px;
    }
}

@media screen and (min-width: 768px){
    .card-container {
        width: 230px;
    }
}

@media screen and (min-width: 992px){
    .card-container {
        width: 220px;
    }
}

@media screen and (min-width: 1200px){
    .card-container {
        width: 250px;
    }
}

</style>