from django.urls import path
from . import views

urlpatterns = [
     path('',views.apiOverview, name="api-overview"),
     path('task-list/',views.taskList, name="task-list"),
     path('task-detail/<str:pk>/',views.taskDetail, name="task-detail"),
     path('task-create/',views.taskCreate,name="create task"),
     path('task-update/<str:pk>/',views.taskUpdate,name="update task"),
     path('task-delete/<str:pk>/',views.taskDelete, name="delete task")
]
