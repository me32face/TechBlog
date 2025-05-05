const postSchema = require("./PostSchema");
const multer=require("multer")

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "./upload");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage }).single("image");





const addNewPost=((req,res)=>{

    let newPost=new postSchema({
        userDetails:req.body.userId,
        title:req.body.title,
        content:req.body.content,
        category:req.body.category,
        hashtags:req.body.hashtags,
        image:req.file,
        datePosted: new Date()
    })
    newPost.save()
    .then((result)=>{
        res.json({
            msg:"Post Uploaded",
            data:result,
            status:200
        })
    })
    .catch((err)=>{
        console.log(err);
        res.json({
            msg:"Something went wrong",
            err:err,
            status:404
        })
    })

})

const ViewPostsByUser = ((req,res)=>{
    postSchema.find({userDetails:req.params.id})
    .then((result)=>{
        res.json({
            msg:"successfully found",
            status:200,
            data:result
        })
    })
    .catch((err)=>{
        console.log(err);
        res.json({
            err:err,
            status:404
        })
    })
})

const ViewAllPosts=((req,res)=>{
    postSchema.find()
    .populate("userDetails", "username name")
    .then((result)=>{
        res.json({
            msg:"successfully found",
            status:200,
            data:result
        })
    })
    .catch((err)=>{
        console.log(err);
        res.json({
            err:err,
            status:404
        })
    })
})

const GetPostById = (req, res) => {
  const { id } = req.params;

  postSchema
    .findById(id)
    .populate("userDetails", "username name")
    .then((result) => {
      if (result) {
        res.status(200).json({
          msg: "Post fetched successfully",
          status: 200,
          data: result,
        });
      } else {
        res.status(404).json({
          msg: "Post not found",
          status: 404,
        });
      }
    })
    .catch((err) => {
      console.error("Error fetching post:", err);
      res.status(500).json({
        msg: "Server error",
        status: 500,
        err: err,
      });
    });
};


// const GetLatestPosts = (req, res) => {
//   postSchema
//     .find()
//     .sort({ datePosted: -1 }) // latest first
//     .limit(6)
//     .populate("userDetails", "username name")
//     .then((result) => {
//       res.json({
//         msg: "Latest posts fetched",
//         status: 200,
//         data: result,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         msg: "Error fetching latest posts",
//         error: err,
//       });
//     });
// };


module.exports={addNewPost,upload,ViewPostsByUser,ViewAllPosts,GetPostById}