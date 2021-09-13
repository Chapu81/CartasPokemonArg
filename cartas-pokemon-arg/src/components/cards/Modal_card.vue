<template>
<div class="text-center">
<v-dialog
    v-model="dialog"
    width="450"
>
    <v-card>
		<v-btn
			icon
			large
			class="delete"
			v-if="this.stock && logued"
			@click="delete_card"
			:loading="loading_delete"
		>
			<v-icon>mdi-delete</v-icon>
		</v-btn>
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

		<div class="d-flex justify-space-between align-center pb-2">
			<v-card-title class="px-6 py-1">{{ card.name }}</v-card-title>
			<v-card-title class="px-6 py-1" v-if="!logued">$1.500</v-card-title>
			<div v-else class="input-price mr-6">
				<v-text-field 
					dense
					outlined
					type="number"
					label="Precio" 
					class="pa-0 ma-0"
					v-model="data_card.price"
				></v-text-field>
			</div>
		</div>

		<v-divider></v-divider>
		<!-- LOGUED -->
		<div v-if="logued" class="d-flex justify-space-between">
			<div class="py-0 pt-3 load-data ml-6">
				<v-select
					dense
					outlined
					:items="language_select"
					label="Idioma"
					v-model="data_card.language"
				></v-select>
				<template v-for="(data, key) in data_load">
					<v-select
						dense
						outlined
						:key="key"
						:items="condition_select"
						v-if="key === 0"
						:label="data.text"
						v-model="data_card[data.input]"
					></v-select>

					<v-checkbox
						v-else
						:key="key"
						height="5"
						class="ma-0"
						:label="data.text"
						v-model="data_card[data.input]"
					></v-checkbox>
				</template>
			</div>
			<div class="input-amount mr-6 mt-3">
				<v-text-field 
					dense
					outlined
					type="number"
					width="50"
					label="Cantidad"
					class="pa-0 ma-0"
					v-model="data_card.amount"
				></v-text-field>
			</div>
		</div>
		

		<!-- NO LOGUED -->
		<div class="py-3" v-else>
			<div class="d-flex justify-space-between align-center px-6">
				<div>
					<template v-for="(data, key) in data_booleans">
						<v-card-text class="pa-0" :key="key">
							{{data.text}}:
							<span>
								<v-icon
									:color="data.result ? 'green' : 'red'"
									dense
								>
									{{data.result ? 'mdi-check' : 'mdi-window-close'}}
								</v-icon>
							</span>
						</v-card-text>
					</template>
				</div>
				<div>
					<v-card-text class="pa-0 text-right">
						Stock: <span class="bolder">{{data_card.amount}}</span>
					</v-card-text>
					<v-card-text class="pa-0 text-right">
						Idioma: <span class="bolder">{{data_card.language}}</span>
					</v-card-text>
					<v-card-text class="pa-0">
						Estado: <span class="bolder">{{data_card.condition}}</span>
					</v-card-text>
				</div>
			</div>
			<div class="input-amount mr-6" v-if="logued">
				<v-text-field 
					dense
					outlined
					type="number"
					width="50"
					label="Cantidad"
					class="pa-0 ma-0"
					v-model="amount"
				></v-text-field>
			</div>
		</div>

        <v-divider></v-divider>

        <v-card-actions v-if="logued" class="px-6 pt-1">
			<v-spacer></v-spacer>
			<v-btn
				color="primary"
				text
				@click="state_dialog(false)"
			>
				Cancelar
			</v-btn>
			<v-btn
				color="primary"
				text
				@click="update_card"
				v-if="this.stock"
				:loading="loading_save"
			>
				Actualizar
			</v-btn>
			<v-btn 
				v-else
				color="primary"
				text
				@click="save_card"
				:loading="loading_save"
			>
				Guardar
			</v-btn>
		</v-card-actions>

        <!-- <v-card-actions v-else class="px-6 py-1">
			<v-spacer></v-spacer>
			<v-btn
				color="primary"
				text
				@click="state_dialog(false)"
			>
				Agregar al carrito
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
		
		stock: {
			default: false,
		},
	},

    data: () => ({
		dialog: false,
		img_load: false,

		data_card: {},

		loading_delete: false,
		loading_save: false,
    }),

	watch: {
		action_open() {
			this.state_dialog(true);
		},

		stock() {
			this.set_stock();
		}
	},

	created() {
		this.set_stock();
	},

	methods: {
		set_stock() {
			if(this.stock) {
				this.data_card = {...this.stock};
			}else {
				this.data_card = {
					price: 50,
					amount: 1,
					language: 'Inglés',
					condition: 'Light Played',
					edition: false,
					foil: false,
					shadowless: false,
				}
			}
		},
		state_dialog(bool) {
			this.dialog = bool;
		},

		save_card() {
			let res = {
				...this.data_card,
				id: this.card.id,
				name: this.card.name,
				set: this.card.set,
			}

			this.push_card(res);
		},
		
		actualizar() {
			let res = {
				...this.data_card,
				id: this.card.id,
				name: this.card.name,
				set: this.card.set,
			}

			this.push_card(res);
		},

		active_snackbar(text) {
			this.$emit('active_snackbar', text);
		},

		async push_card(card) {
			this.loading_save = true;
			try {
				let res = await this.$store.dispatch('push_card', card);
				
				if(res) {
					this.active_snackbar('Carta cargada correctamente');
					this.state_dialog(false);
				}

			}catch (error) {
				console.log(error);
			}

			this.loading_save = false;
		},
		
		async update_card(card) {
			this.loading_save = true;
			try {
				let res = await this.$store.dispatch('update_card', { 
					id_base: card.id_base,
					data: card
				});
				
				if(res) {
					this.active_snackbar('Carta actualizada correctamente');
					this.state_dialog(false);
				}

			}catch (error) {
				console.log(error);
			}

			this.loading_save = false;
		},
		
		async delete_card() {
			this.loading_delete = true;
			let data = {
					id: this.data_card.id,
					id_base: this.data_card.id_base,
			};
			console.log(data);
			try {
				let res = await this.$store.dispatch('delete_card', data);
				
				if(res) {
					this.active_snackbar('Carta borrada correctamente');
					this.state_dialog(false);
				}

			}catch (error) {
				console.log(error);
			}

			this.loading_delete = false;
		},

		
	},

	computed: {
		logued() {
			// return false;
			return this.$store.getters.logued;
		},
		
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

		data_booleans() {
			return [
				{
					text: 'Foil',
					result: this.data_card.foil,
				},
				{
					text: 'Shadowless',
					result: this.data_card.shadowless,
				},
				{
					text: 'Primera edición',
					result: this.data_card.edition,
				},
			]
		},
		
		data_load() {
			return [
				{
					text: 'Estado',
					input: 'condition',
				},
				{
					text: 'Primera edición',
					input: 'edition',
				},
				{
					text: 'Foil',
					input: 'foil',
				},
				{
					text: 'Shadowless',
					input: 'shadowless',
				},
			]
		},

		condition_select() {
            return [
                'Mint',
                'Near mint',
                'Light Played',
                'Played',
                'Heavy Played',
                'Damaged',
            ];
        },

		language_select() {
            return [
                'Inglés',
                'Japonés',
                'Coreano',
                'Español',
                'Portugués',
                'Alemán',
                'Francés',
                'Holandés',
                'Italiano',
            ];
        },
		
		
	}
}
</script>

<style scoped>
img {
	max-height: 60vh;
	max-width: 100%;
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

.load-data,
.input-price {
	max-width: 150px;
}


.input-price,
.input-amount {
	height: 40px;
}

.input-amount {
	width: 75px;
}

.delete {
	position: absolute;
	right: 40px;
	bottom: 50px;
}
</style>

<style>
.v-dialog:not(.v-dialog--fullscreen) {
    max-height: 95%!important;
}

.input-amount .v-text-field__details {
	display: none!important;
}
</style>