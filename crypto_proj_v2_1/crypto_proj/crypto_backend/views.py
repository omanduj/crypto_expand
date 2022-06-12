from rest_framework import viewsets
from .models import UserLogin
from .serializers import UserLoginSerializer

# Create your views here.
class UserLoginViewset(viewsets.ModelViewSet):
    queryset = UserLogin.objects.all()
    serializer_class = UserLoginSerializer