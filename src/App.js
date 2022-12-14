import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar.jsx";
import DisplayPost from "./Components/DisplayPosts/DisplayPosts.jsx";
import CreatePost from "./Components/CreatePost/CreatePost.jsx";
import './App.css';


// import CustomButton from "../src/Components/CutomButton/CustomButton";
function App() {

  const [posts, setPosts] = useState([
    {id: 1, name: 'Smith Green', postTime:'10:23:50 29/09/2022', post:'I recently went into the worrs to search for the oldest tree'},
    {id: 2, name: 'Tom Blue', postTime:'10:23:50 28/09/2022', post: 'Its April Fools Dya! Give this a dislike if you really like it.:)'},
  ])
 
  function addNewPost(post) {
    let temPost = [post, ...posts];
    setPosts(temPost);
  }

  return (
    <div>
      <NavBar />
      <CreatePost addNewPost={addNewPost}/>
      <DisplayPost post={posts}></DisplayPost>
    </div>
  );
}

export default App;
