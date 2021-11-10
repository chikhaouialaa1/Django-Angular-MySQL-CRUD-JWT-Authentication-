from django.shortcuts import render
from django.contrib.auth.models import User, Group
from .models import Agents
from rest_framework import viewsets
#from rest_framework import permissions
from .serializers import AgentSerializer


class AgentViewSet(viewsets.ModelViewSet):
    queryset = Agents.objects.all()
    print("hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    serializer_class = AgentSerializer
    print(serializer_class)

    #permission_classes = [permissions.IsAuthenticated]
