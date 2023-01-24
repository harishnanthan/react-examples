import React from "react";
import PostList from "./helpers/PostList.js";
import { PostContextProvider } from "./PostContext.js";
import "./contextAPI.scss";

const useContext = () => {
  return <PostContextProvider>
    <div className="contextAPI">
      <header>Show the all post using useContext method (all the post are available in JSON placeholder)</header>
      <PostList />
    </div>
  </PostContextProvider>
}

export default useContext;