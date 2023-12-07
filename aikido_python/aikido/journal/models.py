from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    phone_number = models.BigIntegerField(null=True, verbose_name='Номер телефона')
    third_name = models.CharField(max_length=100, verbose_name='Отчество', blank=True)
