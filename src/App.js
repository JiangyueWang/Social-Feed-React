import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar.jsx";
import DisplayPost from "./Components/DisplayPosts/DisplayPosts.jsx";

function App() {

  const [post, setPost] = useState([
    {name: 'David Lagrange', post:'I recently went into the worrs to search for the oldest tree'},
    {name: 'JJ Vega', post: 'Its April Fools Dya! Give this a dislike if you really like it.:)'}
  ])
    
  return (
    <div>
      <NavBar />
      <DisplayPost post={post}></DisplayPost>

    </div>
  );
}

export default App;
