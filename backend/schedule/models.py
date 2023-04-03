from django.db import models
from authentication.models import User

# Create your models here.

class Schedule(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=250)
