from django.contrib import admin
from django.urls import path, re_path
from products import views
from django.conf.urls import url

urlpatterns = [
    path('api/product/<int:id>', views.get_item),
    path('api/products/<int:id>', views.product_details),
    path('api/productsU/<int:id>',views.update_item),
    path('api/products/createget', views.product_list)
]
