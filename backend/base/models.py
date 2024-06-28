from django.db import models




# Create your models here.
class STOCKS_DATA(models.Model):
    stock_id = models.TextField(primary_key=True)
    symbol = models.TextField()
    Open = models.FloatField()
    Close = models.FloatField()
    High = models.FloatField()
    Low = models.FloatField()
    Volume = models.FloatField()
    date = models.TextField()

    def __str__(self):
        return f"{self.symbol} - {self.date}"
    
class STOCKS_DATA1(models.Model):
    stock_id = models.TextField(primary_key=True)
    symbol = models.TextField()

    def __str__(self):
        return f"{self.symbol} - {self.date}"