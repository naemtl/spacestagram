import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarsRoverPosts, selectMarsRoverPosts } from "../../state/posts/postsSlice";

import "./SpaceFeed.scss"

const SpaceFeed = () => {
    const dispatch = useDispatch()
    const marsRoverPosts = useSelector(selectMarsRoverPosts)

    useEffect(() => {
        dispatch(fetchMarsRoverPosts())
    }, [dispatch])

    return (
        <div className="space-feed">
            <div className="space-feed__mars">
                {marsRoverPosts.map(post => <img key={post.id} src={post.img_src} alt={post.camera.name} />)}
            </div>
        </div>
    )
}

export default SpaceFeed
