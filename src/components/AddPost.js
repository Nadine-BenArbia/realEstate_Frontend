import React, { useState } from "react";
import "../style/addPost.css";
import axios from "axios";

const AddPost = () => {
    const userJson = localStorage.getItem("user");
    const user = JSON.parse(userJson);
    const userId = user.user._id;
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
    status: "For Sale",
    user: userId,
  });



  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, user: userId });
    axios
      .post("http://127.0.0.1:5000/post", formData)
      .then((res) => {
        console.log("success");
        setFormData({
          title: "",
          img: "",
          desc: "",
          location: "",
          availableAt: "",
          price: "",
          room: "",
          bathrooms: "",
          status: "For Sale",
          user: userId,
        });
      })
      .catch((err) => console.error);
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
                    placeholder="Title"
                  />
                </label>
                <label>
                  <input
                    className="formInput"
                    name="img"
                    value={formData.img}
                    onChange={handleChange}
                    placeholder="Image URL"
                  />
                </label>
              </div>
              <label>
                <textarea
                  className="formInput"
                  name="desc"
                  value={formData.desc}
                  onChange={handleChange}
                  placeholder="Description"
                />
              </label>
              <label>
                <input
                  className="formInput"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Location"
                />
              </label>
              <label>
                <input
                  className="formInput"
                  name="availableAt"
                  type="date"
                  value={formData.availableAt}
                  onChange={handleChange}
                />
              </label>
              <label>
                <input
                  className="formInput"
                  name="price"
                  type="number"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Price"
                />
              </label>
              <label>
                <input
                  className="formInput"
                  name="room"
                  type="number"
                  value={formData.room}
                  onChange={handleChange}
                  placeholder="Number of Rooms"
                />
              </label>
              <label>
                <input
                  className="formInput"
                  name="bathrooms"
                  type="number"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  placeholder="Number of Bathrooms"
                />
              </label>
              <label>
                <select
                  className="formInput"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="For Sale">For Sale</option>
                  <option value="Pending">Pending</option>
                  <option value="Sold">Sold</option>
                </select>
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
