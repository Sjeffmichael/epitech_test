from django.urls import path

from .views import CompanyView, current_user, UserList

urlpatterns = [
    path('companies/', CompanyView.as_view(), name='companies_list'),
    path('companies/<int:id>', CompanyView.as_view(), name='companies_process'),
    path('current_user/', current_user),
    path('users/', UserList.as_view())
]
