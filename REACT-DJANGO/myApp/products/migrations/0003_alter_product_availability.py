# Generated by Django 3.2.7 on 2021-10-07 07:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_product_quantity'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='availability',
            field=models.BooleanField(),
        ),
    ]