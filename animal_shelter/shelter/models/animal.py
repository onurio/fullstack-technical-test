from django.db import models


class Animal(models.Model):
    TYPE_CHOICES = [
        ("dog", "Dog"),
        ("cat", "Cat"),
    ]

    STATUS_CHOICES = [
        ("adopted", "Adopted"),
        ("available", "Available for Adoption"),
        ("waiting", "Waiting for Adoption"),
    ]

    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    breed = models.CharField(max_length=100)
    type = models.CharField(max_length=3, choices=TYPE_CHOICES)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)

    def __str__(self):
        return f"{self.name} ({self.get_type_display()})"
