from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView

from . import views
from .views import CustomTokenObtainPairView

urlpatterns = [
    path('question', views.QuestionView.as_view(), name="question"),
    path('auth/token', CustomTokenObtainPairView.as_view(), name='login'),
    path('auth/token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    # path('login', views.login, name="login")
]
