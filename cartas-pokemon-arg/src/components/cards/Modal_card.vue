<template>
<div class="text-center">
<v-dialog
    v-model="dialog"
    width="450"
>
    <v-card>
		<div class="text-center pt-5 px-6">
			<div v-show="!img_load" class="container-load">
				<img 
					:src="`/img/${image_loader}.webp`"
				>
				<v-progress-circular
					class="spinner-load"
					indeterminate
					:color="$store.getters.color_app"
				></v-progress-circular>
			</div>

			<img 
				:alt="card.name" 
				v-if="card.images"
				:src="card.images.large"
				v-show="img_load"
				@load="img_load = true"
			>
		</div>

        <v-card-text>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>




        <!-- <v-divider></v-divider>

        <v-card-actions>
			<v-spacer></v-spacer>
			<v-btn
				color="primary"
				text
				@click="state_dialog(false)"
			>
				I accept
			</v-btn>
		</v-card-actions> -->
	</v-card>
</v-dialog>
</div>
</template>

<script>
export default {
    name: 'modalcard',

	props: {
		action_open: {
			type: Boolean,
			default: false,
		},
		
		card: {
			type: Object,
			default: {},
		},
	},

    data: () => ({
		dialog: false,
		img_load: false,
    }),

	watch: {
		action_open() {
			this.state_dialog(true);
		}
	},

	methods: {
		state_dialog(bool) {
			this.dialog = bool;
		}
	},

	computed: {
		mobile() {
			return this.$store.getters.mobile;
		},

		image() {
			return this.mobile 
					? card.images.small 
					: card.images.large;
		},
		
		image_loader() {
			return this.mobile ? 'small' : 'large';
		},
	}
}
</script>

<style scoped>
img {
	max-width: 600px;
	width: 100%;
}

.container-load {
	/* opacity: 0; */
	position: relative;
}

.container-load .spinner-load{
	position: absolute;
	top: calc(50% - 20px);
	left: calc(50% - 20px);
}

.container-load img {
	opacity: 0;
}
</style>