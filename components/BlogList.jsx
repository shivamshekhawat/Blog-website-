"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import AddBlog from "./AddBlog";
import UpdateBlog from "./UpdateBlog";
import BlogCard from "./BlogCard";
import '@/styles/BlogList.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [showAddForm, setShowAddForm] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error("Error Fetching blogs", error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/blogs/${id}`)
      .then(() => setBlogs(blogs.filter((blog) => blog.id !== id)))
      .catch((error) => console.log("Error while deleting blog", error));
  };

  const handleAdd = () => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((response) => setBlogs(response.data))
      .catch((error) => console.log("error fetching blogs :", error));
  };

  const handleUpdate = () => {
    setEditingBlog(null);
    setShowAddForm(true);
    axios
      .get("http://localhost:5000/api/blogs")
      .then((response) => setBlogs(response.data))
      .catch((error) => console.log("Error Fetching Blogs", error));
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setShowAddForm(false);
  };

  return (
    <div className="blog-list">
      <h1 className="blog-list-title">Blog Posts</h1>
      {showAddForm && <AddBlog onAdd={handleAdd} />}
      {editingBlog && <UpdateBlog blog={editingBlog} onUpdate={handleUpdate} />}
      <div className="blog-cards">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;

