import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

import { getLocalStorageArray } from "../../utils/localStorageHelper";

import "./LikeButton.scss"

const LikeButton = ({ postId }) => {
    const [isLiked, setIsLiked] = useState(false)

    useEffect(() => {
        const localStorageArray = getLocalStorageArray()

        localStorageArray.includes(postId) ? setIsLiked(true) : setIsLiked(false)
    }, [postId])

    const likeHandler = (postId) => {
        let localStorageArray = getLocalStorageArray()

        if (localStorageArray.includes(postId)) {
            localStorageArray = localStorageArray.filter(id => id !== postId)
            setIsLiked(false)
        } else {
            localStorageArray = localStorageArray.concat([postId])
            setIsLiked(true)
        }

        localStorage.setItem('likedPostsList', JSON.stringify(localStorageArray))
    }

    return (
        <div className="like-button">
            <input
                aria-label="Like"
                checked={isLiked}
                name="Like"
                onChange={() => likeHandler(postId)}
                type="checkbox"
            />
            <FaHeart />
        </div>
    )
}

export default LikeButton
