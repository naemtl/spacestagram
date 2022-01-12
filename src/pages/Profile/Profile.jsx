import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SinglePost from "../../components/SinglePost/SinglePost";

import { selectMarsRoverPosts, fetchMarsRoverPosts } from "../../state/posts/postsSlice";
import { selectProfileUsername } from "../../state/profile/profileSlice";

import { getLocalStorageArray } from "../../utils/localStorageHelper";

import "./Profile.scss"

const Profile = () => {
    const [likedPosts, setLikedPosts] = useState([])

    const dispatch = useDispatch()
    const marsRoverPosts = useSelector(selectMarsRoverPosts)
    const username = useSelector(selectProfileUsername)

    useEffect(() => {
        dispatch(fetchMarsRoverPosts())
    }, [dispatch])

    useEffect(() => {
        const likedPostIDs = getLocalStorageArray()

        const likedRoverPosts = marsRoverPosts.filter(post => likedPostIDs.includes(post.id))

        setLikedPosts(likedRoverPosts)
    }, [marsRoverPosts])

    return (
        <div className="profile">
            <h1 className="profile__username">{username}'s Profile</h1>
            <div className="profile__liked-posts">
                {likedPosts.map(post => (
                    <SinglePost key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Profile
