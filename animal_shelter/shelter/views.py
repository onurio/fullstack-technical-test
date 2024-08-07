from rest_framework import viewsets
from .models import Animal, Volunteer, Adoptant, Adoption
from .serializers import (
    AnimalSerializer,
    VolunteerSerializer,
    AdoptantSerializer,
    AdoptionSerializer,
)


class AnimalViewSet(viewsets.ModelViewSet):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer


class VolunteerViewSet(viewsets.ModelViewSet):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer


class AdoptantViewSet(viewsets.ModelViewSet):
    queryset = Adoptant.objects.all()
    serializer_class = AdoptantSerializer


class AdoptionViewSet(viewsets.ModelViewSet):
    queryset = Adoption.objects.all()
    serializer_class = AdoptionSerializer
