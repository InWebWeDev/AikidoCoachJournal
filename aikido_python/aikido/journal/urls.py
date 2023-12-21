from django.urls import path, include

urlpatterns = [
    path('v1/', include('journal.v1.urls')),
    path('v2/', include('journal.v2.urls')),
]