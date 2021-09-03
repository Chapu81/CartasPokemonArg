<template>
<div>
	<series-list 
			:list="sets_filter" 
			:is_sets="true"
			@loaded="loading = false" />

	<loader-c v-if="loading" />
</div>
</template>

<script>
import Series from '../components/global/Series_list'

export default {
    name: 'Sets',

    components: {
		'series-list': Series
    },

	data: () => ({
		loading: true,
    }),

	computed: {
		set_param() {
			return this.$route.params.set;
		},

		sets_filter() {
			if(this.set === '') return [];
			
			let sets_filter = this.sets.filter(set => set.series.toLowerCase() === this.set_param.toLowerCase());
			
			return sets_filter;
		},

		sets() {
			return [
				{
					id: "base1",
					name: "Base",
					series: "Base",
					img: "https://images.pokemontcg.io/base1/logo.png"
				},
				{
					id: "base2",
					name: "Jungle",
					series: "Base",
					img: "https://images.pokemontcg.io/base2/logo.png"
				},
				{
					id: "basep",
					name: "Wizards Black Star Promos",
					series: "Base",
					img: "https://images.pokemontcg.io/basep/logo.png"
				},
				{
					id: "base3",
					name: "Fossil",
					series: "Base",
					img: "https://images.pokemontcg.io/base3/logo.png"
				},
				{
					id: "base4",
					name: "Base Set 2",
					series: "Base",
					img: "https://images.pokemontcg.io/base4/logo.png"
				},
				{
					id: "base5",
					name: "Team Rocket",
					series: "Base",
					img: "https://images.pokemontcg.io/base5/logo.png"
				},
				{
					id: "gym1",
					name: "Gym Heroes",
					series: "Gym",
					img: "https://images.pokemontcg.io/gym1/logo.png"
				},
				{
					id: "gym2",
					name: "Gym Challenge",
					series: "Gym",
					img: "https://images.pokemontcg.io/gym2/logo.png"
				},
				{
					id: "neo1",
					name: "Neo Genesis",
					series: "Neo",
					img: "https://images.pokemontcg.io/neo1/logo.png"
				},
				{
					id: "neo2",
					name: "Neo Discovery",
					series: "Neo",
					img: "https://images.pokemontcg.io/neo2/logo.png"
				},
				{
					id: "neo3",
					name: "Neo Revelation",
					series: "Neo",
					img: "https://images.pokemontcg.io/neo3/logo.png"
				},
				{
					id: "neo4",
					name: "Neo Destiny",
					series: "Neo",
					img: "https://images.pokemontcg.io/neo4/logo.png"
				},
				{
					id: "si1",
					name: "Southern Islands",
					series: "Other",
					img: "https://images.pokemontcg.io/si1/logo.png"
				},
				{
					id: "base6",
					name: "Legendary Collection",
					series: "Other",
					img: "https://images.pokemontcg.io/base6/logo.png"
				},
				{
					id: "ru1",
					name: "Pokémon Rumble",
					series: "Other",
					img: "https://images.pokemontcg.io/ru1/logo.png"
				},
				{
					id: "mcd11",
					name: "McDonald's Collection 2011",
					series: "Other",
					img: "https://images.pokemontcg.io/mcd11/logo.png"
				},
				{
					id: "mcd12",
					name: "McDonald's Collection 2012",
					series: "Other",
					img: "https://images.pokemontcg.io/mcd12/logo.png"
				},
				{
					id: "mcd16",
					name: "McDonald's Collection 2016",
					series: "Other",
					img: "https://images.pokemontcg.io/mcd16/logo.png"
				},
				{
					id: "mcd19",
					name: "McDonald's Collection 2019",
					series: "Other",
					img: "https://images.pokemontcg.io/mcd19/logo.png"
				},
				{
					id: "ecard1",
					name: "Expedition Base Set",
					series: "E-Card",
					img: "https://images.pokemontcg.io/ecard1/logo.png"
				},
				{
					id: "ecard2",
					name: "Aquapolis",
					series: "E-Card",
					img: "https://images.pokemontcg.io/ecard2/logo.png"
				},
				{
					id: "ecard3",
					name: "Skyridge",
					series: "E-Card",
					img: "https://images.pokemontcg.io/ecard3/logo.png"
				},
				{
					id: "ex1",
					name: "Ruby & Sapphire",
					series: "EX",
					img: "https://images.pokemontcg.io/ex1/logo.png"
				},
				{
					id: "ex2",
					name: "Sandstorm",
					series: "EX",
					img: "https://images.pokemontcg.io/ex2/logo.png"
				},
				{
					id: "ex3",
					name: "Dragon",
					series: "EX",
					img: "https://images.pokemontcg.io/ex3/logo.png"
				},
				{
					id: "ex4",
					name: "Team Magma vs Team Aqua",
					series: "EX",
					img: "https://images.pokemontcg.io/ex4/logo.png"
				},
				{
					id: "ex5",
					name: "Hidden Legends",
					series: "EX",
					img: "https://images.pokemontcg.io/ex5/logo.png"
				},
				{
					id: "ex6",
					name: "FireRed & LeafGreen",
					series: "EX",
					img: "https://images.pokemontcg.io/ex6/logo.png"
				},
				{
					id: "ex7",
					name: "Team Rocket Returns",
					series: "EX",
					img: "https://images.pokemontcg.io/ex7/logo.png"
				},
				{
					id: "ex8",
					name: "Deoxys",
					series: "EX",
					img: "https://images.pokemontcg.io/ex8/logo.png"
				},
				{
					id: "ex9",
					name: "Emerald",
					series: "EX",
					img: "https://images.pokemontcg.io/ex9/logo.png"
				},
				{
					id: "ex10",
					name: "Unseen Forces",
					series: "EX",
					img: "https://images.pokemontcg.io/ex10/logo.png"
				},
				{
					id: "ex11",
					name: "Delta Species",
					series: "EX",
					img: "https://images.pokemontcg.io/ex11/logo.png"
				},
				{
					id: "ex12",
					name: "Legend Maker",
					series: "EX",
					img: "https://images.pokemontcg.io/ex12/logo.png"
				},
				{
					id: "ex13",
					name: "Holon Phantoms",
					series: "EX",
					img: "https://images.pokemontcg.io/ex13/logo.png"
				},
				{
					id: "ex14",
					name: "Crystal Guardians",
					series: "EX",
					img: "https://images.pokemontcg.io/ex14/logo.png"
				},
				{
					id: "ex15",
					name: "Dragon Frontiers",
					series: "EX",
					img: "https://images.pokemontcg.io/ex15/logo.png"
				},
				{
					id: "ex16",
					name: "Power Keepers",
					series: "EX",
					img: "https://images.pokemontcg.io/ex16/logo.png"
				},
				{
					id: "pop1",
					name: "POP Series 1",
					series: "POP",
					img: "https://images.pokemontcg.io/pop1/logo.png"
				},
				{
					id: "pop2",
					name: "POP Series 2",
					series: "POP",
					img: "https://images.pokemontcg.io/pop2/logo.png"
				},
				{
					id: "pop3",
					name: "POP Series 3",
					series: "POP",
					img: "https://images.pokemontcg.io/pop3/logo.png"
				},
				{
					id: "pop4",
					name: "POP Series 4",
					series: "POP",
					img: "https://images.pokemontcg.io/pop4/logo.png"
				},
				{
					id: "pop5",
					name: "POP Series 5",
					series: "POP",
					img: "https://images.pokemontcg.io/pop5/logo.png"
				},
				{
					id: "pop6",
					name: "POP Series 6",
					series: "POP",
					img: "https://images.pokemontcg.io/pop6/logo.png"
				},
				{
					id: "pop7",
					name: "POP Series 7",
					series: "POP",
					img: "https://images.pokemontcg.io/pop7/logo.png"
				},
				{
					id: "pop8",
					name: "POP Series 8",
					series: "POP",
					img: "https://images.pokemontcg.io/pop8/logo.png"
				},
				{
					id: "pop9",
					name: "POP Series 9",
					series: "POP",
					img: "https://images.pokemontcg.io/pop9/logo.png"
				},
				{
					id: "dp1",
					name: "Diamond & Pearl",
					series: "Diamond",
					img: "https://images.pokemontcg.io/dp1/logo.png"
				},
				{
					id: "dpp",
					name: "DP Black Star Promos",
					series: "Diamond",
					img: "https://images.pokemontcg.io/dpp/logo.png"
				},
				{
					id: "dp2",
					name: "Mysterious Treasures",
					series: "Diamond",
					img: "https://images.pokemontcg.io/dp2/logo.png"
				},
				{
					id: "dp3",
					name: "Secret Wonders",
					series: "Diamond",
					img: "https://images.pokemontcg.io/dp3/logo.png"
				},
				{
					id: "dp4",
					name: "Great Encounters",
					series: "Diamond",
					img: "https://images.pokemontcg.io/dp4/logo.png"
				},
				{
					id: "dp5",
					name: "Majestic Dawn",
					series: "Diamond",
					img: "https://images.pokemontcg.io/dp5/logo.png"
				},
				{
					id: "dp6",
					name: "Legends Awakened",
					series: "Diamond",
					img: "https://images.pokemontcg.io/dp6/logo.png"
				},
				{
					id: "dp7",
					name: "Stormfront",
					series: "Diamond",
					img: "https://images.pokemontcg.io/dp7/logo.png"
				},
				{
					id: "pl1",
					name: "Platinum",
					series: "Platinum",
					img: "https://images.pokemontcg.io/pl1/logo.png"
				},
				{
					id: "pl2",
					name: "Rising Rivals",
					series: "Platinum",
					img: "https://images.pokemontcg.io/pl2/logo.png"
				},
				{
					id: "pl3",
					name: "Supreme Victors",
					series: "Platinum",
					img: "https://images.pokemontcg.io/pl3/logo.png"
				},
				{
					id: "pl4",
					name: "Arceus",
					series: "Platinum",
					img: "https://images.pokemontcg.io/pl4/logo.png"
				},
				{
					id: "hgss1",
					name: "HeartGold & SoulSilver",
					series: "HeartGold",
					img: "https://images.pokemontcg.io/hgss1/logo.png"
				},
				{
					id: "hsp",
					name: "HGSS Black Star Promos",
					series: "HeartGold",
					img: "https://images.pokemontcg.io/hsp/logo.png"
				},
				{
					id: "hgss2",
					name: "HS—Unleashed",
					series: "HeartGold",
					img: "https://images.pokemontcg.io/hgss2/logo.png"
				},
				{
					id: "hgss3",
					name: "HS—Undaunted",
					series: "HeartGold",
					img: "https://images.pokemontcg.io/hgss3/logo.png"
				},
				{
					id: "hgss4",
					name: "HS—Triumphant",
					series: "HeartGold",
					img: "https://images.pokemontcg.io/hgss4/logo.png"
				},
				{
					id: "col1",
					name: "Call of Legends",
					series: "HeartGold",
					img: "https://images.pokemontcg.io/col1/logo.png"
				},
				{
					id: "bwp",
					name: "BW Black Star Promos",
					series: "Black",
					img: "https://images.pokemontcg.io/bwp/logo.png"
				},
				{
					id: "bw1",
					name: "Black & White",
					series: "Black",
					img: "https://images.pokemontcg.io/bw1/logo.png"
				},
				{
					id: "bw2",
					name: "Emerging Powers",
					series: "Black",
					img: "https://images.pokemontcg.io/bw2/logo.png"
				},
				{
					id: "bw3",
					name: "Noble Victories",
					series: "Black",
					img: "https://images.pokemontcg.io/bw3/logo.png"
				},
				{
					id: "bw4",
					name: "Next Destinies",
					series: "Black",
					img: "https://images.pokemontcg.io/bw4/logo.png"
				},
				{
					id: "bw5",
					name: "Dark Explorers",
					series: "Black",
					img: "https://images.pokemontcg.io/bw5/logo.png"
				},
				{
					id: "bw6",
					name: "Dragons Exalted",
					series: "Black",
					img: "https://images.pokemontcg.io/bw6/logo.png"
				},
				{
					id: "dv1",
					name: "Dragon Vault",
					series: "Black",
					img: "https://images.pokemontcg.io/dv1/logo.png"
				},
				{
					id: "bw7",
					name: "Boundaries Crossed",
					series: "Black",
					img: "https://images.pokemontcg.io/bw7/logo.png"
				},
				{
					id: "bw8",
					name: "Plasma Storm",
					series: "Black",
					img: "https://images.pokemontcg.io/bw8/logo.png"
				},
				{
					id: "bw9",
					name: "Plasma Freeze",
					series: "Black",
					img: "https://images.pokemontcg.io/bw9/logo.png"
				},
				{
					id: "bw10",
					name: "Plasma Blast",
					series: "Black",
					img: "https://images.pokemontcg.io/bw10/logo.png"
				},
				{
					id: "bw11",
					name: "Legendary Treasures",
					series: "Black",
					img: "https://images.pokemontcg.io/bw11/logo.png"
				},
				{
					id: "xyp",
					name: "XY Black Star Promos",
					series: "XY",
					img: "https://images.pokemontcg.io/xyp/logo.png"
				},
				{
					id: "xy0",
					name: "Kalos Starter Set",
					series: "XY",
					img: "https://images.pokemontcg.io/xy0/logo.png"
				},
				{
					id: "xy1",
					name: "XY",
					series: "XY",
					img: "https://images.pokemontcg.io/xy1/logo.png"
				},
				{
					id: "xy2",
					name: "Flashfire",
					series: "XY",
					img: "https://images.pokemontcg.io/xy2/logo.png"
				},
				{
					id: "xy3",
					name: "Furious Fists",
					series: "XY",
					img: "https://images.pokemontcg.io/xy3/logo.png"
				},
				{
					id: "xy4",
					name: "Phantom Forces",
					series: "XY",
					img: "https://images.pokemontcg.io/xy4/logo.png"
				},
				{
					id: "xy5",
					name: "Primal Clash",
					series: "XY",
					img: "https://images.pokemontcg.io/xy5/logo.png"
				},
				{
					id: "dc1",
					name: "Double Crisis",
					series: "XY",
					img: "https://images.pokemontcg.io/dc1/logo.png"
				},
				{
					id: "xy6",
					name: "Roaring Skies",
					series: "XY",
					img: "https://images.pokemontcg.io/xy6/logo.png"
				},
				{
					id: "xy7",
					name: "Ancient Origins",
					series: "XY",
					img: "https://images.pokemontcg.io/xy7/logo.png"
				},
				{
					id: "xy8",
					name: "BREAKthrough",
					series: "XY",
					img: "https://images.pokemontcg.io/xy8/logo.png"
				},
				{
					id: "xy9",
					name: "BREAKpoint",
					series: "XY",
					img: "https://images.pokemontcg.io/xy9/logo.png"
				},
				{
					id: "g1",
					name: "Generations",
					series: "XY",
					img: "https://images.pokemontcg.io/g1/logo.png"
				},
				{
					id: "xy10",
					name: "Fates Collide",
					series: "XY",
					img: "https://images.pokemontcg.io/xy10/logo.png"
				},
				{
					id: "xy11",
					name: "Steam Siege",
					series: "XY",
					img: "https://images.pokemontcg.io/xy11/logo.png"
				},
				{
					id: "xy12",
					name: "Evolutions",
					series: "XY",
					img: "https://images.pokemontcg.io/xy12/logo.png"
				},
				{
					id: "sm1",
					name: "Sun & Moon",
					series: "Sun",
					img: "https://images.pokemontcg.io/sm1/logo.png"
				},
				{
					id: "smp",
					name: "SM Black Star Promos",
					series: "Sun",
					img: "https://images.pokemontcg.io/smp/logo.png"
				},
				{
					id: "sm2",
					name: "Guardians Rising",
					series: "Sun",
					img: "https://images.pokemontcg.io/sm2/logo.png"
				},
				{
					id: "sm3",
					name: "Burning Shadows",
					series: "Sun",
					img: "https://images.pokemontcg.io/sm3/logo.png"
				},
				{
					id: "sm35",
					name: "Shining Legends",
					series: "Sun",
					img: "https://images.pokemontcg.io/sm35/logo.png"
				},
				{
					id: "sm4",
					name: "Crimson Invasion",
					series: "Sun",
					img: "https://images.pokemontcg.io/sm4/logo.png"
				},
				{
					id: "sm5",
					name: "Ultra Prism",
					series: "Sun",
					img: "https://images.pokemontcg.io/sm5/logo.png"
				},
				{
					id: "sm6",
					name: "Forbidden Light",
					series: "Sun",
					img: "https://images.pokemontcg.io/sm6/logo.png"
				},
				{
					id: "sm7",
					name: "Celestial Storm",
					series: "Sun",
					img: "https://images.pokemontcg.io/sm7/logo.png"
				},
				{
					id: "sm75",
					name: "Dragon Majesty",
					series: "Sun",
					img: "https://images.pokemontcg.io/sm75/logo.png"
				},
				{
					id: "sm8",
					name: "Lost Thunder",
					series: "Sun",
					img: "https://images.pokemontcg.io/sm8/logo.png"
				},
				{
					id: "sm9",
					name: "Team Up",
					series: "Sun",
					img: "https://images.pokemontcg.io/sm9/logo.png"
				},
				{
					id: "det1",
					name: "Detective Pikachu",
					series: "Sun",
					img: "https://images.pokemontcg.io/det1/logo.png"
				},
				{
					id: "sm10",
					name: "Unbroken Bonds",
					series: "Sun",
					img: "https://images.pokemontcg.io/sm10/logo.png"
				},
				{
					id: "sm11",
					name: "Unified Minds",
					series: "Sun",
					img: "https://images.pokemontcg.io/sm11/logo.png"
				},
				{
					id: "sm115",
					name: "Hidden Fates",
					series: "Sun",
					img: "https://images.pokemontcg.io/sm115/logo.png"
				},
				{
					id: "sma",
					name: "Shiny Vault",
					series: "Sun",
					img: "https://images.pokemontcg.io/sma/logo.png"
				},
				{
					id: "sm12",
					name: "Cosmic Eclipse",
					series: "Sun",
					img: "https://images.pokemontcg.io/sm12/logo.png"
				},

				{
					id: "swshp",
					name: "SWSH Black Star Promos",
					series: "Sword",
					img: "https://images.pokemontcg.io/swshp/logo.png"
				},
				{
					id: "swsh1",
					name: "Sword & Shield",
					series: "Sword",
					img: "https://images.pokemontcg.io/swsh1/logo.png"
				},
				{
					id: "swsh2",
					name: "Rebel Clash",
					series: "Sword",
					img: "https://images.pokemontcg.io/swsh2/logo.png"
				},
				{
					id: "swsh3",
					name: "Darkness Ablaze",
					series: "Sword",
					img: "https://images.pokemontcg.io/swsh3/logo.png"
				},
				{
					id: "swsh35",
					name: "Champion's Path",
					series: "Sword",
					img: "https://images.pokemontcg.io/swsh35/logo.png"
				},
				{
					id: "swsh4",
					name: "Vivid Voltage",
					series: "Sword",
					img: "https://images.pokemontcg.io/swsh4/logo.png"
				},
				{
					id: "swsh45",
					name: "Shining Fates",
					series: "Sword",
					img: "https://images.pokemontcg.io/swsh45/logo.png"
				},
				{
					id: "swsh45sv",
					name: "Shiny Vault",
					series: "Sword",
					img: "https://images.pokemontcg.io/swsh45sv/logo.png"
				},
				{
					id: "swsh5",
					name: "Battle Styles",
					series: "Sword",
					img: "https://images.pokemontcg.io/swsh5/logo.png"
				},
				{
					id: "swsh6",
					name: "Chilling Reign",
					series: "Sword",
					img: "https://images.pokemontcg.io/swsh6/logo.png"
				},
				{
					id: "swsh7",
					name: "Evolving Skies",
					series: "Sword",
					img: "https://images.pokemontcg.io/swsh7/logo.png"
				}
			]
		},


	}
}
</script>
