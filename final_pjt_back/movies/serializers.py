from rest_framework import serializers
from .models import TotalMovies, PopularMovies, TopRatedMovies
from .models import MovieComment

# 영화 전체
class TotalMoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TotalMovies
        fields = '__all__'

# 영화 인기순
class PopularMoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopularMovies
        fields = '__all__'

# 영화 평점 높은순
class TopRatedMoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TopRatedMovies
        fields = '__all__'

# 각 영화에 대한 댓글
class MovieCommentSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)
    
    class Meta:
        model = MovieComment
        fields  = '__all__'
        read_only_fields = ('movie','user')