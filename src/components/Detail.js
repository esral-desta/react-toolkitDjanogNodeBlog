import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import {useParams} from "react-router-dom"
function Detail() {
  const {id} = useParams()
  const blog = useSelector(state=> state.blog.blogs.filter(blog=>blog.id==id)[0]) 
  return (
    <div>
      {blog && <div> 
        <h1>title: {blog.title}</h1>
        <p>id: {id}</p></div>}
    </div>
  )
}

export default Detail