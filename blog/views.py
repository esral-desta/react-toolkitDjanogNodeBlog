from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response  import Response
from .models import Blog
from .serilizers import BlogSerilizer
from rest_framework import status
# Create your views here.

@api_view(['GET'])
def getAllBlogs(request):
    blogs = Blog.objects.all()
    blog = BlogSerilizer(blogs,many=True)
    return Response(blog.data)

@api_view(["GET"])
def getBlog(request,id):
    blog = Blog.objects.filter(id=id)[0]
    blog = BlogSerilizer(blog,many=False)
    return Response(blog.data)

@api_view(["POST"])
def createBlog(request):
    data = BlogSerilizer(data = request.data)
    if data.is_valid():
        data.save()
        return Response(data.data,status=status.HTTP_201_CREATED)
    return Response(data.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(["DELETE"])
def deleteBlog(request,id):
    blog = Blog.objects.filter(id=id)
    if blog:
        blog.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    else:
        return Response({"deleted":False})
@api_view(["POST"])

def editBlog(request,id):
    blog = Blog.objects.filter(id=id)[0]
    blog = BlogSerilizer(blog,many=False,data=request.data)
    if blog.is_valid():
        blog.save()
        return Response({"data":"created"})
    return Response({"data":"null"})