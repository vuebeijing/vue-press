<template>
  <div>
    <restaurant :data="restaurantData"></restaurant>
  </div>
</template>

<script>
  import Restaurant from './restaurant-card.vue';
  export default {
    data() {
      return {
        restaurantData: {name:'pizza overload'}
      }
    },
    
  }
</script>

<style lang="scss" scoped>

</style>