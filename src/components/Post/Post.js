import styles from './Post.module.css'
import {Link} from 'react-router-dom'
function Post({post}){
    return (
        <div className={styles.singlePost}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <Link to={`/post-details/${post.id}`}>Details</Link>
        </div>
    )
}

export default Post