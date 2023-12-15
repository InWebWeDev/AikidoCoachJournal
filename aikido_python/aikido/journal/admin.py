from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import *


class JournalUserAdmin(UserAdmin):
    model = User


class TrainingAdmin(admin.ModelAdmin):
    model = Training


class AttendanceAdmin(admin.ModelAdmin):
    model = Attendance

# Register your models here.
admin.site.register(User, JournalUserAdmin)
# admin.site.register(User, UserAdmin)
admin.site.register(Training, TrainingAdmin)
admin.site.register(Attendance, AttendanceAdmin)
