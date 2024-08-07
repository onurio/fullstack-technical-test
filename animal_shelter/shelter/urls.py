from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AnimalViewSet, VolunteerViewSet, AdoptantViewSet, AdoptionViewSet

router = DefaultRouter()
router.register(r"animals", AnimalViewSet)
router.register(r"volunteers", VolunteerViewSet)
router.register(r"adoptants", AdoptantViewSet)
router.register(r"adoptions", AdoptionViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
