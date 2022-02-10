import {GET_COMMENTS} from '../../actionTypes';
import {getComments} from './api';

export function fetchComments(postId){
    return (dispatch)=>{
        getComments(postId).then(resp=>{
            dispatch({
                type:GET_COMMENTS,
                comments: resp.data
            })
        })
    }
}