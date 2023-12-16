from django.shortcuts import render
from rest_framework import viewsets, mixins
from rest_framework import permissions
from . import custom_permissions



from .serializers import *


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    lookup_field = 'username'
    def get_permissions(self):
        if self.action == 'list':
            self.permission_classes = (permissions.IsAdminUser, )
        else:
            self.permission_classes = (custom_permissions.IsProfileOwner,)
        return super(self.__class__, self).get_permissions()
