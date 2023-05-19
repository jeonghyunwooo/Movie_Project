from django.db import models

class TotalMovies(models.Model):
    title = models.CharField(max_length=100)
    movie_id = models.IntegerField(primary_key=True)
    release_date = models.DateField(blank=True)
    overview = models.TextField()
    poster_path = models.CharField(max_length=200)
    vote_average = models.FloatField()
    popularity = models.FloatField()
    genres = models.CharField(max_length=100)
    youtube_key = models.CharField(max_length=200)
    runtime = models.TimeField()
    

class PopularMovies(models.Model):
    title = models.CharField(max_length=100)
    # movie_id = models.IntegerField(primary_key=True)
    release_date = models.DateField(blank=True)
    overview = models.TextField()
    poster_path = models.CharField(max_length=200)
    vote_average = models.FloatField()
    popularity = models.FloatField()


class TopRatedMovies(models.Model):
    title = models.CharField(max_length=100)
    # movie_id = models.IntegerField(primary_key=True)
    release_date = models.DateField(blank=True)
    overview = models.TextField()
    poster_path = models.CharField(max_length=200)
    vote_average = models.FloatField()
    popularity = models.FloatField()

