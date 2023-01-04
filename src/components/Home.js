import React from "react";
import List from "./List";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBlogs } from "../reducers/blogReducer";
import { addError } from  "../reducers/errorReducre"
import {setLoaded} from "../reducers/loadingReducer"

let firstRednder = true;

function Home() {

  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  const error = useSelector((state) => state.error);
  const isLoading = useSelector((state) => state.loading);

  useEffect(() => {
    if (firstRednder) {
      firstRednder = false;
      setTimeout(() => {
        fetch("http://127.0.0.1:8000")
        .then((res) => res.json())
        .then((data) => {
            dispatch(addBlogs(data));
            // setIsloading(false)  
            dispatch(setLoaded())
          })
          .catch((err) => {
            console.log(err);
            dispatch(addError(err))
            // seterror(err);
            dispatch(setLoaded())
            // setIsloading(false)
          });
      }, 2000);
    }
  }, []);

  return (
    <div>
      {error && <h1>error while fetching</h1>}
      {isLoading && <h1> Loading </h1>}
      {blogs && <List data={blogs} />}
    </div>
  );
}

export default Home;
