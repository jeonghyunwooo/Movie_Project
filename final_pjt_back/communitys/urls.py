from django.urls import path
from . import views

app_name = 'communitys'
urlpatterns = [
    path('reviews/', views.review_list),
]
