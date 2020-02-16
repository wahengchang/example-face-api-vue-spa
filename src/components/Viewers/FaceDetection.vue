<template>
  <div class="home">
    {{imageUrl}}
    <div style="position: relative" class="margin">
      <div class='faceExtractContainer' ref='faceExtractContainer'>
      </div>
    </div>
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
      extractImageList: []
    }
  },
  mounted: async function(){
    const inputImgEl = this.$refs.inputImage
    const options = getFaceDetectorOptions()
    this.$store.system.isLoading = true
    const resultDetection = await faceapi.detectAllFaces(inputImgEl, options)
    this.$store.system.isLoading = false

    // rendering main canvas
    const canvas = document.getElementById('overlay')
    faceapi.matchDimensions(canvas, inputImgEl)
    faceapi.draw.drawDetections(canvas, faceapi.resizeResults(resultDetection, inputImgEl))

    // rendering extracted face
    this.extractImageList = await faceapi.extractFaces(inputImgEl, resultDetection)
    this.extractImageList.forEach(htmlElement => this.$refs.faceExtractContainer.append(htmlElement))
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

.faceExtractContainer canvas{
  width: 80px;
}
</style>
