from django.db import models
from django.conf import settings

# 모든 영화 테이블
class TotalMovies(models.Model):
    title = models.CharField(max_length=100, blank=True)
    movie_id = models.IntegerField(primary_key=True, unique=True)
    genres = models.CharField(max_length=100, blank=True)
    popularity = models.FloatField(blank=True)
    release_date = models.DateField(blank=True)
    runtime = models.CharField(max_length=50, blank=True)
    adult = models.TextField(blank=True)
    budget = models.IntegerField(default=0)
    original_title = models.CharField(max_length=100, blank=True)
    revenue = models.IntegerField(default=0)
    status = models.CharField(max_length=50, blank=True)
    tagline = models.TextField(blank=True)
    vote_average = models.FloatField(default=0)
    vote_count = models.IntegerField(default=0)
    video_id = models.CharField(max_length=500)
    poster_path = models.TextField(blank=True)
    backdrop_path = models.TextField(blank=True)
    overview = models.TextField(blank=True)

    def __str__(self):
        return self.title

# 영화 인기순 테이블 
class PopularMovies(models.Model):
    title = models.CharField(max_length=100)
    movie_id = models.IntegerField(primary_key=True, unique=True)
    genres = models.CharField(max_length=100, blank=True)
    release_date = models.DateField(blank=True)
    popularity = models.FloatField(default=0)
    vote_average = models.FloatField(default=0)
    adult = models.TextField(blank=True)
    poster_path = models.TextField(blank=True)
    overview = models.TextField(blank=True)


# 영화 평점 높은순 테이블 
class TopRatedMovies(models.Model):
    title = models.CharField(max_length=100)
    movie_id = models.IntegerField(primary_key=True, unique=True)
    genres = models.CharField(max_length=100, blank=True)
    release_date = models.DateField(blank=True)
    popularity = models.FloatField()
    vote_average = models.FloatField(default=0)
    adult = models.TextField(blank=True)
    poster_path = models.TextField(blank=True)
    overview = models.TextField(blank=True)

# 영화 장르 테이블
class MovieGenres(models.Model):
    id = models.IntegerField(primary_key=True, default=0)
    name = models.CharField(max_length=100, null=True)

# 각 영화에 대한 댓글 테이블
class MovieComment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,)
    movie = models.ForeignKey(TotalMovies, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

