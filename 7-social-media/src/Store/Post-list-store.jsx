import { createContext, useEffect, useReducer, useState } from "react";

export const Postlist = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  if (action.type === "ADD_POST") {
    return [
      ...currPostList,
      {
        id: action.payload.id,
        userId: action.payload.userId,
        title: action.payload.title,
        body: action.payload.body,
        reactions: action.payload.reactions,
        tags: action.payload.tags,
      },
    ];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    const existingIds = new Set(currPostList.map((post) => post.id));
    const filteredPosts = action.payload.posts.filter(
      (post) => !existingIds.has(post.id)
    );
    return [...currPostList, ...filteredPosts];
  } else if (action.type === "DELETE_POST") {
    return currPostList.filter((post) => post.id !== action.payload.postId);
  }
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  /*  const [fetching, setFetching] = useState(false); */

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: { posts },
    });
  };

  const deletePost = (postId) => {
    console.log(`delete post called for: ${postId}`);
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  // useEffect(() => {
  //   setFetching(true);
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setFetching(false);
  //     });
  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  return (
    <Postlist.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </Postlist.Provider>
  );
};

export default PostListProvider;
