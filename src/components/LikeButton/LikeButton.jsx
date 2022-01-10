import { FaHeart } from "react-icons/fa";

import "./LikeButton.scss"

// on check, add id of post entry to array and save in localstorage, then compare localstorage to posts array, and only display those that have appeared in localstorage array

const LikeButton = ({ postId }) => {

    const likeHandler = (postId) => {
        let localStorageArray = JSON.parse(localStorage.getItem('likedPostsList'))

        localStorageArray = localStorageArray || []

        localStorageArray = localStorageArray.find(id => id == postId) ? localStorageArray.filter(id => id != postId) : localStorageArray.concat([postId])

        localStorage.setItem('likedPostsList', JSON.stringify(localStorageArray))
    }

    return (
        <div className="like-button">
            <input
                type="checkbox"
                name="Like"
                onChange={() => likeHandler(postId)}
            />
            <FaHeart />
        </div>
    )
}

export default LikeButton
