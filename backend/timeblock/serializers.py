from rest_framework import serializers
from .models import Timeblock

class TimeblockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Timeblock
        fields = ['id', 'activity', 'length', 'start_time']