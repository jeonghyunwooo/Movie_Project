from rest_framework import serializers
from .models import PopularMovies

class PopularMoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopularMovies
        fields = '__all__'