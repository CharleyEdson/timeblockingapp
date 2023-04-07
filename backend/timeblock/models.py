from django.db import models
from authentication.models import User

# Create your models here.

class Timeblock(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    activity = models.CharField(max_length=240)
    time_start = models.CharField(max_length=240)
    time_end = models.CharField(max_length=240)