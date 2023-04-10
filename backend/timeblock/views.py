from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Timeblock
from .serializers import TimeblockSerializer
from django.shortcuts import get_object_or_404

from timeblock import serializers

# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def activities_list(request):
    if request.method == 'GET':
        activities = Timeblock.objects.filter(user_id=request.user.id).order_by('time_start')
        serializer = TimeblockSerializer(activities, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = TimeblockSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['PUT', 'DELETE', 'PATCH'])
@permission_classes([IsAuthenticated])
def activities_edits(request,pk):
    timeblock = get_object_or_404(Timeblock,pk=pk)
    if request.method == 'PUT':
        serializer = TimeblockSerializer(timeblock, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'PATCH':
        serializer = TimeblockSerializer(timeblock, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        timeblock.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)