import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { removeBlog } from "../reducers/blogReducer";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate()
  const dispach = useDispatch();
  const blog = useSelector(
    (state) => state.blog.blogs.filter((blog) => blog.id == id)[0]
  );
  function handleDelete() {
    fetch("http://127.0.0.1:8000/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        return res.text;
      })
      .then((res) => {
        dispach(removeBlog(id));
      })
      .catch((err) => {
        console.log(err);
      });
      dispach(removeBlog(id))
      navigate("/")
    }
  return (
    <div>
      {blog && (
        <div>
          <h1>title: {blog.title}</h1>
          <p>id: {id}</p>
        </div>
      )}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Detail;
