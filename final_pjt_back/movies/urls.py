from django.urls import path
from . import views

app_name = 'movies'
urlpatterns = [
    # TMDB/MOVIES/Details의 영화데이터 테이블에 저장
    path('save/total_movies/',views.save_total_movies),

    # TMDB/GENRES/MOVIES의 영화장르 데이터 테이블 저장
    path('save/movie_genres/', views.save_movie_genres),

    # TMDB/MOVIES/Details의 영화데이터 가져오기
    path('total_movies/',views.get_total_movies),

    # TMDB/MOVIES/Popular의 영화데이터 가져오기
    path('popular_movies/',views.get_popular_movies),
    
    # TMDB/MOVIES/Top_rated의 영화데이터 가져오기
    path('top_rated_movies/',views.get_top_rated_movies),

    # 각 영화에 대한 댓글 작성
    path('<int:movie_id>/comments/', views.comment_create),
]
