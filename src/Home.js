import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blog, setBlog] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blog} />
      <h2>Welcome to the page</h2>
    </div>
  );
};
export default Home;
