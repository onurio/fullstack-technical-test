from django.db import models
from .animal import Animal
from .volunteer import Volunteer
from .adoptant import Adoptant


class Adoption(models.Model):
    STATUS_CHOICES = [
        ("completed", "Completed"),
        ("in_progress", "In Progress"),
    ]

    adoption_date = models.DateField()
    animal = models.ForeignKey(Animal, on_delete=models.CASCADE)
    volunteer = models.ForeignKey(Volunteer, on_delete=models.CASCADE)
    adoptant = models.ForeignKey(Adoptant, on_delete=models.CASCADE)
    status = models.CharField(max_length=11, choices=STATUS_CHOICES)

    def __str__(self):
        return f"Adoption of {self.animal} by {self.adoptant} on {self.adoption_date}"
