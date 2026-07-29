from django.urls import path
from .views import village_list


urlpatterns = [
    path("", village_list),
]