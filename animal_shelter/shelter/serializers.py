from rest_framework import serializers
from .models import Animal, Volunteer, Adoptant, Adoption


class AnimalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Animal
        fields = "__all__"


class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = "__all__"
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = Volunteer.objects.create_user(**validated_data)
        return user


class AdoptantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adoptant
        fields = "__all__"
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = Adoptant.objects.create_user(**validated_data)
        return user


class AdoptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Adoption
        fields = "__all__"
