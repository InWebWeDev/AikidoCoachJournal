from django.urls import path, include
from rest_framework import routers

from .views import *

router = routers.DefaultRouter()
router.register(r'users', LimitedUserViewSet, basename='Users')
router.register(r'trainings/control', TrainingViewSet, basename='Trainings')
router.register(r'attendances', AttendancesViewSet, basename='Attendances')


urlpatterns = [
    path('', include(router.urls)),
]
