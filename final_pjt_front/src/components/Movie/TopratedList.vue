<template>
  <div class="box">
    <div class="image-container">
      <h3 id="Popular_word">최고 평점 영화</h3>
      <swiper :options="swiperOptions" @click-slide="handleClickSlide">
        <swiper-slide v-for="t_movie in toprated_movies" :key="t_movie.id">
          <div class="slide-content">
            <TopratedListItem :t_movie="t_movie" />
          </div>
        </swiper-slide>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import TopratedListItem from "@/components/Movie/TopratedListItem";
import { swiper, swiperSlide } from "vue-awesome-swiper";
// import 'swiper/dist/css/swiper.css'
import "swiper/swiper-bundle.css";

export default {
  name: "TopratedList",
  components: {
    TopratedListItem,
    swiper,
    swiperSlide,
  },

  // store의 getters에서 재정의한 변수를 가져온다.
  computed: {
    //영화목록(평점순) 전체 data
    toprated_movies() {
      return this.$store.getters.toprated_movies;
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
        slidesPerView: 9, // 화면 최대 크기일시 나타나는 이미지의 수
        // slidesPerGroup: 9,  // 버튼 클릭 시 이동하는 이미지의 수
        spaceBetween: 20,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        loop: true, // 데이터가 끝까지 다읽으면 가상을 이어붙임
        navigation: {
          // swiper, swiperSlide 에서 재공하는 기능 (버튼)
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
            // slidesPerGroup: 3,
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
}

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

#Popular_word {
  text-align: left;
  margin-left: 20px;
  margin-bottom: 20px;
  color: white;
}

/* 버튼 css */
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
  right: 1px;
}

.swiper-button-prev {
  left: 1px;
}
</style>
