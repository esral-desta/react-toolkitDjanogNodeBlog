import { createSlice } from "@reduxjs/toolkit";

const blogSLice = createSlice({
    name:"blog",
    initialState:{
        blogs :[]
    },
    reducers:{
        addBlog:(blog,action)=>{
            blog.blogs.push(action.payload)
        },
        addBlogs:(blog,action)=>{
            blog.blogs.push(...action.payload)
        },
        removeBlog:(blog,action)=>{
            const newTodos = blog.blogs.filter(todo => todo.id != action["payload"])
            blog.blogs = newTodos
        }
    }
})

export const {addBlog,addBlogs,removeBlog} = blogSLice.actions;

export default blogSLice;