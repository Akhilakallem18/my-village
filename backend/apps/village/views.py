from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Village
from .serializers import VillageSerializer


@api_view(["GET"])
def village_list(request):

    villages = Village.objects.all()

    serializer = VillageSerializer(villages, many=True)

    return Response(serializer.data)