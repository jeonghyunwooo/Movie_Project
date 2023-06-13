<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1
              class="modal-title fs-5"
              id="staticBackdropLabel"
              style="color: red; margin-left: 5%; font-weight: bold"
            >
              영화를 소개합니다
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              style="
                color: red;
                margin-right: 1.5%;
                font-weight: bold;
                font-size: 20px; /* 작은 화면에 대한 텍스트 크기 */
              "
            >
              X
            </button>
          </div>
          <div class="modal-body">
            <!-- 영상 -->
            <div class="ratio ratio-16x9">
              <iframe :src="videoUrl" frameborder="0" allowfullscreen></iframe>
            </div>
            <!--  -->

            <div class="modal-dialog modal-dialog-scrollable">
              <!-- 포스터 -->
              <img :src="image" class="image-container" />
              <div class="text">
                <br /><br />

                <h1>{{ movie_detail.title }}</h1>
                <h6>감독 : {{ movie_detail.status }}</h6>
                <h6>장르 : {{ getGenres }}</h6>
                <h6>개봉날짜 : {{ movie_detail.release_date }}</h6>
                <h6>시간 : {{ movie_detail.runtime }} 분</h6>
                <h5 style="margin-top: 15px">줄거리</h5>
                <!-- <h5 class="overview text-wrap" >{{ movie_detail.overview }}</h5> -->
                <h6 id="overview" ref="overviewElement">
                  {{ movie_detail.overview }}
                </h6>

                <button v-if="isOverflown" @click="toggleOverview">
                  {{ showFullOverview ? "간략히 보기" : "전체 보기" }}
                </button>
              </div>
            </div>

            <!-- 한줄평 창 -->
            <div class="cards">
              <div class="card text-bg-dark">
                <svg
                  class="bd-placeholder-img bd-placeholder-img-lg card-img"
                  width="100%"
                  height="270"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Card image"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title></title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em"></text>
                </svg>

                <div class="card-img-overlay">
                  <div class="scroll-container">
                    <div class="scrollable">
                      <p class="comments" v-for="comment in comments" :key="comment.id">
                        {{ comment.username }} : {{ comment.content }}
                        <input
                          type="button"
                          value="삭제"
                          @click="deleteComment(comment.id)"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal-footer"></div>
          <MovieComment />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieComment from "@/components/Movie/MovieComment";

const make_img_URL = "https://image.tmdb.org/t/p/w500";

export default {
  name: "MovieDetail",
  components: {
    MovieComment,
  },
  
  computed: {
    // 중앙 저장소의 영화 꺼내오기 영화
    movie_detail() {
      return this.$store.getters.movie_detail;
    },

    comments() {
      return this.$store.getters.comments;
    },

    // 영화 예고편
    videoUrl() {
      return `https://www.youtube.com/embed/${this.movie_detail.video_id}`;
    },

    // 영화 장르
    getGenres() {
      if (Array.isArray(this.movie_detail.genres)) {
        const filteredGenres = this.movie_detail.genres.map((genre) =>
          genre.replace(/[^A-Za-z0-9가-힣\s]/g, "")
        );
        return filteredGenres.filter((genre) => genre !== "").join(", ");
      } else if (typeof this.movie_detail.genres === "string") {
        const genresArray = this.movie_detail.genres.split(", ");
        const filteredGenres = genresArray.map((genre) =>
          genre.replace(/[^A-Za-z0-9가-힣\s]/g, "")
        );
        return filteredGenres.filter((genre) => genre !== "").join(", ");
      } else {
        return "";
      }
    },

    // 영화 포스터
    image() {
      return make_img_URL + this.movie_detail.poster_path;
    },
  },

  mounted() {
    this.checkOverflow();
  },

  methods: {
    // 해당 댓글 삭제
    deleteComment(id) {
      this.$store.dispatch("deleteComment", id);
    },

    checkOverflow() {
      const overviewElement = this.$refs.overviewElement;
      const lineHeight = parseFloat(
        getComputedStyle(overviewElement).lineHeight
      );
      const maxHeight = lineHeight * 3;

      this.isOverflown = overviewElement.scrollHeight > maxHeight;
      if (this.isOverflown) {
        overviewElement.style.maxHeight = `${maxHeight}px`;
        overviewElement.style.overflow = "hidden";
      }
    },
    toggleOverview() {
      const overviewElement = this.$refs.overviewElement;
      const lineHeight = parseFloat(
        getComputedStyle(overviewElement).lineHeight
      );
      const maxHeight = lineHeight * 3;

      if (this.showFullOverview) {
        overviewElement.style.maxHeight = `${maxHeight}px`;
      } else {
        overviewElement.style.maxHeight = "none";
      }
      this.showFullOverview = !this.showFullOverview;
    },
  },

  data() {
    return {
      isOverflown: false,
      showFullOverview: false,
    };
  },
};
</script>

<style scoped>
.cards {
  max-height: 200px;
  overflow: hidden;
}

.scroll-container {
  max-height: 200px;
  overflow-y: auto;
}

.modal-content {
  background-color: rgb(0, 0, 0, 0.78);
  color: rgb(205, 209, 185);
}

.image-container {
  margin-top: 3%;
  margin-left: 2%;
  margin-right: 2%;
  height: 40%;
  width: 30%;
  float: left;
  bottom: 10%;
}

.text {
  font-weight: bold;
  font-size: 24px;
  text-align: lefts;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
}

.overview {
  margin-top: 3%;
  margin-left: 45%;
  margin-right: 10%;
  margin-bottom: 8%;
  width: 33rem;
  line-height: 3;
}

h6 {
  font-size: 20px;
  margin-top: 7px;
}

.card-img {
  background-color: rgba(0, 0, 0, 1);
}

.scrollable {
  max-height: 200px;
  overflow-y: auto;
}

.comments{
  text-align: left;
}
</style>