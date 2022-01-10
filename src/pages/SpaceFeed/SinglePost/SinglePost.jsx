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
            <div className="single-post__controls">
                <input type="checkbox" name="Like" />
                <input type="checkbox" name="Bookmark" />
            </div>
            <div className="single-post__rover">{post.rover.name} rover</div>
            <div className="single-post__camera">{post.camera.full_name} image #{post.id}</div>
            <div className="single-post__date">{post.earth_date}</div>
        </div>
    )
}

export default SinglePost
