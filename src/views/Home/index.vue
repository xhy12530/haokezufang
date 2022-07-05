<template>
  <div>
    <!-- 轮播 -->
    <van-swipe :autoplay="3000" height="212">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 搜索 -->
    <TopSearch></TopSearch>
  </div>
</template>

<script>
import { getSwiper } from '@/api'
import TopSearch from '@/components/TopSearch.vue'
export default {
  name: 'home',
  components: {
    TopSearch
  },
  data () {
    return {
      images: [
        'http://liufusong.top:8080/img/swiper/2.png',
        'http://liufusong.top:8080/img/swiper/2.png'
      ]
    }
  },
  created () {
    this.getSwiper()
  },
  methods: {
    async getSwiper () {
      const res = await getSwiper()
      console.log(res)
    }
  }
}
</script>

<style scoped lang="less">
img {
  width: 100%;
}

</style>
