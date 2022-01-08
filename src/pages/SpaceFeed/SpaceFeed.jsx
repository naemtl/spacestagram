import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMarsRoverPosts, fetchPostOfTheDay, selectMarsRoverPosts, selectPostOfTheDay } from "../../state/posts/postsSlice";

import "./SpaceFeed.scss"

const SpaceFeed = () => {
    const dispatch = useDispatch()
    const postOfTheDay = useSelector(selectPostOfTheDay)
    const marsRoverPosts = useSelector(selectMarsRoverPosts)

    console.log([postOfTheDay, marsRoverPosts]);

    useEffect(() => {
        dispatch(fetchMarsRoverPosts())
        dispatch(fetchPostOfTheDay())
    }, [dispatch])


    return (
        <div className="space-feed">
            <div className="space-feed__daily">Entry of the Day!</div>
            <div className="space-feed__mars">Mars Rover entries</div>
        </div>
    )
}

export default SpaceFeed
