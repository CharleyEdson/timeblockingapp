from django.db import models
from authentication.models import User
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.

class Timeblock(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    activity = models.CharField(max_length=240)
    length = models.PositiveIntegerField(validators=[MinValueValidator(15), MaxValueValidator(720)])
    start_time = models.TimeField()