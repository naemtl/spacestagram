import { FaHeart } from "react-icons/fa";

import "./LikeButton.scss"

// on check, add id of post entry to array and save in localstorage, then compare localstorage to posts array, and only display those that have appeared in localstorage array

const LikeButton = ({ postId }) => {

    return (
        <div className="like-button">
            <input type="checkbox" name="Like" onChange={() => console.log(postId)} />
            <FaHeart />
        </div>
    )
}

export default LikeButton
