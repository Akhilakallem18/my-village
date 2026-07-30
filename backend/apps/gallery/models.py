from django.db import models


class Gallery(models.Model):

    title = models.CharField(max_length=100)

    image = models.URLField(blank=True)

    description = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title
