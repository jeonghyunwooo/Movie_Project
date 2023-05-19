from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PopularMoviesSerializer, TopRatedMoviesSerializer, TotalMoviesSerializer
from .models import TotalMovies
from final_pjt_back.settings import API_SETTINGS
from django.http import JsonResponse
import requests
import pprint
import json

api_key = API_SETTINGS['API_KEY']
tmdb_popular_api = API_SETTINGS['TMDB_POPULAR_API']
tmdb_top_rated_api = API_SETTINGS['TMDB_TOP_RATED_API']

@api_view(['GET'])
def get_total_movies(request):
    for movie_id in range(1,50):
        try:
            tmdb_total_api = f'https://api.themoviedb.org/3/movie/{movie_id}'
            response = requests.get(
                tmdb_total_api,
                params={
                    'api_key' : api_key,
                    'language' : 'ko-kR',
                    }
            ).json()
            
            title = response['title'],
            movie_id = response['id'],
            release_date = response['release_date'],
            overview = response['overview'],
            poster_path = response['poster_path'],
            vote_average = response['vote_average'],
            popularity = response['popularity'],
            youtube_key = response['youtube_key'],
            runtime = response['runtime'],
            genre_list = response['genres']
            genres = []
            
            for genre in genre_list:
                genres.append(genre['name'])

            TotalMovies.objects.create(
                title=title,
                movie_id=movie_id,
                release_date=release_date,
                overview =overview,
                poster_path =poster_path,
                vote_average =vote_average,
                popularity=popularity,
                youtube_key=youtube_key,
                runtime=runtime,
                genres=genres,
            )
        except:
            pass
    return JsonResponse(response)

# Popular_movie_data정보를 TMDB에서 받아오는 code
@api_view(['GET'])
def get_popular_movies(request):
    movie_data = []
    for i in range(1,2):
        response = requests.get(
            tmdb_popular_api,
            params={
                'api_key' : api_key,
                'language' : 'ko-kR',
                'page' : i,
            }
        ).json()
        popularmovies = response.get('results')
        serializer = PopularMoviesSerializer(popularmovies,many=True) 
        movie_data.extend(serializer.data)    
    return Response(movie_data)


# Top_rated_movie_data정보를 TMDB에서 받아오는 code
@api_view(['GET'])
def get_top_rated_movies(request):
    movie_data = []
    for i in range(1,2):
        response = requests.get(
            tmdb_top_rated_api,
            params={
                'api_key' : api_key,
                'language' : 'ko-kR',
                'page' : i,
            }
        ).json()
        topratedmovies = response.get('results')
        serializer = TopRatedMoviesSerializer(topratedmovies,many=True) 
        movie_data.extend(serializer.data)    
    return Response(movie_data)