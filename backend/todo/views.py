from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Todo
from .serializers import TodoSerializer
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the homepage!")

@api_view(['GET'])
def list_todos(request):
    todos = Todo.objects.all()
    serializer = TodoSerializer(todos, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_todo(request):
    print("Received POST data:", request.data) 
    
   
    data = request.data.copy()
    if 'description' not in data:
        data['description'] = ""  
    
    serializer = TodoSerializer(data=data)
    if serializer.is_valid():
        todo = serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        print("Validation errors:", serializer.errors)
        return Response({
            'error': 'Validation failed',
            'details': serializer.errors,
            'expected_fields': ['title', 'description (optional)', 'completed (optional)']
        }, status=status.HTTP_400_BAD_REQUEST)