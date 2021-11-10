from django.db import models

class Agents(models.Model):
    first_name = models.CharField(max_length=30,blank=True)
    last_name = models.CharField(max_length=30,blank=True)
    age = models.IntegerField(blank=True)