from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Gallery
from .serializers import GallerySerializer



@api_view(["GET"])
def gallery_list(request):

    gallery = Gallery.objects.all()

    serializer = GallerySerializer(
        gallery,
        many=True
    )

    return Response(serializer.data)