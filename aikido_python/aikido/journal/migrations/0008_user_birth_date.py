# Generated by Django 5.0 on 2023-12-16 15:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('journal', '0007_attendance_training_users'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='birth_date',
            field=models.DateField(null=True),
        ),
    ]
