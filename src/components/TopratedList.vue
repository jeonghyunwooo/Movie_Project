<template>
  <div class="image-container">
    <h3 id="Popular_word">최고 평점 영화</h3>
    <swiper :options="swiperOptions">
      <swiper-slide v-for="t_movie in toprated_movies" :key="t_movie.id">
        <div class="slide-content">
          <TopratedListItem :t_movie="t_movie"></TopratedListItem>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import TopratedListItem from '@/components/TopratedListItem'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
import 'swiper/swiper-bundle.css'

export default {
  name:'TopratedList',
  components : {
    TopratedListItem,
    swiper,
    swiperSlide
  },
  computed: {
    toprated_movies() {
      return this.$store.getters.toprated_movies
    },
    swiperOptions() {
      return {
        slidesPerView: 9,
        spaceBetween: 20,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        loop: true, // 데이터가 끝까지 다읽으면 처음으로 돌아옴
        breakpoints: {
          1700:{
            slidesPerView: 8
          },
          1520:{
            slidesPerView: 7
          },
          1400:{
            slidesPerView: 6
          },
          1190:{
            slidesPerView: 5
          },
          980:{
            slidesPerView: 4
          },
          780: {
            slidesPerView: 3
          },
          550: {
            slidesPerView: 2
          },
          150: {
            slidesPerView: 1
          },
          0: {
            slidesPerView: 1
          }
        }
      }
    }
  },
}
</script>

<style scoped>
.image-container {
  width: 100%;
  overflow: hidden;
  margin-bottom: 300px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
}
.slide-content {
  flex-direction: column;
}

#Popular_word{
  text-align: left;
  margin-left: 20px;
  margin-bottom: 20px;
  color: white;
}
</style>
