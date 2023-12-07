# Generated by Django 5.0 on 2023-12-07 15:09

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('journal', '0006_training'),
    ]

    operations = [
        migrations.CreateModel(
            name='Attendance',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_paid', models.BooleanField()),
                ('training', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='training', to='journal.training')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='training',
            name='users',
            field=models.ManyToManyField(through='journal.Attendance', to=settings.AUTH_USER_MODEL),
        ),
    ]
