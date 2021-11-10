
from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Agents

class AgentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Agents
        fields = ['id','first_name', 'last_name', 'age']
