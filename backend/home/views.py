from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from .serializers import QuestionReadSerializer, QuestionWriteSerializer
from .models import Question

# Create your views here.
class QuestionView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
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
