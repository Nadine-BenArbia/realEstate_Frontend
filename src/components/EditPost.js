import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/editPost.css";

const EditPost = ({ postId, onUpdate, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    img: "",
    desc: "",
    location: "",
    availableAt: "",
    price: "",
    room: "",
    bathrooms: "",
    status: "",
    user: ""
  });

  useEffect(() => {
    
    axios
      .get(`http://127.0.0.1:5000/posts/${postId}`)
      .then((res) => {
        console.log("edit id ", res)
        const postData = res.data.post;
        setFormData({
          title: postData.title,
          img: postData.img,
          desc: postData.desc,
          location: postData.location,
          availableAt: postData.availableAt,
          price: postData.price,
          room: postData.room,
          bathrooms: postData.bathrooms,
          status: postData.status,
          user: postData.user
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, [postId]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://127.0.0.1:5000/${postId}`, formData)
      .then((res) => {
        const updatedPost = res.data;
        onUpdate(updatedPost);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <form className="edit-form" onSubmit={handleSubmit}>
        <p className="edit-title">Edit Post</p>
        <label>
          Title:
          <input
            className="edit-form-input"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Image:
          <input
            className="edit-form-input"
            name="img"
            value={formData.img}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            className="edit-form-input"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
          />
        </label>
        <label>
          Location:
          <input
            className="edit-form-input"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </label>
        <label>
                <input
            className="edit-form-input"
            name="availableAt"
                  type="date"
                  value={formData.availableAt}
                  onChange={handleChange}
                />
              </label>
        <label>
          Price:
          <input
            className="edit-form-input"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Room:
          <input
            className="edit-form-input"
            name="room"
            value={formData.room}
            onChange={handleChange}
          />
        </label>
        <label>
          Bathrooms:
          <input
            className="edit-form-input"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
          />
        </label>
        <label>
          Status:
          <select
            className="edit-form-input"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="For Sale">For Sale</option>
            <option value="Pending">Pending</option>
            <option value="Sold">Sold</option>
          </select>
        </label>
        <button className="edit-submit" type="submit">
          Save
        </button>
        <button className="edit-cancel" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditPost;
