from rest_framework import serializers
from .models import Product

class ProudctSerializers(serializers.ModelSerializer):

    class Meta:
        model = Product 
        fields = ('id', 'name', 'price', 'availability', 'quantity')
