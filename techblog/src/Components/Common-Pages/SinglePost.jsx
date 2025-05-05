// src/pages/SinglePost.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../STATIC/Navbar';
import Footer from '../STATIC/Footer';
import '../../Assets/Styles/SinglePost.css';

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .post(`http://localhost:3003/Techblog/GetPostById/${id}`)
      .then((res)=>{
        console.log(res);
        setPost(res.data.data)
      })
      .catch((err)=>{
        console.log(err);
        
      })
  }, [id]);

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  if (!post) {
    return (
      <div>
        <Navbar />
        <div className="singlepost-loading text-center">Loading post...</div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="singlepost-wrapper container">
        <div className="singlepost-header text-center">
          <h1 className="singlepost-title">{post.title}</h1>
          <p className="singlepost-meta">
            By <strong>{post.userDetails?.username || "Unknown"}</strong> |{' '}
            {formatDate(post.datePosted)}
          </p>
        </div>
        <div className="singlepost-image-container">
          <img
            src={`http://localhost:3003/${post.image?.filename}` || "https://via.placeholder.com/800x400"}
            alt={post.title}
            className="singlepost-main-image"
          />
        </div>
        <div className="singlepost-body mt-4">
          <p className="singlepost-content">{post.content}</p>
          <p className="singlepost-category">
            <strong>Category:</strong> {post.category}
          </p>
          <p className="singlepost-tags">
            <strong>Tags:</strong> {post.hashtags}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SinglePost;
