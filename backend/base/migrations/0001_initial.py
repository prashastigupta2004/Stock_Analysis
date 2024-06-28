# Generated by Django 4.2.4 on 2024-06-27 05:56

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="STOCKS_DATA",
            fields=[
                ("stock_id", models.TextField(primary_key=True, serialize=False)),
                ("symbol", models.TextField()),
                ("Open", models.FloatField()),
                ("Close", models.FloatField()),
                ("High", models.FloatField()),
                ("Low", models.FloatField()),
                ("Volume", models.FloatField()),
                ("date", models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name="STOCKS_DATA1",
            fields=[
                ("stock_id", models.TextField(primary_key=True, serialize=False)),
                ("symbol", models.TextField()),
            ],
        ),
    ]
