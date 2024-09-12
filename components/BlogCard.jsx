"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import '@/styles/BlogCard.css'
const BlogCard = ({ blog, onEdit, onDelete }) => {
    const { toast } = useToast();
    const [isExpanded, setIsExpanded] = useState(false);
    const contentLimit = 30;

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const shouldShowButton = blog.content.length > contentLimit;
    const displayedContent = isExpanded
        ? blog.content
        : blog.content.slice(0, contentLimit) +
        (blog.content.length > contentLimit ? "..." : "");

    return (
        <Card className="blog-card">
            <CardTitle className="blog-title">{blog.title}</CardTitle>
            <CardDescription className="blog-description">
                {blog.description}
            </CardDescription>
            <CardContent className="blog-content">
                <p>{displayedContent}</p>
                {shouldShowButton && (
                    <button className="see-more-button" onClick={toggleExpand}>
                        {isExpanded ? "See less" : "See more"}
                    </button>
                )}
            </CardContent>
            <div className="blog-actions">
                <Button className="edit-button" onClick={() => onEdit(blog)}>
                    Edit
                </Button>
                <Button
                    variant="destructive"
                    className="delete-button"
                    onClick={() => {
                        onDelete(blog.id);
                        toast({
                            title: "Blog Deleted",
                            description: new Date().toLocaleString(),
                        });
                    }}
                >
                    Delete
                </Button>
            </div>
        </Card>
    );
};

export default BlogCard;
