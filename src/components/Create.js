import React from 'react'

function Create() {
  
  function handleSubmit(e){
    e.preventDefault();
    const title = document.getElementById("title")
    const body = document.getElementById("body")
    fetch("http://127.0.0.1:8000/create",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({title:title.value,body:body.value})
    }).then(res=>res.json())
    .then(data=>{
      title.value = ""
      body.value = ""
      console.log("data" ,data);
    })
  }

  return (
    <div>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
            <label htmlFor="body">Body</label>
            <input type="text" name="body" id="body" />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Create