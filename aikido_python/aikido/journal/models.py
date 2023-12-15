from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser, Group


class User(AbstractUser):
    phone_number = models.BigIntegerField(null=True, verbose_name='Номер телефона')
    third_name = models.CharField(max_length=100, verbose_name='Отчество', blank=True)


class Training(models.Model):
    date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    price = models.BigIntegerField()
    group = models.ForeignKey(Group, related_name='answers', on_delete=models.CASCADE)
    users = models.ManyToManyField(User, through='Attendance')


class Attendance(models.Model):
    user = models.ForeignKey(User, related_name='user', on_delete=models.CASCADE)
    training = models.ForeignKey(Training, related_name='training', on_delete=models.CASCADE)
    is_paid = models.BooleanField()
