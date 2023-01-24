import React, { createContext, useState } from "react";

export const PostContext = createContext(null);

export const PostContextProvider = ({ children }) => {

  const [posts, setPost] = useState([])
  const [loading, setLoading] = useState(true);

  const fetchPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPost(json))
      .then(setLoading(false))
  }

  const value = {
    posts,
    fetchPost,
    loading,
  }

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}
