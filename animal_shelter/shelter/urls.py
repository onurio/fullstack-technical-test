from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    AnimalViewSet,
    VolunteerViewSet,
    AdoptantViewSet,
    AdoptionViewSet,
    AdoptantSignUpView,
)

router = DefaultRouter()
router.register(r"animals", AnimalViewSet)
router.register(r"volunteers", VolunteerViewSet)
router.register(r"adoptants", AdoptantViewSet)
router.register(r"adoptions", AdoptionViewSet)

urlpatterns = [
    path("signup/", AdoptantSignUpView.as_view(), name="signup"),
    path("", include(router.urls)),
]
