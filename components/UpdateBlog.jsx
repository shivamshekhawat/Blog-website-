"use client";
"use client";
import React, { useState } from "react";
import axios from "axios";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import '@/styles/UpdateBlog.css'


const UpdateBlog = ({ blog, onUpdate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/blogs/${blog.id}`, {
        title,
        description,
        content,
      })
      .then((resonse) => {
        onUpdate();
        // setTitle("");
        // setDescription("");
        // setContent("");
        toast({
          title: "Blog Updated",
          description: new Date().toLocaleString(),
        })
      })
      .catch((error) => console.error("error while updating blog blog", error));
  };
  return (
    <Form>
      <form className="update-blog-form" onSubmit={handleSubmit}>
        <h2 className="form-title" >Update Blog</h2>
        <Input
          type="text"
          className="input-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <Input
          type="text"
          className="input-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <Textarea
          value={content}
          className="input-content"
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        ></Textarea>
        <Button className="submit-button" type="submit">Update Blog</Button>
      </form>
    </Form>
  );
};

export default UpdateBlog;

