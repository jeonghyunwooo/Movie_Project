from django.urls import path
from . import views

app_name = 'movies'
urlpatterns = [
    path('popular_movies/',views.get_popular_movies),
    path('top_rated_movies/',views.get_top_rated_movies),
    path('total_movies/',views.get_total_movies),
]
