from django.shortcuts import get_object_or_404
from rest_framework import serializers
from ..models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class LimitedUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'first_name',
            'last_name',
            'third_name',
            'phone_number',
            'email',
            'birth_date',
            'groups'
        ]


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)


class TrainingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Training
        fields = '__all__'


class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendance
        fields = '__all__'

    def create(self, validated_data):
        training = validated_data.get('training')
        attendance = Attendance.objects.create(date=training.date, **validated_data)
        return attendance


class GroupSerializer(serializers.ModelSerializer):
    users = LimitedUserSerializer(many=True, read_only=True)

    class Meta:
        model = Group
        fields = ['id', 'name', 'users', 'permissions']

