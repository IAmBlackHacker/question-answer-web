from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, AuthUser
from rest_framework_simplejwt.tokens import Token

from .models import Question, Answer

class AnswerReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ['answer', 'creation_date']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Convert creation_date to milliseconds
        representation['creation_date'] = int(instance.creation_date.timestamp() * 1000)
        return representation

class QuestionReadSerializer(serializers.ModelSerializer):
    answers = AnswerReadSerializer(many=True, read_only=True, source="answer_set")

    class Meta:
        model = Question
        fields = ['title', 'question', 'user', 'answers', 'creation_date']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        # Convert creation_date to milliseconds
        representation['creation_date'] = int(instance.creation_date.timestamp() * 1000)
        representation['user'] = instance.user.user.first_name + ' ' + instance.user.user.last_name
        sorted_answers = instance.answer_set.order_by('creation_date')
        representation['answers'] = AnswerReadSerializer(sorted_answers, many=True).data

        return representation

class QuestionWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['title', 'question']

class CustomTokenObtainSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user: AuthUser) -> Token:
        token = super().get_token(user)
        return token

    def validate(self, attrs):
        data = super().validate(attrs)

        data['username'] = self.user.first_name + ' ' + self.user.last_name
        return data
