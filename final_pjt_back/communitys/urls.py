from django.urls import path
from . import views

app_name = 'communitys'
urlpatterns = [
    path('reviews/', views.review_list),
    path('reviews/<int:review_pk>/',views.review_detail)
]
