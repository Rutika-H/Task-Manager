from django.urls import path
from .views import list_todos,add_todo
from rest_framework.routers import DefaultRouter

urlpatterns = [
   
    path('todos/', list_todos, name='list_todos'),
    
   
    path('todos/add/', add_todo, name='add_todo'),
]