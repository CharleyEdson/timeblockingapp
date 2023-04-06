from django.db import models
from authentication.models import User

# Create your models here.

class Timeblock(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=240)
    time = models.IntegerField()
    is_active = models.BooleanField()