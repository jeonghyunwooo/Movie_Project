from django.shortcuts import get_object_or_404, get_list_or_404
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import PopularMoviesSerializer, TopRatedMoviesSerializer, TotalMoviesSerializer
from .serializers import MovieCommentSerializer
from .models import TotalMovies, PopularMovies, TopRatedMovies
from .models import MovieGenres, MovieComment
from final_pjt_back.settings import API_SETTINGS
import json
import requests
import pprint

# api_key = API_SETTINGS['API_KEY']
api_key = '3e522bb11d9503474e85e9a710de1de4'
TMDB_MOVIES_POPULAR_API= f'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&sort_by=popularity.desc&api_key={api_key}&language=ko-KR'
TMDB_MOVIES_TOP_RATED_API= f'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key={api_key}&language=ko-KR'

TMDB_GENRES_MOVIES=f'https://api.themoviedb.org/3/genre/movie/list?&api_key={api_key}&language=ko-KR'

# TMDB/MOVIES/Details의 영화데이터 가져오기
@api_view(['GET'])
def save_total_movies(request):
    nums = range(1,500)
    for num in nums:
        try:
            TMDB_MOVIES_VIDEOS_API = f'https://api.themoviedb.org/3/movie/{num}/videos?api_key={api_key}&language=ko-KR'
            video = requests.get(TMDB_MOVIES_VIDEOS_API).json()
            if video['results']:
                video_id = video['results'][0]['key']
                TMDB_MOVIES_DETAIL_API = f'https://api.themoviedb.org/3/movie/{num}?api_key={api_key}&language=ko-KR'
                data  = requests.get(TMDB_MOVIES_DETAIL_API).json()
                adult = data['adult']
                backdrop_path = data['backdrop_path']
                budget = data['budget']
                movie_id = data['id']
                original_title = data['original_title']
                overview = data['overview']
                popularity = data['popularity']
                poster_path = data['poster_path']
                release_date = data['release_date']
                revenue = data['revenue']
                runtime = data['runtime']
                status = data['status']
                tagline = data['tagline']
                title = data['title']
                vote_average = data['vote_average']
                vote_count = data['vote_count']
                genre_list = data['genres']
                genres = []
                
                for genre in genre_list:
                    genres.append(genre['name'])
                    
                TotalMovies.objects.create(
                    adult = adult,
                    backdrop_path = backdrop_path,
                    budget = budget,
                    genres = genres,
                    movie_id = movie_id,
                    original_title = original_title,
                    overview = overview,
                    popularity = popularity,
                    poster_path = poster_path,
                    release_date = release_date,
                    revenue = revenue,
                    runtime = runtime,
                    status = status,
                    tagline = tagline,
                    title = title,
                    video_id = video_id, 
                    vote_average = vote_average,
                    vote_count = vote_count,
                )
            else:
                pass
        except:
            pass
    return JsonResponse(data)

# DB의 전체 영화데이터 가져오기
@api_view(['GET'])
def get_total_movies(request):
    movies = get_list_or_404(TotalMovies)
    serializer = TotalMoviesSerializer(movies, many=True)
    return Response(serializer.data)

# TMDB/MOVIES/Popular의 영화데이터 가져오기
@api_view(['GET'])
def get_popular_movies(request):
    movie_data = []
    for i in range(1,2):
        response = requests.get(TMDB_MOVIES_POPULAR_API,params={'page' : i,}).json()
        popularmovies = response.get('results')
        serializer = PopularMoviesSerializer(popularmovies,many=True) 
        movie_data.extend(serializer.data)    
    return Response(movie_data)

# TMDB/MOVIES/Top_rated의 영화데이터 가져오기
@api_view(['GET'])
def get_top_rated_movies(request):
    movie_data = []
    for i in range(1,2):
        response = requests.get(TMDB_MOVIES_TOP_RATED_API,params={'page' : i,}).json()
        topratedmovies = response.get('results')
        serializer = TopRatedMoviesSerializer(topratedmovies,many=True) 
        movie_data.extend(serializer.data)    
    return Response(movie_data)

# TMDB/GENRES/Movie의 영화 장르 데이터 가져오기
def save_movie_genres(request):
    response = requests.get(TMDB_GENRES_MOVIES).json()
    for genre in response.get('genres'):
        if MovieGenres.objects.filter(pk=genre['id']).exists():continue
        MovieGenres.objects.create(
            id = genre['id'],
            name = genre['name'],
        )
    return JsonResponse(response)

# 각 영화에 대한 댓글 작성
@api_view(['POST'])
def comment_create(request, movie_id):
    movie_id = get_object_or_404(TotalMovies, pk=movie_id)
    serializer = MovieComment(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(movie_id=movie_id)
        return Response(serializer.data, status=status.HTTP_201_CREATED)