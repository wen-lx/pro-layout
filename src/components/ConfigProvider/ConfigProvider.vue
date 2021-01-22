<template>
  <div class="porvider"><slot></slot></div>
</template>

<script>
export default {
  // props: ['i18nRender'],
  provide () {
    return {
      // i18nRender: that.i18nRender
      // contentWidth,
      // breadcrumbRender
    }
  },
  mounted () {
    console.log(123, this)
  }
}
</script>

<style lang="stylus" scoped>
.porvider
  height 100%
</style>
