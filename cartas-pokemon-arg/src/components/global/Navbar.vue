<template>
<div>
    <v-app-bar
		:color="$store.getters.color_app"
		dark
    >
		<v-toolbar-title 
			class="pl-0 pointer" 
			@click="go_to_page('/')"
		>
			<v-img
				alt="Cartas Pokemon Arg"
				contain
				src="/logo.png"
				max-width="55"
				class="d-md-none"
			/>
			
			<v-img
				alt="Cartas Pokemon Arg"
				contain
				src="/logo.png"
				max-width="65"
				class="d-none d-md-block"
			/>
		</v-toolbar-title>
		
		<v-toolbar-title></v-toolbar-title>


		<v-spacer></v-spacer>

		<v-btn icon :x-small="mobile" v-if="!search_active" @click="set_search_active">
			<v-icon>mdi-magnify</v-icon>
		</v-btn>

		<div class="input-search" v-else>
			<v-text-field
				label=""
				placeholder="Nombre o tipo"
				clearable
				outlined
				dense
				v-model="data_search"
				@keyup.enter="search"
				@focusout="search_active = false;"
			></v-text-field>
		</div>

		<template v-for="(section, key) in section_list">
			<v-btn 
				text 
				:key="key"
				:small="mobile"
				:to="section.link"
				class="buttons-sections"
				v-show="view_buttons"
			>
				{{section.text}}
			</v-btn>
		</template>
    </v-app-bar>
</div>
</template>

<script>
    export default {
        name: 'navbar',
		
		data: () => ({
			search_active: false,
			data_search: '',
        }),

        methods: {
			go_to_page(page) {
				if(this.$route.fullPath != page) {
					this.$router.push(page)
				}
			},

			set_search_active(){
				this.search_active = true;
				setTimeout(() => {
					let input = document.querySelector('.input-search input');
					if(input) {
						input.focus();
					}
				}, 1);
			},

			search() {
				let page = `/busqueda/${this.data_search.toLowerCase()}`;
				if(this.$route.fullPath != page) {
					this.$router.push(page)
					this.data_search = '';
				}

				setTimeout(() => {
					let input = document.querySelector('.input-search input');
					if(input) {
						input.blur();
					}
				}, 1);
			}
        },

        computed: {
			mobile() {
				return this.$store.getters.mobile;
			},

			view_buttons() {
				if(this.mobile && this.search_active) {
					return false;
				}

				return true;
			},

			section_list() {
				let res = [
					{
						text: 'Cartas',
						link: '/expansiones'
					},/* 
					{
						text: 'Mazos',
						link: '/mazos'
					}, */
				];

				return res;
			},
        }
    }
</script>

<style scoped>
.input-search {
	width: 180px;
	height: 40px;
	margin-right: 8px;
}

@media screen and (max-width: 600px){
	.buttons-sections {
		padding: 0 8px!important;
	}
}
</style>