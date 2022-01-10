import "./LikeButton.scss"

// on check, add id of post entry to array and save in localstorage, then compare localstorage to posts array, and only display those that have appeared in localstorage array

const LikeButton = () => {
    return (
        <div className="like-button">
            <input type="checkbox" name="Like" />
        </div>
    )
}

export default LikeButton
