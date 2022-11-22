const BlogList = (props) => {
  const blog = props.blog;
  const handleDelete = props.handleDelete;

  return (
    <div className="blog-list">
      {blog.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written By: {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}> Delete Blog </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
