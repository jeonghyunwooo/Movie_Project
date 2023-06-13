from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import get_object_or_404, get_list_or_404
from .serializers import ReviewListSerializer
from .models import Review



@api_view(['GET', 'POST'])
def review_list(request):
    if request.method == 'POST':
        serializer = ReviewListSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data,status=status.HTTP_201_CREATED)

    elif request.method == 'GET':
        reviews = get_list_or_404(Review)
        serializer = ReviewListSerializer(reviews, many=True)
        return Response(serializer.data)         


@api_view(['GET', 'DELETE', 'PUT'])
def review_detail(request, review_pk):
    # review = Review.objects.get(pk=reviews_pk)
    review = get_object_or_404(Review, pk=review_pk)

    if request.method == 'GET':
        serializer = ReviewListSerializer(review)
        return Response(serializer.data)
    
    elif request.method == 'DELETE':
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    elif request.method == 'PUT':
        serializer = ReviewListSerializer(review, data=request.data)
        print('---------------------------------')
        print(serializer)
        print('---------------------------------')
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)