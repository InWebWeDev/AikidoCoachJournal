from django.urls import path, include
from rest_framework import routers

from .views import *

router = routers.DefaultRouter()
router.register(r'users', LimitedUserViewSet, basename='Users')
router.register(r'trainings/control', TrainingViewSet, basename='Trainings')
router.register(r'attendances', AttendancesViewSet, basename='Attendances')


urlpatterns = [
    path('', include(router.urls)),
    path('group/<int:group_id>/users/', GroupUsersView.as_view()),
    path('trainings/', TrainingListView.as_view()),
    path('trainings/user/<str:username>/', UserTrainingView.as_view()),
    path('attendances/user/<int:user_pk>/', UserAttendancesView.as_view()),
    path('my-attendances/', MyAttendancesView.as_view()),
]
