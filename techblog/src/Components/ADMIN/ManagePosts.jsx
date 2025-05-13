import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../Assets/Styles/ManagePosts.css";
import "./AdminNavbar"
import AdminNavbar from "./AdminNavbar.jsx";

function ManagePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:3003/Techblog/ManagePosts")
      .then((response) => {
        console.log(response);
        setPosts(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3003/DeletePost/${id}`)
      .then((response) => {
        alert("Post deleted successfully");
        setPosts(posts.filter(post => post._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  const handleEdit = (id) => {
    window.location.href = `/edit-post/${id}`;
  };

  const handleView = (id) => {
    window.open(`/post/${id}`, "_blank"); // Opens the blog post in a new tab
  };

  return (

    <div>
        <AdminNavbar/>
        <div className="unique-manage-posts-container">
            <h1 className="unique-manage-posts-title">Manage Posts</h1>

            <div className="unique-posts-list">
                {posts.map((post) => (
                <div className="unique-post-card" key={post._id}>
                    <h3 className="unique-post-title">{post.title}</h3>
                    <p className="unique-post-author">By: {post.userDetails?.username}</p>
                    <p className="unique-post-category">Category: {post.category}</p>

                    <div>
                        <div className="unique-post-actions">
                            <a href={`/post/${post._id}`} className=" btn unique-view-btn">View</a>
                            <a
                                href={`/post/${post._id}`}
                                className="btn unique-edit-btn"
                            >
                                Edit
                            </a>
                            <button
                                onClick={() => handleDelete(post._id)}
                                className="unique-delete-btn"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default ManagePosts;
