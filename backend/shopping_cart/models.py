from django.db import models


class ShoppingCart(models.Model):
    user_id = models.ForeignKey("User", on_delete=models.CASCADE)
    product_id = models.ForeignKey("Product", on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
