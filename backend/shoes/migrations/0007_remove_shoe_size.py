# Generated by Django 4.1.5 on 2023-02-18 18:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shoes', '0006_shoe_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='shoe',
            name='size',
        ),
    ]
