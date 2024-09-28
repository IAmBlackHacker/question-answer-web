from django.db import models
from django.contrib.auth.models import User as DjangoUser
from datetime import datetime, timedelta

class User(models.Model):
    user = models.OneToOneField(DjangoUser, on_delete=models.CASCADE)
    profile_image = models.ImageField(upload_to='home/static/images/profile', default='home/static/images/profile/default.png')

    def __str__(self):
        return f"{self.user.first_name} [{self.user.username}]"

class Question(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.CharField(max_length=100, blank=False, null=False)
    creation_date = models.DateTimeField(default=datetime.now)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.question

class Answer(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    answer = models.CharField(max_length=400, blank=False, null=False)
    creation_date = models.DateTimeField(default=datetime.now)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.answer
