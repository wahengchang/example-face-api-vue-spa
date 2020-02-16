<template>
  <div class="home">
    {{imageUrl}}
    <div style="position: relative" class="margin">
      <img ref="inputImage" :src='imageUrl' />
      <canvas id="overlay" width="800" height="600" />
    </div>
  </div>
</template>

<script>
function getFaceDetectorOptions() {
  let minConfidence = 0.5
  return new faceapi.SsdMobilenetv1Options({ minConfidence })
}

export default {
  name: 'ViewerFaceDetection',
  props: ['imageUrl'],
  components: {
  },
  data: function() {
    return {
    }
  },
  mounted: async function(){
    const inputImgEl = this.$refs.inputImage
    const options = getFaceDetectorOptions()
    this.$store.system.isLoading = true
    const results = await faceapi.detectAllFaces(inputImgEl, options).withFaceLandmarks()
    this.$store.system.isLoading = false

    const canvas = document.getElementById('overlay')
    faceapi.matchDimensions(canvas, inputImgEl)

    const resizedResults = faceapi.resizeResults(results, inputImgEl)
    faceapi.draw.drawFaceLandmarks(canvas, resizedResults)
  },
  methods: {
  }
}
</script>
<style scoped>
#overlay {
  position: absolute;
  top: 0;
  left: 0;
}

img {
    width: 100%;
}

canvas {
    width: 100%;
}
</style>
