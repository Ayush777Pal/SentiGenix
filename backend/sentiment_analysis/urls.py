from django.urls import path
from .views import *

urlpatterns = [
    path('analyze/', analyze_review, name='analyze_review'),
    path('improve/',improve_review, name='improve_review'),
]
