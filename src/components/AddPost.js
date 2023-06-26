import React, { useState } from "react";

import "../style/addPost.css";
import axios from "axios";

const AddPost = () => {
  const [showPopup, setShowPopup] = useState(false);
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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title: formData.title,
      img: formData.img,
      desc: formData.desc,
      location: formData.location,
      availableAt: formData.availableAt,
      price: formData.price,
      room: formData.room,
      bathrooms: formData.bathrooms,
      status: formData.status,
    };

    axios.post("http://127.0.0.1:5000/posts")
      .then((res) => console.log("success"))
      .catch((err) => console.error);

    // Reset the form
    setFormData({
      title: "",
      img: "",
      desc: "",
      location: "",
      availableAt: "",
      price: "",
      room: "",
      bathrooms: "",
      status: "",
    });
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div className="_button" onClick={openPopup}>
        Add Offer
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-icon" onClick={closePopup}>
              X
            </span>
            <form className="form" onSubmit={handleSubmit}>
              <p className="title">Add Post</p>
              <div className="flex">
                <label>
                  <input
                    className="formInput"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                  Title
                </label>
                <label>
                  <input
                    className="formInput"
                    name="img"
                    value={formData.img}
                    onChange={handleChange}
                  />
                  Image
                </label>
              </div>
              <label>
                <input
                  className="formInput"
                  name="desc"
                  value={formData.desc}
                  onChange={handleChange}
                />
                Description
              </label>
              <label>
                <input
                  className="formInput"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
                Location
              </label>
              <label>
                <input
                  className="formInput"
                  name="availableAt"
                  value={formData.availableAt}
                  onChange={handleChange}
                />
                Available At
              </label>
              <label>
                <input
                  className="formInput"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
                Price
              </label>
              <label>
                <input
                  className="formInput"
                  name="room"
                  value={formData.room}
                  onChange={handleChange}
                />
                Room
              </label>
              <label>
                <input
                  className="formInput"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                />
                Bathrooms
              </label>
              <label>
                <input
                  className="formInput"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                />
                Status
              </label>
              <button className="submit" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPost;
