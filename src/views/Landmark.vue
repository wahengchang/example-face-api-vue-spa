<template>
  <div class="home" v-if='isInited'>
    <div class='viewerContainer'>
      <LandmarkViewer
        v-if='!isChangingImage'
        :imageUrl='imgUrl'
      />
    </div>
    
    <vue-select-image
      :dataImages="imageList"
      @onselectimage="onSelectImage"
      :w='"200"'
    />
  </div>
</template>

<script>
// @ is an alias to /src
import VueSelectImage from 'vue-select-image'
import LandmarkViewer from '@/components/Viewers/LandmarkDetection'
import 'vue-select-image/dist/vue-select-image.css'
import init from '@/lib/face/init'

function getFaceDetectorOptions() {
  let minConfidence = 0.5
  return new faceapi.SsdMobilenetv1Options({ minConfidence })
}

export default {
  name: 'Home',
  components: {
    VueSelectImage, LandmarkViewer
  },
  data: function() {
    const imageList = [{
        id: '4',
        src: '/face-4.jpg',
        alt: 'Alt Image 4'
      }, {
        id: '5',
        src: '/face-5.jpg',
        alt: 'Alt Image 5'
      },{
        id: '6',
        src: '/face-6.jpg',
        alt: 'Alt Image 6'
      }]
    return {
      isChangingImage: false,
      isInited: false,
      imgUrl: imageList[0].src,
      imageList
    }
  },
  mounted: async function(){
    await this.init()
    // const inputImgEl = this.$refs.inputImage
    // const options = getFaceDetectorOptions()
    // const results = await faceapi.detectAllFaces(inputImgEl, options)

    // const canvas = document.getElementById('overlay')
    // faceapi.matchDimensions(canvas, inputImgEl)
    // faceapi.draw.drawDetections(canvas, faceapi.resizeResults(results, inputImgEl))
  },
  methods: {
    init: async function() {
      this.isInited = false
      this.$store.system.isLoading = true
      await init.landmarkDetection()
      this.$store.system.isLoading = false
      this.isInited = true
    },
    onSelectImage: async function(e){
      this.isChangingImage = true
      await this.$sleep(1)
      this.imgUrl = e.src
      this.isChangingImage = false
    }
  }
}
</script>

<style>
.viewerContainer {
  width: 100%;
  min-height: 200px;
  background: lightgray;
}
</style>