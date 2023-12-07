from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .models import User


# class JournalUserAdmin(UserAdmin):
#     model = User
#     list_display = ()


# Register your models here.
admin.site.register(User, UserAdmin)
