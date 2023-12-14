from rest_framework.serializers import ModelSerializer, HiddenField, CurrentUserDefault

from .models import Product


class ProductSerializer(ModelSerializer):
    user = HiddenField(default=CurrentUserDefault())

    class Meta:
        model = Product
        fields = [
            "id", "name", "description", "quantity", "price", "user", "category_id", "created_at",
        ]
