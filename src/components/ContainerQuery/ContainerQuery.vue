<template>
  <ContainerQuery :query="MediaQueryEnum" @change="handleMediaQuery">
    <slot></slot>
  </ContainerQuery>
</template>

<script>
import { ContainerQuery } from 'vue-container-query'
export default {
  components: {
    ContainerQuery
  },
  data () {
    return {
      MediaQueryEnum: {
        'screen-xs': {
          maxWidth: 575
        },
        'screen-sm': {
          minWidth: 576,
          maxWidth: 767
        },
        'screen-md': {
          minWidth: 768,
          maxWidth: 991
        },
        'screen-lg': {
          minWidth: 992,
          maxWidth: 1199
        },
        'screen-xl': {
          minWidth: 1200,
          maxWidth: 1599
        },
        'screen-xxl': {
          minWidth: 1600
        }
      }
    }
  },
  methods: {
    handleMediaQuery (val) {
      console.log('media1', val)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
