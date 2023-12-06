from django.db import models


class Product(models.Model):
    name = models.CharField(128)
    description = models.TextField(default=None)
    quantity = models.IntegerField()
    price = models.FloatField()
    user = models.ForeignKey("auth.User", on_delete=models.CASCADE)
    # user = models.ForeignKey("users.CustomUser", on_delete=models.CASCADE)
    category_id = models.IntegerField(default=None)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Id: {self.id}, name: {self.name}"
