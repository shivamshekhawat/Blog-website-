"use client";
import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormItem,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import '@/styles/AddBlog.css'

const AddBlog = ({ onAdd }) => {
  const { toast } = useToast();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/blogs", { title, description, content })
      .then((response) => {
        onAdd();
        setTitle("");
        setDescription("");
        setContent("");
        toast({
          title: "Blog Added",
          description: new Date().toLocaleString(),
        })
      })
      .catch((error) => {
        console.error("error adding blog", error);

      });
  };

  return (
    <Form>
      <form className="add-blog-form" onSubmit={handleSubmit}>
        <FormItem>
          <h2 className="form-title">Add New Blog</h2>

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
            className="input-content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            required
          />

          <Button className="submit-button"
            type="submit">
            Add Blog
          </Button>
        </FormItem>
      </form>
    </Form>
  );
};

export default AddBlog;
