const mongoose=require('mongoose')
const User = require("../model/user-modal")
const Blog = require("../model/blog-modal")
 const addBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;

  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "Unable TO FInd User By This ID" });
  }
  const blog = new Blog({
    title, description, image, user 
  });
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({ session });
    existingUser?.blog?.push(blog);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }

  return res.status(200).json({ blog });
};
const getAllBlog =async(req, res, next)=>{
    let blog;
    try{
blog=await Blog.find().populate("user")
    }catch(error){
        console.log(error,"error")
    }
    if (!blog) {
      return res.status(404).json({ message: "No Blogs Found" });
    }
    return res.status(200).json({ blog });
  
}

const updateBlog = async (req, res, next) => {
  const { title, description ,image} = req.body;
  const blogId = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogId, {
      title,
      description,
      image
    });
    console.log(blog,"blog")
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    return res.status(500).json({ message: "Unable To Update The Blog" });
  }
  return res.status(200).json({ blog });
};


 const getById = async (req, res, next) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blog.findById(id);
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    return res.status(404).json({ message: "No Blog Found" });
  }
  return res.status(200).json({ blog });
};
const deleteBlog = async (req, res, next) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndRemove(id).populate("user");
  console.log("blog",blog)

    await blog?.user?.blogs?.pull(blog);
    await blog?.user?.save();
  } catch (err) {
    console.log(err);
  }
  if (!blog) {
    return res.status(500).json({ message: "Unable To Delete" });
  }
  return res.status(200).json({ message: "Successfully Delete" });
};
const getByUserId = async (req, res, next) => {
  const userId = req.params.id;
  let userBlogs;
  try {
    userBlogs = await User.findById(userId).populate("blog");
  } catch (err) {
    return console.log(err);
  }
  if (!userBlogs) {
    return res.status(404).json({ message: "No Blog Found" });
  }
  return res.status(200).json({ user: userBlogs });
};
module.exports={getAllBlog,addBlog,updateBlog,getById,deleteBlog,getByUserId}


    