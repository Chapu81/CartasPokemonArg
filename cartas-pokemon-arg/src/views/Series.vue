<template>
<div>
	<series-list @loaded="loading = false" />
	<loader-c v-if="loading" />
</div>
</template>

<script>
import Series from '../components/global/Series_list'

export default {
    name: 'Series',
	data: () => ({
		loading: true,
    }),

    components: {
		'series-list': Series
    },
}
</script>
