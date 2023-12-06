from django.urls import path
from .views import ProductListView, ProductRetrieveView, ProductCreateView, ProductDetailsView

urlpatterns = [
    path("", ProductListView.as_view()),
    path("<int:pk>", ProductRetrieveView.as_view()),
    path("create/", ProductCreateView.as_view()),
    path("details/<int:pk>", ProductDetailsView.as_view()),
]
