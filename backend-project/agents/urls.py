from django.urls import path
from django.conf.urls import include
from .views import AgentViewSet
from rest_framework import routers



routers=routers.DefaultRouter()
routers.register('views',AgentViewSet)




urlpatterns = [
    path('list', include(routers.urls) ),
    #path('', include(router.urls))
    
]
