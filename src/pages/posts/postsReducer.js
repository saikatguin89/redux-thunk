import {CHANGE_SITENAME, POSTS_SET} from "../../actionTypes"
const postsReducer=(state={siteName:'Abc tech', posts:[]}, action)=>{
    switch (action.type) {
        case CHANGE_SITENAME:
            state={...state, siteName:action.siteName};
            break;
        case POSTS_SET:
            state={...state, posts:action.posts};
            break;
        default:
            return state;
    }
    
    return state
};
export default postsReducer;