import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarsRoverPosts, selectMarsRoverPosts } from "../../state/posts/postsSlice";

import SinglePost from "../../components/SinglePost/SinglePost";

import "./SpaceFeed.scss"

const SpaceFeed = () => {
    const dispatch = useDispatch()
    const marsRoverPosts = useSelector(selectMarsRoverPosts)

    useEffect(() => {
        dispatch(fetchMarsRoverPosts())
    }, [dispatch])

    return (
        <div className="space-feed">
            <h1 className="space-feed__title">Spacefeed</h1>
            <div className="space-feed__mars-rover">
                {marsRoverPosts.map(post =>
                    <SinglePost key={post.id} post={post} />
                )}
            </div>
        </div>
    )
}

export default SpaceFeed
