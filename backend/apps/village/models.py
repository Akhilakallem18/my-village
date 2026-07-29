from django.db import models


class Village(models.Model):

    name = models.CharField(max_length=100)

    district = models.CharField(max_length=100)

    state = models.CharField(max_length=100)

    description = models.TextField()

    agriculture = models.TextField()

    culture = models.TextField()

    famous_places = models.TextField()

    festivals = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.name