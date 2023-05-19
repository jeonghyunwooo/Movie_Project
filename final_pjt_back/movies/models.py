from django.db import models

class TotalMovies(models.Model):
    movie_id = models.IntegerField(primary_key=True, unique=True)
    title = models.CharField(max_length=100)
    release_date = models.DateField(blank=True)
    overview = models.TextField(blank=True)
    poster_path = models.TextField(blank=True)
    vote_average = models.FloatField(default=0)
    popularity = models.FloatField()
    genres = models.CharField(max_length=100, blank=True)
    runtime = models.CharField(max_length=50)
    video_id = models.CharField(max_length=500)

    def __str__(self):
        return self.title
s
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

