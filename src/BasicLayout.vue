<template>
  <!-- <ConfigProvider :i18nRender="i18nRender" :contentWidth="props.contentWidth" :breadcrumbRender="breadcrumbRender"> -->
  <ConfigProvider>
    <ContainerQuery>
      <Layout></Layout>
    </ContainerQuery>
  </ConfigProvider>
</template>

<script>
import ContainerQuery from './components/ContainerQuery'
import ConfigProvider from './components/ConfigProvider'
import Layout from './components/Layout'
export default {
  props: ['setting'],
  components: {
    ContainerQuery,
    ConfigProvider,
    Layout
  },
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
    // i18nRender = this.$attrs.i18nRender
  }
}
</script>

<style lang="stylus" scoped>
@import "./init.css"

</style>
