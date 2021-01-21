<template>
  <ContainerQuery :query="mediaQuery" @change="handleMediaQuery">
    <slot></slot>
  </ContainerQuery>
</template>

<script>
import { ContainerQuery } from 'vue-container-query'
export default {
  inject: ['mediaQuery', 'handleMediaQuery'],
  components: {
    ContainerQuery
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>

</style>
