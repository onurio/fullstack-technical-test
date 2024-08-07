from django.contrib import admin

from .models import Animal, Volunteer, Adoptant, Adoption

admin.site.register(Animal)
admin.site.register(Volunteer)
admin.site.register(Adoptant)
admin.site.register(Adoption)
