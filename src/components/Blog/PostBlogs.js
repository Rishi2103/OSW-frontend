import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import PostEditor from "./PostEditor";
import "./PostBlog.css";
import { hostname } from "../../hostname";

const PostBlogs = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [isPreviewOpen, setPreviewOpen] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    let errorMessage = "";

    if (!title.trim() && !content.trim()) {
      errorMessage = "Please provide a title and content!";
    } else if (!title.trim()) {
      errorMessage = "Post title is required!";
    } else if (!content.trim()) {
      errorMessage = "Post content is required!";
    }

    if (errorMessage) {
      //   toast({
      //     title: errorMessage,
      //     status: "warning",
      //     duration: 5000,
      //     isClosable: true,
      //     position: "top-right",
      //   });
      return;
    }

    // Perform submission logic here
    console.log("Title:", title);
    console.log("Content:", content);
    let token;
    if (localStorage.getItem("userAuthToken")) {
      token = localStorage.getItem("userAuthToken");
    } else {
      token = localStorage.getItem("adminAuthToken");
    }

    try {
      const response = await fetch(`${hostname}/blog/createblog`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: token,
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        const createdPost = await response.json();
        console.log("Post created:", createdPost);
        // Perform any additional actions after successful post creation
        // toast({
        //   title: "Successfully created the post.",
        //   status: "success",
        //   duration: 5000,
        //   isClosable: true,
        //   position: "top-right",
        // });
        // Reset form fields
        setTitle("");
        setContent("");

        // navigate(`/Ngo/media/${createdPost._id}`);
      } else {
        console.log("Post creation failed");
        // Handle error case
        errorMessage = "Error creating post else case.";

        // toast({
        //   title: errorMessage,
        //   status: "warning",
        //   duration: 5000,
        //   isClosable: true,
        //   position: "top-right",
        // });
      }
    } catch (error) {
      console.error("Error creating post:", error);

      errorMessage = "Error creating post";

      //   toast({
      //     title: errorMessage,
      //     status: "error",
      //     duration: 5000,
      //     isClosable: true,
      //     position: "top-right",
      //   });
    }

    // Reset form fields
    setTitle("");
    setContent("");
  };

  const handlePreview = () => {
    console.log("preview button clicked");

    if (!title.trim() && !content.trim()) {
      //   toast({
      //     title: "Please provide a title and content!",
      //     status: "warning",
      //     duration: 5000,
      //     isClosable: true,
      //     position: "top-right",
      //   });
      return;
    } else if (!title.trim()) {
      //   toast({
      //     title: "Post title is required!",
      //     status: "warning",
      //     duration: 5000,
      //     isClosable: true,
      //     position: "top-right",
      //   });
      return;
    } else if (!content.trim()) {
      //   toast({
      //     title: "Post content is required!",
      //     status: "warning",
      //     duration: 5000,
      //     isClosable: true,
      //     position: "top-right",
      //   });
      return;
    }

    setPreviewOpen(true);
  };

  return (
    <div className="post-blogs">
      <Navbar />

      <div className="content-box">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Content</label>
        <PostEditor content={content} setContent={setContent} />

        <div className="button-group">
          <button onClick={handlePreview}>Preview</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>

        {isPreviewOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>{title}</h2>
              <p dangerouslySetInnerHTML={{ __html: content }}></p>
              <button onClick={() => setPreviewOpen(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostBlogs;
