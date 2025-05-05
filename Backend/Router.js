const express=require("express");
const Router=express.Router();

const userController=require("./User/UserRegistrationController");
const postController=require("./Posts/PostController");




Router.post("/userRegistration",userController.upload,userController.adduser);
Router.post("/ViewUserData",userController.viewUserData);
Router.post("/userLogin",userController.userLogin);
Router.post("/ViewUsers",userController.ViewUsers);
Router.post("/ForgotPassword",userController.ForgotPassword);
Router.post("/UserProfile/:id",userController.UserProfile);
Router.put("/UpdateUserProfile/:id",userController.UpdateUserProfile);






Router.post("/AddPost",postController.upload,postController.addNewPost);
Router.post("/UsersPosts/:id",postController.ViewPostsByUser);
Router.post("/AllPosts",postController.ViewAllPosts);
Router.post("/GetPostById/:id", postController.GetPostById);
// Router.get("/Techblog/LatestPosts", postController.GetLatestPosts);
Router.get("/AllPosts", postController.ViewAllPosts);








module.exports=Router;