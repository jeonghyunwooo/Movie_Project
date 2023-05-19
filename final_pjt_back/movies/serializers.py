from rest_framework import serializers
from .models import TotalMovies, PopularMovies, TopRatedMovies

class TotalMoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TotalMovies
        fields = '__all__'

class PopularMoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopularMovies
        fields = '__all__'

class TopRatedMoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = TopRatedMovies
        fields = '__all__'