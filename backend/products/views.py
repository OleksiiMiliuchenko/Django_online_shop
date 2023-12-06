from django.core.exceptions import FieldError
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

from rest_framework.generics import RetrieveAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from .models import Product
from .serializers import ProductSerializer


class ProductListView(APIView, PageNumberPagination):

    def get(self, request, format=None):
        try:
            query = request.GET
            filter_statement = dict(map(
                lambda statement: statement.split(":"),
                query.getlist("filter[]")
            ))
            sort_statement = query.getlist("sort[]")

            products = Product.objects.filter(**filter_statement).order_by(*sort_statement).all()
            paginated_products = self.paginate_queryset(products, request)
            serializer = ProductSerializer(paginated_products, many=True)
            response = self.get_paginated_response(serializer.data)

            return response

        except FieldError:
            return Response("No model field with such name", status.HTTP_400_BAD_REQUEST)


# class ProductListView(ListAPIView):
#     serializer_class = ProductSerializer
#
#     def get_queryset(self):
#         query = self.request.GET
#
#         filter_statement = dict(map(
#             lambda statement: statement.split(":"),
#             query.getlist("filter[]")
#         ))
#         sort_statement = query.getlist("sort[]")
#
#         return Product.objects.filter(**filter_statement).order_by(*sort_statement).all()


class ProductRetrieveView(RetrieveAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class ProductCreateView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


class ProductDetailsView(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ProductSerializer

    def get_queryset(self):
        return Product.objects.filter(user_id=self.request.user.id)
