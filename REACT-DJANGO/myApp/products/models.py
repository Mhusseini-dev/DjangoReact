from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=20)
    price = models.IntegerField()
    availability= models.BooleanField()
    quantity = models.IntegerField(default = 50)
    
    def __str__(self):
        return self.name

