from django.urls import path
from . import views

app_name = "blog"

urlpatterns = [
    path("",views.getAllBlogs,name="getallblogs"),
    path("create",views.createBlog,name="createblog"),
    path("detail/<int:id>",views.getBlog,name="getblog"),
    path("edit/<int:id>",views.editBlog,name="editblog"),
    path("delete/<int:id>",views.deleteBlog,name="deleteblog"),
]