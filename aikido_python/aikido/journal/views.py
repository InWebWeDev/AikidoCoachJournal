from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets, mixins
from rest_framework import generics
from rest_framework import permissions
from . import custom_permissions



from .serializers import *


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAdminUser, )


class LimitedUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = LimitedUserSerializer
    lookup_field = 'username'

    def get_permissions(self):
        if self.action == 'list':
            self.permission_classes = (permissions.IsAdminUser, )
        else:
            self.permission_classes = (custom_permissions.IsProfileOwner,)
        if self.request.user.is_superuser:
            self.serializer_class = UserSerializer
        return super(self.__class__, self).get_permissions()


class TrainingOfDayView(generics.ListAPIView):
    def get(self, request, *args, **kwargs):
        trainings = Training.objects.filter(date=kwargs['date'])
        serializer = TrainingSerializer(trainings, many=True)
        return Response(serializer.data)


class TrainingViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.IsAdminUser, )
    queryset = Training.objects.all()
    serializer_class = TrainingSerializer


class AttendancesViewSet(viewsets.ModelViewSet):
    queryset = Attendance.objects.all()
    permission_classes = (permissions.IsAdminUser, )
    serializer_class = AttendanceSerializer


class UserTrainingView(generics.ListAPIView):
    queryset = Training.objects.all()
    permission_classes = (permissions.IsAuthenticated, )

    def get(self, request, *args, **kwargs):
        user = User.objects.get(username=kwargs['username'])
        groups = user.groups.all()
        trainings = []
        for group in groups:
            trainings.extend(Training.objects.filter(group=group.pk))
        serializer = TrainingSerializer(trainings, many=True)
        return Response(serializer.data)


class MyAttendancesView(generics.ListAPIView):
    queryset = Attendance.objects.all()
    permission_classes = (permissions.IsAuthenticated, )

    def get(self, request, *args, **kwargs):
        attendances = Attendance.objects.filter(user=request.user)
        params = request.query_params
        print(params)
        if 'date_from' in params:
            attendances = attendances.filter(date__gte=params['date_from'])
        if 'date_to' in params:
            attendances = attendances.filter(date__lte=params['date_to'])
        serializer = AttendanceSerializer(attendances, many=True)
        return Response(serializer.data)


class UserAttendancesView(generics.ListAPIView):
    queryset = Attendance.objects.all()
    permission_classes = (permissions.IsAdminUser, )

    def get(self, request, *args, **kwargs):
        attendances = Attendance.objects.filter(user=kwargs['user_pk'])
        params = request.query_params
        print(params)
        if 'date_from' in params:
            attendances = attendances.filter(date__gte=params['date_from'])
        if 'date_to' in params:
            attendances = attendances.filter(date__lte=params['date_to'])
        serializer = AttendanceSerializer(attendances, many=True)
        return Response(serializer.data)


class GroupUsersView(generics.ListAPIView):
    serializer_class = LimitedUserSerializer

    def get_queryset(self):
        return User.objects.filter(groups=self.kwargs['group_id'])





