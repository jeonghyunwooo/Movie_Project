from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PopularMoviesSerializer
from .models import PopularMovies
import requests
import pprint
# Create your views here.

API_KEY = '3e522bb11d9503474e85e9a710de1de4'
TMDB_POPULAR_API = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&sort_by=popularity.desc'

@api_view(['GET'])
def get_popular_movies(request):
    movie_data = []
    for i in range(1,10):
        response = requests.get(
            TMDB_POPULAR_API,
            params={
                'api_key' : API_KEY,
                'language' : 'ko-kR',
                'page' : i,
            }
        ).json()
        popularmovies = response.get('results')
        serializer = PopularMoviesSerializer(popularmovies,many=True) 
        movie_data.extend(serializer.data)

        for data in popularmovies:
            if not data.get('release_data'):continue
            PopularMovies.objects.create(
                title=data['title'],
                release_date=data['release_date'],
                popularity=data['popularity'],
                vote_count=data['vote_count'],
                vote_average=data['vote_average'],
                overview=data['overview'],
                poster_path=data['poster_path'],
            )
    
    return Response(movie_data)