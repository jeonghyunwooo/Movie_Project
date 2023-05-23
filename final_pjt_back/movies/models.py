from django.db import models

# 모든 영화 테이블
class TotalMovies(models.Model):
    adult = models.TextField(blank=True)
    backdrop_path = models.TextField(blank=True)
    budget = models.IntegerField(default=0)
    genres = models.CharField(max_length=100, blank=True)
    movie_id = models.IntegerField(primary_key=True, unique=True)
    original_title = models.CharField(max_length=100, blank=True)
    overview = models.TextField(blank=True)
    popularity = models.FloatField(blank=True)
    poster_path = models.TextField(blank=True)
    release_date = models.DateField(blank=True)
    revenue = models.IntegerField(default=0)
    runtime = models.CharField(max_length=50, blank=True)
    status = models.CharField(max_length=50, blank=True)
    tagline = models.TextField(blank=True)
    title = models.CharField(max_length=100, blank=True)
    video_id = models.CharField(max_length=500)
    vote_average = models.FloatField(default=0)
    vote_count = models.IntegerField(default=0)

    def __str__(self):
        return self.title

# 영화 인기순 테이블 
class PopularMovies(models.Model):
    title = models.CharField(max_length=100)
    release_date = models.DateField(blank=True)
    overview = models.TextField(blank=True)
    poster_path = models.TextField(blank=True)
    vote_average = models.FloatField(default=0)
    popularity = models.FloatField()

# 영화 평점 높은순 테이블 
class TopRatedMovies(models.Model):
    title = models.CharField(max_length=100)
    release_date = models.DateField(blank=True)
    overview = models.TextField(blank=True)
    poster_path = models.TextField(blank=True)
    vote_average = models.FloatField(default=0)
    popularity = models.FloatField()

# 영화 장르 테이블
class MovieGenres(models.Model):
    id = models.IntegerField(primary_key=True, default=0)
    name = models.CharField(max_length=100, null=True)

# 각 영화에 대한 댓글 테이블
class MovieComment(models.Model):
    movie_id = models.ForeignKey(TotalMovies, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

