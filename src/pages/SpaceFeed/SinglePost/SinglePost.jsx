import LikeButton from "../../../components/LikeButton/LikeButton"

import "./SinglePost.scss"

const SinglePost = ({ post }) => {

    return (
        <div className="single-post">
            <div className="single-post__image-container">
                <img
                    className="single-post__image"
                    src={post.img_src}
                    alt={`${post.camera.full_name}`}
                />
            </div>
            <div className="single-post__metadata">
                <div className="single-post__controls">
                    <LikeButton postId={post.id} />
                    <div className="single-post__date">{post.earth_date}</div>
                </div>
                <div className="single-post__camera">
                    <span>#{post.id}</span> {post.camera.full_name} image
                </div>
                <div className="single-post__rover">{post.rover.name} rover</div>
            </div>
        </div>
    )
}

export default SinglePost
