import { RiDeleteBin6Line } from "react-icons/ri";
import { FaSadTear } from "react-icons/fa";
import { BiSolidHappyHeartEyes } from "react-icons/bi";
import { useContext } from "react";
import { Postlist } from "../Store/Post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(Postlist);
  return (
    <div className="card post-card" style={{ width: "35%", padding: "20px" }}>
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 end-0 badge bg-danger">
            <RiDeleteBin6Line onClick={() => deletePost(post.id)} />
          </span>
        </h5>

        <h6 className="text-muted">Posted by: {post.userId}</h6>

        <p className="card-text">{post.body}</p>
        {/* <span class="badge bg-primary">{post.reactions}</span> */}

        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hastag">
            {tag}
          </span>
        ))}

        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by{" "}
          {post.reactions.likes === 0 ? (
            <FaSadTear />
          ) : (
            <>
              {post.reactions.dislikes} <BiSolidHappyHeartEyes />
            </>
          )}{" "}
          People.
        </div>
      </div>
    </div>
  );
};
export default Post;
