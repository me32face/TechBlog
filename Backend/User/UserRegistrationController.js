const userschema=require("./UserRegistrationSchema");
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




const adduser=((req,res)=>{

    let user = new userschema({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        image: req.file,
        bio: req.body.bio || "",
        phone: req.body.phone || "",
        dob: req.body.dob || "",
        socialLinks: req.body.socialLinks || ""
    });
    

    user.save()
    .then((result)=>{
        res.json({
            msg:"saved",
            data:result,
            status:200
        })

    })
    .catch((err)=>{
        console.log(err); 
        if(err.code===11000){
            res.json({
                msg:"Email id already exist",
                status:404
            })
        }else{
            res.json({
                msg:"unussual error",
                status:400
            })
        }
    })
})


const viewUserData=((req,res)=>{
    userschema.find()
    .then((result)=>{
        res.json({
            msg:"Data Found",
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

const userLogin=((req,res)=>{
    userschema.findOne({email:req.body.email})
    .then((result)=>{
        if(!result){
            res.json({
                msg:`Email id not registered. Recheck email-id or usernot registered`,
                status:404
            })
        }
        else if(result.password===req.body.password){
            res.json({
                msg:`Login Successfull. Welcome ${result.fullName}`,
                status:200,
                data:result
            })
        }
        else if(result.password!=req.body.password){
            res.json({
                msg:`Password Incorrect!`,
                status:400
            })
        }
    })
})

const ForgotPassword =((req,res)=>{
    userschema.findOne({email:req.body.email})
    
    .then((result)=>{

        if(!result){
            res.json({
                msg:`${req.body.email} not found.`,
                status:400
            })
        }
        else if(result){
            userschema.findOneAndUpdate(
                {email:req.body.email},
                {password:req.body.password}
            )
            .then((result)=>{
                res.json({
                    msg:`Password updated successfully for ${req.body.email} `,
                    status:200
                })
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        else{
            res.json({
                msg:`Unusual error`,
                status:404
            })
        }
    })
})

const ViewUsers=((req,res)=>{
    userschema.find()
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

const UserProfile = ((req,res)=>{
    userschema.findById({_id:req.params.id})
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

const UpdateUserProfile = ((req, res) => {
    const userId = req.params.id;  // Get the user ID from the URL

    // Find the user by ID and update the fields
    userschema.findById(userId)
        .then((user) => {
            if (!user) {
                return res.status(404).json({
                    msg: "User not found",
                    status: 404
                });
            }

            const updatedData = {
                fullName: req.body.fullName || user.fullName,
                username: req.body.username || user.username,
                email: req.body.email || user.email,
                password: req.body.password || user.password,
                bio: req.body.bio || user.bio,
                phone: req.body.phone || user.phone,
                dob: req.body.dob || user.dob,
                socialLinks: req.body.socialLinks || user.socialLinks,
            };
            
            // Now update the user in the database
            userschema.findByIdAndUpdate(userId, updatedData, { new: true })
                .then((updatedUser) => {
                    res.json({
                        msg: "Profile updated successfully",
                        status: 200,
                        data: updatedUser
                    });
                })
                .catch((err) => {
                    console.log(err);
                    res.json({
                        msg: "Error updating profile",
                        status: 400
                    });
                });
        })
        .catch((err) => {
            console.log(err);
            res.json({
                msg: "Error finding user",
                status: 500
            });
        });
});


module.exports={adduser,upload,viewUserData,userLogin,ViewUsers,ForgotPassword,UserProfile,UpdateUserProfile}