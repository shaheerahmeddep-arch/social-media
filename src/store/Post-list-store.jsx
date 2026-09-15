import { createContext, useReducer , useState , useEffect } from "react";

export const PostList = createContext({
  postList: [],
  addpost: () => {},
  deletepost: () => {},
});

const PostListReducer = (currPostlist, action) => {
  let newpostlist = currPostlist;

  if (action.type === "DELETE_POST" ) {
    newpostlist = currPostlist.filter(
      (post) => post.id !== action.payload.postid
    );
  } 
  else if (action.type === "ADD_POST") {
    newpostlist = [action.payload, ...currPostlist];
  } 
  // CORRECTED: 'payload' ki jagah 'type' check kiya, aur brackets [] hataye
  else if (action.type === "ADD_INITIAL_POSTS") {
    newpostlist = action.payload.posts; 
  }

  return newpostlist;
};

const PostlistProvider = ({ children }) => {
  const [postList, dispatchPostlist] = useReducer(PostListReducer, []);

  
  const addpost = (post) => {
    dispatchPostlist({
      type: "ADD_POST",
      payload: post
    });
  };

  const addInitialpost = (posts) => {
    dispatchPostlist({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      }
    });
  };

  const deletepost = (postid) => {
    dispatchPostlist({
      type: "DELETE_POST",
      payload: {
        postid,
      }
    });
  };
   


  return (
    <PostList.Provider value={{ postList, addpost, deletepost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostlistProvider;