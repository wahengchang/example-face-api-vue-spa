<template>
  <div id="app">
    <loading :active="isLoading" 
    :can-cancel="true" 
    :is-full-page="true"></loading>
    <Header />
    <div id="nav">
      <router-link to="/facedetection">Face Detection</router-link> | 
      <router-link to="/landmark">Landmark</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  components:{Loading, Header},
  computed: {
    isLoading: function() {
      return this.$store.system.isLoading
    },
  }
}
</script>

<style lang="stylus">
</style>
