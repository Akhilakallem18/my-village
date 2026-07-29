from django.db import models


class Place(models.Model):

    name = models.CharField(max_length=100)

    category = models.CharField(max_length=50)

    description = models.TextField()

    location = models.CharField(max_length=200)

    image = models.URLField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.name