from django.urls import path, include
from rest_framework import routers

from .views import *

router = routers.DefaultRouter()
router.register(r'users', LimitedUserViewSet, basename='User')
router.register(r'trainings', TrainingViewSet, basename='Training')
router.register(r'attendances', AttendancesViewSet, basename='Attendance')
router.register(r'groups', GroupViewSet, basename='Group')

urlpatterns = [
    path('', include(router.urls)),

]
