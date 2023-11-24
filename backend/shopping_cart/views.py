from ninja import NinjaAPI, Schema

from shopping_cart.models import ShoppingCart
from django.contrib.auth.models import User
from products.models import Product

router = NinjaAPI()


class ShoppingCartModel(Schema):
    user_id: int
    product_id: int
    quantity: int


@router.get("", response=list[ShoppingCartModel])
def get_cart_items(request):
    cart_items = ShoppingCart.objects.all()
    return cart_items


@router.post("add")
def add_cart_item(request, item: ShoppingCartModel):
    cart_item = ShoppingCart.objects.create(
        user_id=User.objects.get(id=item.user_id),
        product_id=Product.objects.get(id=item.product_id),
        quantity=item.quantity,
    )
    return {"response": 200}
