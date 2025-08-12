import { Form } from "react-router-dom";

const CreatePost = () => {
  //const { addPost } = useContext(Postlist);
  //const navigate = useNavigate();

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="user_id" className="form-label">
          User ID
        </label>
        <input
          type="text"
          className="form-control"
          id="user_id"
          placeholder="Enter User Id"
          name="userId"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you today"
          name="title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="post-content" className="form-label">
          Post Content
        </label>
        <textarea
          className="form-control"
          id="post-content"
          placeholder="Tell us more about it"
          name="body"
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number Of Reactions
        </label>
        <input
          type="number"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted?"
          name="reactions"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="hashtags" className="form-label">
          Enter Your Tags Here
        </label>
        <input
          type="text"
          className="form-control"
          id="hashtags"
          placeholder="Enter tags with space"
          name="tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

//you get data object
export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);

  console.log(postData);
  /* fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId,
      title,
      body,
      reactions: parseInt(reactions),
      tags,
    }),
  })
    .then((res) => res.json())
    .then((post) => {
      addPost(post);
      //Navigate to Home page
      navigate("/");
    });*/
}
export default CreatePost;
