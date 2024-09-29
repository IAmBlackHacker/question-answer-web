import json

from django.contrib import auth
from django.contrib.auth import authenticate
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.http import HttpResponse, JsonResponse
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import QuestionReadSerializer, QuestionWriteSerializer, CustomTokenObtainSerializer
from .models import Question, User


# Create your views here.
class QuestionView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication, JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        questions = Question.objects.all()

        serializer = QuestionReadSerializer(questions, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        question_user = request.user.user

        serializer = QuestionWriteSerializer(data=request.data.copy())
        serializer.is_valid(raise_exception=True)
        serializer.save(user=question_user)
        return  Response(serializer.data, status=status.HTTP_201_CREATED)

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainSerializer


# def login(request):
#     if request.method == 'POST':
#         json_data = json.loads(request.body)
#         username  = json_data.get('username')
#         password = json_data.get('password')
#         user = authenticate(username=username, password=password)
#
#         if user is not None:
#             return JsonResponse({
#                 'status': 'SUCCESS',
#                 'message': 'authentication successful',
#                 'request': str(request.session)
#             })
#
#     return JsonResponse({
#         'status': 'FAILURE',
#         'message': 'Incorrect username or password'
#     })

# @receiver(post_save,sender=auth.models.User)
# def create_user_profile(sender,instance, created, **kwargs):
#     if created: # First time login via gmail account ...
#         User.objects.create(user=instance)
#         if instance.is_authenticated: # set user as active as it is directly login via gmail ...
#             instance.user.active=True
#     elif instance.id: # If User Alredy exist then here create new one one relation between user and User
#         try:
#             auth.models.User.objects.get(id=instance.id).user
#         except:
#             User.objects.create(user=instance)
#
# @receiver(post_save,sender=auth.models.User)
# def save_user_profile(sender,instance,**kwargs):
#     instance.user.save()
