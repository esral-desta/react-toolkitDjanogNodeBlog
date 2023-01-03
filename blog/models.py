from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=50 , blank=True,null=True)
    body = models.TextField(blank=True,null=True)
    writer = models.ForeignKey(User, on_delete=models.SET_NULL,blank=True,null=True)
    createdAt = models.DateTimeField(auto_now_add=True,blank=True,null=True)

    def __str__(self):
        return self.title