from django.db.models import QuerySet
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import generics
from rest_framework import permissions
from . import custom_permissions

from .serializers import *


class LimitedUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = LimitedUserSerializer
    lookup_field = 'username'
    permission_classes = (custom_permissions.IsProfileOwner, )

    def get_permissions(self):
        if self.action == 'list':
            self.permission_classes = (permissions.IsAdminUser, )
        if self.request.user.is_superuser:
            self.serializer_class = UserSerializer
        return super(self.__class__, self).get_permissions()


class TrainingViewSet(viewsets.ModelViewSet):
    serializer_class = TrainingSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            self.permission_classes = (permissions.IsAuthenticated, )
        else:
            self.permission_classes = (
                permissions.IsAdminUser,
                custom_permissions.IsStaff
            )
        return super(self.__class__, self).get_permissions()

    def get_queryset(self):
        user = self.request.user
        is_authority = user.is_superuser or user.is_staff
        if is_authority:
            queryset = Training.objects.all()
        else:
            groups = user.groups.all()
            queryset = Training.objects.filter(group__in=groups)

        params = self.request.query_params
        if 'date_from' in params:
            queryset = queryset.filter(date__gte=params['date_from'])
        if 'date_to' in params:
            queryset = queryset.filter(date__lte=params['date_to'])
        if 'group' in params:
            queryset = queryset.filter(group=params['group'])
        if 'user' in params and is_authority:
            user = User.objects.get(username=params['user'])
            groups = user.groups.all()
            queryset = queryset.filter(group__in=groups)

        return queryset


class AttendancesViewSet(viewsets.ModelViewSet):
    queryset = Attendance.objects.all()
    permission_classes = (permissions.IsAdminUser, )
    serializer_class = AttendanceSerializer









