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
      menus: this.menus,
      isMobile: this.$attrs.isMobile,
      slots: this.$slots,
      settings: this.$attrs.settings,
      mediaQuery:  this.$attrs.mediaQuery,
      handleMediaQuery:  this.$attrs.handleMediaQuery
    }
  },
  data () {
    return {
      menus: this.$attrs.menus.filter(item => {
        if (item.meta && item.meta.prolayout) {
          item.children = item.children.filter(ite => {
            return ite.meta.menu
          })
          return item
        }
      })
    }
  },
  computed: {
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
@import "./init.css"

</style>
