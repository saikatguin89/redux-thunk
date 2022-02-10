import React from 'react'
import {Route, Link, Routes} from 'react-router-dom';

const Posts = React.lazy(() => import('./pages/posts/Posts'));
const AddPost = React.lazy(() => import('./pages/addPost/AddPost'));
const PostDetails = React.lazy(() => import('./pages/postDetails/PostDetails'));
class App extends React.Component{
  
  render(){
    return (
      <div className="container">
        <div>
          <Link to="/">Post</Link>
          <Link to="/add-post">Add Post</Link>
        </div>
        <div>
          <Routes>
            <Route exact path="/" element={
                <React.Suspense fallback={<>...</>}>
                  <Posts/>
                </React.Suspense>
              }/>
            <Route path="/add-post" element={
                <React.Suspense fallback={<>...</>}>
                  <AddPost/>
                </React.Suspense>
              }/>
            <Route path="/post-details/:id" element={
                <React.Suspense fallback={<>...</>}>
                  <PostDetails/>
                </React.Suspense>
              }/>
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
