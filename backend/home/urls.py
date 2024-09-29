from django.urls import path, include
from . import views

urlpatterns = [
    path('question', views.QuestionView.as_view(), name="question"),
    # path('login', views.login, name="login")
]
