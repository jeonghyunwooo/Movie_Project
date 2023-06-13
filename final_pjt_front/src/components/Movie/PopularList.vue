<template>
  <div class="box">
    <div class="image-container">
      <h3 id="Popular_word">실시간 인기 영화</h3>
      <swiper :options="swiperOptions" @click-slide="handleClickSlide">
        <swiper-slide
          v-for="p_movie in total_moives"
          :key="p_movie.reallyIndex"
        >
          <div class="slide-content">
            <PopularListItem :p_movie="p_movie" />
          </div>
        </swiper-slide>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import PopularListItem from "@/components/Movie/PopularListItem";
import { swiper, swiperSlide } from "vue-awesome-swiper";
// import 'swiper/dist/css/swiper.css'
import "swiper/swiper-bundle.css";

export default {
  name: "PopularList",
  components: {
    PopularListItem,
    swiper,
    swiperSlide,
  },
  // data () {
  //   return{
  //     genre_movies : null
  //   }
  // },

  // store의 getters에서 재정의한 변수를 가져온다.
  computed: {
    // 영화목록(인기) 전체 data
    popular_movies() {
      return this.$store.getters.popular_movies;
    },

    // 영화목록 전체 data
    total_moives() {
      return this.$store.getters.total_movies;
    },

    // 영화목록 전체 data 장르별 조회
    genre_movies() {
      return this.$store.getters.genre_movies;
    },

    swiperOptions() {
      return {
        slidesPerView: 9,
        // slidesPerGroup: 9,
        spaceBetween: 20,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        loop: true, // 데이터가 끝까지 다읽으면 처음으로 돌아옴
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1700: {
            slidesPerView: 8,
            // slidesPerGroup: 8,
          },
          1520: {
            slidesPerView: 7,
            // slidesPerGroup: 7,
          },
          1400: {
            slidesPerView: 6,
            // slidesPerGroup: 6,
          },
          1190: {
            slidesPerView: 5,
            // slidesPerGroup: 5,
          },
          980: {
            slidesPerView: 4,
            // slidesPerGroup: 4,
          },
          780: {
            slidesPerView: 3,
            // slidesPerGroup: 3
          },
          550: {
            slidesPerView: 2,
            // slidesPerGroup: 2,
          },
          150: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },
        },
      };
    },
  },
  methods: {
    handleClickSlide(event) {
      const swiperInstance = event.target.swiper;
      if (swiperInstance) {
        const slideIndex = event.clickedIndex;
        const reallyIndex = swiperInstance.realIndex;
        console.log("Clicked slide index:", slideIndex);
        console.log("Real slide index:", reallyIndex);
      }
    },
  },
};
</script>

<style scoped>
.box {
  margin-right: 95px;
  margin-top: 30px;
}

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

#Popular_word {
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
  width: 10px;
  height: 10px;
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
  right: 1px;
}

.swiper-button-prev {
  left: 1px;
}
</style>