<template>
	<v-container> 
		
	</v-container>
</template>

<script>
export default {
	name: "HelloWorld",

	data: () => ({

	}),

	mounted() {
		this.$pokemon.card.find('base1-4')
		.then(card => {
		    console.log(card) // "Charizard"
		})

		// console.log(this.$pokemon);
	}
};
</script>
