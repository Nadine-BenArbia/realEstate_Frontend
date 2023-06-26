import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import AddPost from "./AddPost";
import axios from "axios";
import EditPost from "./EditPost";
import "../style/editPost.css";

const UserOffer = ({ data }) => {
  const userJson = localStorage.getItem("user");
  const user = JSON.parse(userJson);  const userId = user.user._id;

  const [filteredData, setFilteredData] = useState(
    data.filter((post) => post.user === userId)
  );
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editPostId, setEditPostId] = useState(null);

  const deletePost = (id) => {
    axios
      .delete(`http://127.0.0.1:5000/${id}`)
      .then((res) => {
        
        const updatedData = filteredData.filter((post) => post._id !== id);
        console.log("Post deleted successfully");
        
        setFilteredData(updatedData);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const editPost = (postId) => {
    setEditPostId(postId);
    setShowEditPopup(true);
  };

  const handleCloseEditPopup = () => {
    setShowEditPopup(false);
    setEditPostId(null);
  };

  const handlePostUpdate = (updatedPost) => {
    const updatedData = filteredData.map((post) =>
      post._id === updatedPost._id ? updatedPost : post
    );
    setFilteredData(updatedData);
    handleCloseEditPopup();
  };

  return (
    <div>
      <AddPost />

      <div className="wrap-card">
        {filteredData.map((post) => (
          <div className="card" key={post._id}>
            <div className="card-header">
              <div className="card-title-group">
                <h5 className="card-title">{post.title}</h5>
                <div className="card-date">{post.availableAt}</div>
                <div className="card-date">{post.location}</div>
              </div>
              <div className="card-btn-group">
                <AiFillDelete onClick={() => deletePost(post._id)} />
                <AiFillEdit onClick={() => editPost(post._id)} />
              </div>
            </div>
            <img className="card-image" src={post.img} alt="Logo" />
            <div className="card-text">
              <div className="card-info">Room: {post.room}</div>
              <div className="card-info">Bathrooms: {post.bathrooms}</div>
              <div className="card-info">Status: {post.status}</div>
              <div className="card-info">Price: {post.price}</div>
            </div>
            <div className="card-desc">{post.desc}</div>
          </div>
        ))}
      </div>

      {showEditPopup && (
        <div className="edit-popup">
          <div className="edit-popup-content">
            <span className="edit-popup-close" onClick={handleCloseEditPopup}>
              X
            </span>
            <EditPost
              postId={editPostId}
              onUpdate={handlePostUpdate}
              onClose={handleCloseEditPopup}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserOffer;
