const express = require("express");
const Router = express.Router();

const userController = require("./User/UserRegistrationController");
const postController = require("./Posts/PostController");

// User Routes
Router.post("/userRegistration", userController.upload, userController.adduser);
Router.post("/ViewUserData", userController.viewUserData);
Router.post("/userLogin", userController.userLogin);
Router.post("/ViewUsers", userController.ViewUsers);
Router.post("/ForgotPassword", userController.ForgotPassword);
Router.post("/UserProfile/:id", userController.UserProfile);
Router.put("/UpdateUserProfile/:id", userController.UpdateUserProfile);




// Post Routes
Router.post("/AddPost", postController.upload, postController.addNewPost);
Router.post("/UsersPosts/:id", postController.ViewPostsByUser);




// Routes to view, update, delete posts
Router.get("/AllPosts", postController.ViewAllPosts);          // Changed to GET for fetching all posts
Router.post("/GetPostById/:id", postController.GetPostById);    // Changed to GET for fetching a specific post
Router.delete("/DeletePost/:id", postController.DeletePostById); // Delete post by ID
Router.put("/UpdatePost/:id", postController.updatePost);    // Update post by ID




// Route for managing posts (viewing all posts for admin)
Router.post("/ManagePosts", postController.managePosts);       // Changed to GET to fetch posts for management


module.exports = Router;
