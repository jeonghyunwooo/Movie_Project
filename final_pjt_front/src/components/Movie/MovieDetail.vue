<template>
  <div>
    Modal
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="modal-dialog modal-dialog-scrollable">
              {{movie_datail}}
            </div>
              <MovieComment/>
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieComment from '@/components/Movie/MovieComment'

export default {
  name: 'MovieDetail',
  components:{
    MovieComment,
  },
  
  // store의 getters에서 재정의한 변수를 가져온다.
  computed : {
    // 영화목록 세부 data
    movie_datail() {
      return this.$store.getters.movie_detail
    },
  },

}
</script>

<style>

</style>