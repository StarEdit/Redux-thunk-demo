import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "../components/header";
import { postActionCreators, State } from "../redux/store";

const PostPage = () => {
  const dispatch = useDispatch();

  const { loadPost } = bindActionCreators(postActionCreators, dispatch);

  const data = useSelector((state: State) => state.post.data);

  useEffect(() => {
    loadPost();
  }, []);

  return (
    <>
      <Header />
      <div>
        <ul>
          {data.map((item: any) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PostPage;
