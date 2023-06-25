import React from "react";
import "../style/AllPost.css";
import Search from "./Search";
const AllPosts = ({ data }) => {
  return (
    <div>
      <Search data={data} />

      <div className="postsContainer">
        {data.map((post) => (
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
    </div>
  );
};

export default AllPosts;
