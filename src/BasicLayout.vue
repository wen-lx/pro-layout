<template>
  <!-- <ConfigProvider :i18nRender="i18nRender" :contentWidth="props.contentWidth" :breadcrumbRender="breadcrumbRender"> -->
  <ConfigProvider :i18nRender="i18nRender">
    <ContainerQuery>

    </ContainerQuery>
  </ConfigProvider>
</template>

<script>
import ContainerQuery from './components/ContainerQuery'
import ConfigProvider from './components/ConfigProvider'
import { i18nRender } from '../examples/src/locales';
export default {
  props: ['setting'],
  components: {
    ContainerQuery,
    ConfigProvider
  },
  data () {
    return {
    }
  },
  computed: {
    i18nRender () {
      return this.$attrs.i18nRender
    }
  },
  mounted () {
    // i18nRender = this.$attrs.i18nRender
  }
}
</script>

<style lang="stylus" scoped>

</style>
