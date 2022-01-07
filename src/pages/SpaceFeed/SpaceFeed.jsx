import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, selectPosts } from "../../state/posts/postsSlice";

const SpaceFeed = () => {
    const posts = useSelector(selectPosts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    console.log(posts);

    return (
        <div className="spacefeed">
            space
        </div>
    )
}

export default SpaceFeed
