import React, { useContext, useEffect } from "react";
import { PostContext } from "../PostContext";
import Card from "./Card";
import "../contextAPI.scss";

const PostList = () => {
  const { fetchPost, posts, loading } = useContext(PostContext)

  useEffect(() => {
    fetchPost()
  }, [])

  return <div className="cards">{loading ? console.log('loading') : posts.map((post, idx) => <Card key={idx} {...post} />)}</div>
}

export default PostList;