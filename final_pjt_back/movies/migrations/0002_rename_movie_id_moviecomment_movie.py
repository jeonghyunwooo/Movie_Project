# Generated by Django 3.2.18 on 2023-05-23 12:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='moviecomment',
            old_name='movie_id',
            new_name='movie',
        ),
    ]
