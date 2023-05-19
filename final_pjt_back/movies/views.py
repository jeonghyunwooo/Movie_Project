from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PopularMoviesSerializer, TopRatedMoviesSerializer, TotalMoviesSerializer
from .models import TotalMovies
from final_pjt_back.settings import API_SETTINGS
from django.http import JsonResponse
import json
import requests
import pprint

api_key = API_SETTINGS['API_KEY']
tmdb_popular_api = API_SETTINGS['TMDB_POPULAR_API']
tmdb_top_rated_api = API_SETTINGS['TMDB_TOP_RATED_API']

@api_view(['GET'])
def get_total_movies(request):

    nums = range(1,300)
    for num in nums:
        try:
            video_url = f'https://api.themoviedb.org/3/movie/{num}/videos?api_key={api_key}&language=ko-KR'
            video = requests.get(video_url).json()
            if video['results']:
                video_id = video['results'][0]['key']

                url = f'https://api.themoviedb.org/3/movie/{num}?api_key={api_key}&language=ko-KR'
                data  = requests.get(url).json()
                movie_id = data['id']
                title = data['title']
                release_date = data['release_date']
                overview = data['overview']
                poster_path = data['poster_path']
                vote_average = data['vote_average']
                popularity = data['popularity']
                runtime = data['runtime']
                genre_list = data['genres']
                genres = []
                
                for genre in genre_list:
                    genres.append(genre['name'])
                    
                TotalMovies.objects.create(
                    title=title,
                    movie_id = movie_id,
                    release_date = release_date,
                    overview = overview,
                    poster_path = poster_path,
                    vote_average = vote_average,
                    popularity = popularity,
                    runtime = runtime,
                    genres = genres,
                    video_id = video_id, 
                )
            else:
                pass
        except:
            pass
    return JsonResponse(data)


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