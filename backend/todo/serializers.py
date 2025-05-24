from rest_framework import serializers
from .models import Todo

class TodoSerializer(serializers.ModelSerializer):
  
    description = serializers.CharField(max_length=600, required=False, allow_blank=True, default="")
    
    class Meta:
        model = Todo
        fields = "__all__"
    
    def create(self, validated_data):
        
        if 'description' not in validated_data:
            validated_data['description'] = ""
        return super().create(validated_data)