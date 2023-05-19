from django.db import models

class TotalMovies(models.Model):
    title = models.CharField(max_length=100)
    movie_id = models.IntegerField(primary_key=True)
    release_date = models.DateField(blank=True)
    overview = models.TextField(blank=True)
    poster_path = models.TextField(blank=True)
    vote_average = models.FloatField(default=0)
    popularity = models.FloatField()
    genres = models.CharField(max_length=100, blank=True)
    youtube_key = models.CharField(max_length=500)
    runtime = models.CharField(max_length=50)
    

class PopularMovies(models.Model):
    title = models.CharField(max_length=100)
    release_date = models.DateField(blank=True)
    overview = models.TextField(blank=True)
    poster_path = models.TextField(blank=True)
    vote_average = models.FloatField(default=0)
    popularity = models.FloatField()


class TopRatedMovies(models.Model):
    title = models.CharField(max_length=100)
    release_date = models.DateField(blank=True)
    overview = models.TextField(blank=True)
    poster_path = models.TextField(blank=True)
    vote_average = models.FloatField(default=0)
    popularity = models.FloatField()

