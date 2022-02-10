import {SELECT_POST, GET_COMMENTS, RESET_POST_DETAILS} from '../../actionTypes';
const PostDetailsReducer=(state={
    post:null,
    comments:[]
}, action)=>{
    switch (action.type) {
        case SELECT_POST:
            state={...state, post:action.post}
            break;
        case GET_COMMENTS:
            state={...state, comments:action.comments}
            break;
        case RESET_POST_DETAILS:
            state={...state, comments:[], post:null}
            break;
        default:
            break;
    }
    return state;
}
export default PostDetailsReducer;