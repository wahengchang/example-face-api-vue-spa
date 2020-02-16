<template>
  <div class="home">
			<section id="banner">
				<div class="inner">
          <div class="content">
            <h1>Speech To Text Online</h1>
            <p>This is a free online speech-to-text converter. A browser base online tool, allowing Windows, iOS, Android, whatever devices supporting browser.</p>
            <p>69 Languages are supported.</p>
            <router-link
              class="button primary large"
              to="/facedetection"
            > Face Detection </router-link>
				  </div>
				</div>
			</section>

      <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Footer
  },
  data: function() {
    return {}
  }
}
</script>

<style scoped>
#banner {
  min-height: 100vh;
}
</style>