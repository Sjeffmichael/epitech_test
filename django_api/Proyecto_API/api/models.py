from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

# class User(AbstractUser):
#     username = models.CharField('Username', max_length=100, null=False, blank=False, unique=True)
#     password = models.CharField('Password', max_length=100, null=False, blank=False)

#     class Meta:
#         verbose_name = 'User'
#         verbose_name_plural = 'Users'

class Company(models.Model):
    name = models.CharField(max_length=50)
    website = models.URLField(max_length=100)
    foundation = models.PositiveIntegerField()

    class Meta:
      verbose_name = 'Company'
      verbose_name_plural = 'Companies'
