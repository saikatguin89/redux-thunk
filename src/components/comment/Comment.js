import styles from './Comment.module.css'
export default function Comment({comment}){
    return (
        <div className={styles.singleComment}>
            <h5>{comment.name}</h5>
            <h5>{comment.email}</h5>
            <p>{comment.body}</p>
        </div>
    )
}