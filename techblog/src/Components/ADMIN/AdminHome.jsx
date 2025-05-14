import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../Assets/Styles/AdminHome.css";
import AdminNavbar from "./AdminNavbar";

function AdminHome() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    approvedPosts: 0,
    pendingPosts: 0
  });

  const [numOfPendingPost,setNumOfPendingPost] =useState();
  const [posts,setPosts] = useState()
  const [pendingPosts, setPendingPosts] = useState([]);
  const [showPendingListModal, setShowPendingListModal] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    axios
    .get("http://localhost:3003/Techblog/AllPosts")
    .then(function(response) {
      console.log("All Posts loaded:", response.data);
      setPosts(response.data.data.length);
    })
    .catch(function(error) {
      console.error("Error loading dashboard stats:", error);
    });

    axios
    .get("http://localhost:3003/Techblog/admin/pending-posts")
    .then((res) => {
      console.log("Pending posts fetched:", res.data.data);
      setNumOfPendingPost(res.data.data.length)
      if (Array.isArray(res.data.data)) {
        setPendingPosts(res.data.data);
      } else {
        console.warn("Expected an array but got:", res.data);
      }
    })
    .catch((err) => {
      console.error("Error fetching pending posts:", err);
    });
    
  }, []);

  const handleApprove = (postId) => {
    axios.put(`http://localhost:3003/Techblog/admin/approve-posts/${postId}`)
      .then(function(response) {
        console.log("Pending posts fetched:", response.data);
        if (Array.isArray(response.data)) {
          setPendingPosts(response.data);
        } else {
          console.error("Expected an array but got:", response.data);
          setPendingPosts([]);
        }

        const updatedPending = pendingPosts.filter((post) => post._id !== postId);
        setPendingPosts(updatedPending);

        const updatedStats = {
          ...stats,
          pendingPosts: stats.pendingPosts - 1,
          approvedPosts: stats.approvedPosts + 1,
        };
        setStats(updatedStats);

        setCurrentPost(null);
      })
      .catch(function(error) {
        console.error("Error approving post:", error);
      });
  };

  const openPostModal = (post) => {
    setCurrentPost(post);
  };

  const closePostModal = () => {
    setCurrentPost(null);
  };

  return (
    <div className="admin-home-wrapper">
      <AdminNavbar />
      <div className="admin-home-dashboard">
        <h2 className="admin-home-title">Welcome to Admin Dashboard</h2>
        <div className="admin-home-card-container">
          <div className="admin-home-card">
            <h3 className="admin-home-card-title">Total Users</h3>
            <p className="admin-home-card-value">{stats.totalUsers}</p>
          </div>
          <div className="admin-home-card">
            <h3 className="admin-home-card-title">Total Posts</h3>
            <p className="admin-home-card-value">{posts}</p>
          </div>
          <div className="admin-home-card">
            <h3 className="admin-home-card-title">Pending Posts</h3>
            <p className="admin-home-card-value">{numOfPendingPost}</p>
            <button
              className="admin-home-view-posts-btn"
              onClick={() => setShowPendingListModal(true)}
            >
              View Pending Posts
            </button>
          </div>
        </div>
      </div>

      {/* Modal for pending posts list */}
      {showPendingListModal && (
        <div className="admin-home-modal">
          <div className="admin-home-modal-content">
            <h2 className="admin-home-modal-title">Pending Posts</h2>
            <ul className="admin-home-pending-posts-list">
              {Array.isArray(pendingPosts) && pendingPosts.length > 0 ? (
                pendingPosts.map((post) => (
                  <li key={post._id} className="admin-home-pending-post-item">
                    <h4>{post.title}</h4>
                    <button
                      className="admin-home-view-post-btn"
                      onClick={() => openPostModal(post)}
                    >
                      View
                    </button>
                  </li>
                ))
              ) : (
                <p>No pending posts to display.</p>
              )}
            </ul>

            <button
              className="admin-home-close-btn"
              onClick={() => setShowPendingListModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal for individual post details */}
      {currentPost && (
        <div className="admin-home-modal">
          <div className="admin-home-modal-content">
            <h2 className="admin-home-modal-title">Post Details</h2>
            <p className="admin-home-modal-text">
              <strong>Title:</strong> {currentPost.title}
            </p>
            <p className="admin-home-modal-text">
              <strong>Author:</strong> {currentPost.userDetails.username}
            </p>
            <p className="admin-home-modal-text">
              <strong>Category:</strong> {currentPost.category}
            </p>
            <p className="admin-home-modal-text">
              <strong>Content:</strong> {currentPost.content}
            </p>
            <div className="admin-home-modal-actions">
              <button
                className="admin-home-approve-btn"
                onClick={() => handleApprove(currentPost._id)}
              >
                Approve
              </button>
              <button
                className="admin-home-close-btn"
                onClick={closePostModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminHome;
