import React from 'react';
import getPosts from './api';
import Post from '../../components/Post/Post';
import {connect} from 'react-redux';
import {CHANGE_SITENAME, POSTS_SET} from '../../actionTypes'
class Posts extends React.Component{
    
    async componentDidMount(){
        const posts=await getPosts();
        this.props.setPosts(posts.data.slice(0,20))
    }

    render(){
        return (
            <div>
                <h1>{this.props.siteName}</h1>
                <button onClick={()=>this.props.setName('New webnsite')}>Set buttonname</button>
                {this.props.posts.map(el=> <Post key={el.id} post={el}/>)}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        siteName: state.postsReducer.siteName,
        posts: state.postsReducer.posts
    }
}

const mapDispatchesToprops=(dispatch, state)=>{
    return {
        setName: (newSitename)=>dispatch({type:CHANGE_SITENAME, siteName: newSitename}),
        setPosts: (posts)=>dispatch({type:POSTS_SET, posts: posts}),
    }
}

export default connect(mapStateToProps, mapDispatchesToprops)(Posts);