from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .views import LogoutView, RegisterView, CookieTokenObtainPairView, CookieTokenRefreshView

urlpatterns = [
    path("token/", CookieTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", CookieTokenRefreshView.as_view(), name="token_refresh"),
    path("register/", RegisterView.as_view(), name="register"),
    path("logout/", LogoutView.as_view(), name="logout"),
]
