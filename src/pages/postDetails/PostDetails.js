import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getPost} from './api';
import {connect} from 'react-redux'
import {SELECT_POST, RESET_POST_DETAILS} from '../../actionTypes'
import Comment from '../../components/comment/Comment';
import {fetchComments} from './postDetailsActionCreator';

function PostDetails(props){
    const {id}=useParams()
    //const [post, setPost]= useState({})
    useEffect(()=>{
        props.resetPostDetails()
        async function getData(){
            const p= await getPost(id);
            props.setPost(p.data)
        }
        getData()
    },[id])

    const getComments=(id)=>{
        props.setComments(id)
        console.log(id)
    }

    return (
        <div>
            {props.post!==null ? (
                <>
                    <h5>{props.post.title}</h5>
                    <p>{props.post.body}</p>
                    <div><button onClick={()=>getComments(props.post.id)}>Get Comments</button></div>
                    <div>
                        {props.comments.map(el=> <Comment key={el.id} comment={el}/>)}
                    </div>
                    
                </>
            ) : null}
            
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        post: state.postDetailsReducer.post,
        comments: state.postDetailsReducer.comments
    }
}

const mapDispatchesToprops=(dispatch, state)=>{
    return {
        setPost:(post)=>dispatch({type: SELECT_POST, post:post}),
        setComments:(id)=>dispatch(fetchComments(id)),
        resetPostDetails:(post)=>dispatch({type: RESET_POST_DETAILS}),
    }
}

export default connect(mapStateToProps, mapDispatchesToprops)(PostDetails);