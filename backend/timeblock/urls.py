from django.urls import path
from . import views

urlpatterns = [
    path('', views.activities_list),
    path('<int:pk>/', views.activities_edits),
]