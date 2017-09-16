<template>
  <div id="app">
    <v-header></v-header>
    <v-container pathname="pathName"></v-container>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from './components/header'
import vContainer from './components/container'
import vFooter from './components/footer'

export default {
  name: 'app',
  components: {
    vHeader,
    vContainer,
    vFooter,
  }
}
</script>

<style lang="scss">
@import 'css/css.scss';

</style>
