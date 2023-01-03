from django.urls import path
from . import views

app_name = "blog"

urlpatterns = [
    path("",views.getAllBlogs,name="getallblogs"),
    path("create",views.createBlog,name="createblog"),
    path("delete/<int:id>",views.deleteBlog,name="deleteblog"),
    path("detail/<int:id>",views.getBlog,name="getblog"),
]