<template>
  <div @click="doSomething">

  </div>
</template>

<script>
  export default {
    data() {
      return {
        key: value
      }
    },
    mounted () {
      console.log('Mounted!');
    },
    methods: {
      doSomething() {
        console.log('I am doing something')
      }
    },

  }
</script>

<style lang="scss" scoped>

</style>