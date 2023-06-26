import React,{useState} from "react";
import AddPost from "./AddPost";

const UserOffer = ({ data }) => {
  const [posts, setPosts] = useState(data);

  const addNewPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };
  const userJson = localStorage.getItem("user");
  const user = JSON.parse(userJson);
  const userId = user && user._id;

  const filteredData = data.filter((post) => post.user === userId);

  return (
    <div>
        <div>
      <AddPost addPost={addNewPost} />
      </div>
      {filteredData.map((post) => (
        <div className="card" key={post.id}>
          <div className="card-header">
            <div className="card-title-group">
              <h5 className="card-title">{post.title}</h5>
              <div className="card-date">{post.availableAt}</div>
              <div className="card-date">{post.location}</div>
            </div>
          </div>
          <img className="card-image" src={post.img} alt="Logo" />
          <div className="card-text">
            <div className="card-info">room: {post.room}</div>
            <div className="card-info">bathrooms: {post.bathrooms}</div>
            <div className="card-info">{post.status}</div>
            <div className="card-info">price: {post.price}</div>
          </div>
          <div className="card-desc">{post.desc}</div>
        </div>
      ))}
    </div>
  );
};

export default UserOffer;
