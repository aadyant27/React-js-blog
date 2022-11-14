const BlogList = (props) => {
  console.log(props.blogs);
  const blog = props.blogs;
  return (
    <div className="blog-list">
      {blog.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written By: {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
