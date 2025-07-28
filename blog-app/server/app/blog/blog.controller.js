import { Blog } from "./blog.model.js";

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    console.log("Error in getBlogs: " + error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.log("Error in getBlogById: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newBlog = new Blog({ title: title, content: content });
    await newBlog.save();
    res.status(201).json({ message: "Blog created successfully", newBlog });
  } catch (error) {
    console.log("Error in createBlog: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title: title, content: content },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog updated successfully", updatedBlog });
  } catch (error) {
    console.log("Error in updateBlog: " + error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully", deletedBlog });
  } catch (error) {
    console.log("Error in deleteBlog: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { getBlogs, getBlogById, createBlog, updateBlog, deleteBlog };
