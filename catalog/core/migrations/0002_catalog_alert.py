# Generated by Django 3.0.5 on 2020-05-16 01:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='catalog',
            name='alert',
            field=models.TextField(blank=True, null=True, verbose_name='Alerta'),
        ),
    ]