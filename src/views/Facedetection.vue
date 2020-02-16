<template>
  <div class="home" v-if='isInited'>
    <div class='viewerContainer'>
      <FaceDetecionViewer
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
import FaceDetecionViewer from '@/components/Viewers/FaceDetection'
import 'vue-select-image/dist/vue-select-image.css'
import init from '@/lib/face/init'

function getFaceDetectorOptions() {
  let minConfidence = 0.5
  return new faceapi.SsdMobilenetv1Options({ minConfidence })
}

export default {
  name: 'Home',
  components: {
    VueSelectImage, FaceDetecionViewer
  },
  data: function() {
    const imageList = [{
        id: '3',
        src: '/face-3.jpg',
        alt: 'Alt Image 3'
      }, {
        id: '2',
        src: '/face-2.jpg',
        alt: 'Alt Image 2'
      },{
        id: '1',
        src: '/face-1.jpg',
        alt: 'Alt Image 1'
      },{
        id: '4',
        src: '/many-people-1.jpg',
        alt: 'Many People'
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
  },
  methods: {
    init: async function() {
      this.isInited = false
      this.$store.system.isLoading = true
      await init.faceDetection()
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