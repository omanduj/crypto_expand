from rest_framework import routers
from .views import UserLoginViewset

router = routers.DefaultRouter()
router.register('login', UserLoginViewset)