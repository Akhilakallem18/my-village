from django.contrib import admin
from .models import Village


@admin.register(Village)
class VillageAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "district",
        "state",
    )