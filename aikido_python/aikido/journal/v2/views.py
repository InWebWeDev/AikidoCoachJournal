from django.contrib.auth import update_session_auth_hash
from django.db.models import QuerySet
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import viewsets, mixins, status, generics, permissions

from . import custom_permissions

from .serializers import *


class LimitedUserViewSet(
    viewsets.GenericViewSet,
    mixins.ListModelMixin,
    mixins.UpdateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.DestroyModelMixin
):
    queryset = User.objects.all()
    serializer_class = LimitedUserSerializer
    lookup_field = 'username'
    permission_classes = (custom_permissions.IsProfileOwner, )

    def get_permissions(self):
        if self.action in ['list', 'create']:
            self.permission_classes = (permissions.IsAdminUser, )
        if self.request.user.is_superuser:
            self.serializer_class = UserSerializer
        return super(self.__class__, self).get_permissions()


@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def change_password(request):
    if request.method == 'POST':
        serializer = ChangePasswordSerializer(data=request.data)
        if serializer.is_valid():
            user = request.user
            if user.check_password(serializer.data.get('old_password')):
                user.set_password(serializer.data.get('new_password'))
                user.save()
                update_session_auth_hash(request, user)  # To update session after password change
                return Response({'message': 'Password changed successfully.'}, status=status.HTTP_200_OK)
            return Response({'error': 'Incorrect old password.'}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
        if 'user' in params:
            user = User.objects.get(username=params['user'])
            groups = user.groups.all()
            queryset = queryset.filter(group__in=groups)

        return queryset


class AttendancesViewSet(viewsets.ModelViewSet):
    serializer_class = AttendanceSerializer

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
            queryset = Attendance.objects.all()
        else:
            queryset = Attendance.objects.filter(user=user)

        params = self.request.query_params
        if 'date_from' in params:
            queryset = queryset.filter(date__gte=params['date_from'])
        if 'date_to' in params:
            queryset = queryset.filter(date__lte=params['date_to'])
        if 'user' in params:
            user = User.objects.get(username=params['user'])
            queryset = queryset.filter(user=user)

        return queryset


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            self.permission_classes = (permissions.IsAuthenticated, )
        else:
            self.permission_classes = (
                permissions.IsAdminUser,
                custom_permissions.IsStaff
            )
        return super(self.__class__, self).get_permissions()

    def retrieve(self, request, *args, **kwargs):
        group = self.get_object()
        users = User.objects.filter(groups=self.kwargs['pk'])
        group_serializer = GroupSerializer(group)
        user_serializer = LimitedUserSerializer(users, many=True)
        response = group_serializer.data
        response['users'] = user_serializer.data
        return Response(response)
