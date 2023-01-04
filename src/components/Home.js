import React from "react";
import List from "./List";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBlogs } from "../reducers/blogReducer";
import { addError,removeErrors } from "../reducers/errorReducre";
import { setLoaded } from "../reducers/loadingReducer";


function Home() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  const error = useSelector((state) => state.error.errors);
  const isLoading = useSelector((state) => state.loading.value);

  useEffect(() => {
        if(blogs.length<=0){
          fetch("http://127.0.0.1:8000")
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw Error("check your fetch url");
            }
          })
          .then((data) => {
            
            dispatch(addBlogs(data));
            dispatch(setLoaded());
            dispatch(removeErrors());
          })
          .catch((err) => {
            console.log(err.message);
            dispatch(addError(err.message));
            dispatch(setLoaded());
          });
        }
    }, []);
  
  return (
    <div>
      {error.length > 0 && <h1>error while fetching</h1>}
      {isLoading && <h1> Loading </h1>}
      {blogs && <List data={blogs} />}
    </div>
  );
}

export default Home;
