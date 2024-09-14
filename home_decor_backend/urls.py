"""
URL configuration for home_decor_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from users import views
from users.views import like_post, comment_post, share_post, save_post, create_post

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', views.login, name='login'),
    path('signup/', views.signup, name='signup'),
    path('users/', views.get_users, name='get_users'),
    path('like/', like_post, name='like_post'),
    path('comment/', comment_post, name='comment_post'),
    path('share/', share_post, name='share_post'),
    path('save/', save_post, name='save_post'),
    path('create_post/', create_post, name='create_post'),  # New route for creating posts
]
