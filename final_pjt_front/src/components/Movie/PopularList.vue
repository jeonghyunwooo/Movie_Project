<template>
  <div class="image-container">
    <h3 id="Popular_word">실시간 인기 영화</h3>
    <swiper :options="swiperOptions" >
      <!-- <swiper-slide v-for="p_movie in popular_movies" :key="p_movie.id" @click-slide="posterinfo"> -->
      <swiper-slide v-for="p_movie in popular_movies" :key="p_movie.id">
        <div class="slide-content" >
          <PopularListItem :p_movie="p_movie" @PopularListItem_PopularList="PopularListToHomeView"></PopularListItem>
        </div>
      </swiper-slide>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
    </swiper>
  </div>
</template>

<script>
import PopularListItem from '@/components/Movie/PopularListItem'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
import 'swiper/swiper-bundle.css'

export default {
  name: 'PopularList',
  components: {
    PopularListItem,
    swiper,
    swiperSlide
  },
  data : function(){
    return{
      getPopularMovieDetail:'',
    }
  },
  methods:{
    PopularListToHomeView(input){
      this.getPopularMovieDetail = input
      this.$emit('PopualrList-HomeView',this.getPopularMovieDetail)
    },
    posterinfo(index,reallyIndex){
      console.log(index,reallyIndex)
    }
  },
  computed: {
    popular_movies() {
      return this.$store.getters.popular_movies
    },

    // swiper-slide 가 영화의 리스트를 늘려주어 진짜 영화값의 인덱스가 아니라 늘려버린 인덱스로 영화값이 나와 이것을 진짜 인덱스를 찾아 영화를 출력해야한다
    // @click-slide="posterinfo"함수로 store에서 값을 찾는다
    
    swiperOptions() {
      return {
        slidesPerView: 9,
        slidesPerGroup: 9,
        spaceBetween: 20,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false
        // },
        loop: true, // 데이터가 끝까지 다읽으면 처음으로 돌아옴
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1700:{
            slidesPerView: 8,
            slidesPerGroup: 8,
          },
          1520:{
            slidesPerView: 7,
            slidesPerGroup: 7,
          },
          1400:{
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          1190:{
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          980:{
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          780: {
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          550: {
            slidesPerView: 2,
            slidesPerGroup: 2,
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
  margin-bottom: 50px;
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

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: transparent;
  color: rgba(108, 157, 63, 0.471);
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.swiper-button-next {
  right: 5px;
}

.swiper-button-prev {
  left: 5px;
}
</style>