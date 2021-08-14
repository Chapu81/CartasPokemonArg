<template>
  <series-list />
</template>

<script>
  import Series from '../components/global/Series_list'

  export default {
    name: 'Series',

    components: {
      'series-list': Series
    },
  }
</script>
