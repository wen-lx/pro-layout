<template>
  <!-- <ConfigProvider :i18nRender="i18nRender" :contentWidth="props.contentWidth" :breadcrumbRender="breadcrumbRender"> -->
  <ConfigProvider>
    <ContainerQuery>
      <SettingDrawer>
        <Layout><slot></slot></Layout>
      </SettingDrawer>
    </ContainerQuery>
  </ConfigProvider>
</template>

<script>
import ContainerQuery from './components/ContainerQuery'
import ConfigProvider from './components/ConfigProvider'
import SettingDrawer from './components/SettingDrawer'
import Layout from './components/Layout'
export default {
  components: {
    ContainerQuery,
    ConfigProvider,
    SettingDrawer,
    Layout
  },
  provide () {
    return {
      menus: this.$attrs.menus,
      isMobile: this.$attrs.isMobile,
      slots: this.$slots,
      settings: this.$attrs.settings,
      mediaQuery:  this.$attrs.mediaQuery,
      handleMediaQuery:  this.$attrs.handleMediaQuery
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  mounted () {
    console.log(666, this.$el)
  }
}
</script>

<style lang="stylus" scoped>
@import "./init.css"

</style>
