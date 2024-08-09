from rest_framework import viewsets, generics
from .models import Animal, Volunteer, Adoptant, Adoption
from .serializers import (
    AnimalSerializer,
    VolunteerSerializer,
    AdoptantSerializer,
    AdoptionSerializer,
)
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer


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


class AdoptantSignUpView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = AdoptantSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        adoptant = serializer.save()
        refresh = RefreshToken.for_user(adoptant)
        return Response(
            {
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            }
        )


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
