from django.http.response import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Product
from .serializers import *

@api_view(['GET', 'POST'])
def product_list(request):
    if request.method == 'GET':
        data = Product.objects.all()

        serializer = ProudctSerializers(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ProudctSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def product_details(request, id):
    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = ProudctSerializers(product, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        Product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

            
@api_view(['GET'])
def get_item(request, id):
    if request.method == 'GET':
        this_product = Product.objects.get(id = id)
        serializer = ProudctSerializers(this_product, context={'request': request})
    return Response(serializer.data)

@api_view(['PUT'])
def update_item(request, id):
    if request.method =='PUT':
        product_to_update = Product.objects.get(id = id)
        product_to_update.quantity = product_to_update.quantity -1
        if product_to_update.quantity < 0:
            return HttpResponse("exceeded a set number")
        product_to_update.save()
        serializer = ProudctSerializers(product_to_update, context={'request': request})
        return Response(serializer.data)

        