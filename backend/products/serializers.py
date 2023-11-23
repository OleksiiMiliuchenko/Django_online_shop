from rest_framework.serializers import ModelSerializer

from .models import Product


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = [
            "id", "name", "description", "quantity", "price", "user_id", "category_id", "created_at", "modified_at",
        ]
