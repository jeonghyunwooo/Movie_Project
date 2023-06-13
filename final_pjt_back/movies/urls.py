from django.urls import path
from . import views

app_name = 'movies'
urlpatterns = [
    # TMDB/MOVIES/Details의 영화데이터 테이블에 저장
    path('save/total_movies/',views.save_total_movies),

    # TMDB/MOVIES/Popular의 영화데이터 테이블에 저장
    path('save/popular_movies/',views.save_popular_movies),
    
    # TMDB/MOVIES/Top_rated의 영화데이터 테이블에 저장
    path('save/top_rated_movies/',views.save_top_rated_movies),

    # TMDB/GENRES/MOVIES의 영화장르 데이터 테이블 저장
    path('save/movie_genres/', views.save_movie_genres),

    # DB의 전체 영화데이터 가져오기
    path('total_movies/',views.get_total_movies),

    # DB의 Popular의 영화데이터 가져오기
    path('popular_movies/',views.get_popular_movies),
    
    # DB의 Top_rated의 영화데이터 가져오기
    path('top_rated_movies/',views.get_top_rated_movies),

    # TMDB/MOVIES/Popular의 영화데이터 가져오기
    path('TMDB/popular_movies/',views.get_tmdb_popular_movies),
    
    # TMDB/MOVIES/Top_rated의 영화데이터 가져오기
    path('TMDB/top_rated_movies/',views.get_top_rated_movies),

    # 각 영화에 대한 댓글 작성
    path('<int:movie_id>/comments/', views.comment_create),

    # 모든 댓글 data 가져오기
    path('comments/', views.comment_list),

    # 특정 장르의 영화 가져오기
    path('<str:genre>/genres_movies/', views.genres_movies),
    
    # 해당 영화 댓글 삭제
    path('<int:comment_id>/comment_delete/', views.comment_delete),

    # 검색해서 영화찾기
    path('<str:movie_title>/search/', views.movie_search)

]
