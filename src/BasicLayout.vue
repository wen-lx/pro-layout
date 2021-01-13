<template>
  <!-- <ConfigProvider :i18nRender="i18nRender" :contentWidth="props.contentWidth" :breadcrumbRender="breadcrumbRender"> -->
  <ConfigProvider>
    <ContainerQuery>
      <Layout><slot></slot></Layout>
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
  provide () {
    return {
      menus: this.$attrs.menus
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
    localStorage.setItem('themeColor', '#1890ff')
  }
}
</script>

<style lang="stylus" scoped>
@import "./init.css"

</style>
