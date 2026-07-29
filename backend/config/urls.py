from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),

    path("api/village/", include("apps.village.urls")),
    path("api/places/", include("apps.places.urls")),
]