import { useEffect, useState } from "react";

import Loader from "../../components/Loader/Loader";
import SinglePost from "./SinglePost/SinglePost";

import "./SpaceFeed.scss"

const SpaceFeed = () => {
    const API_KEY = "D59JwJ4Gju5ds48Hbi90twGhu33kvzQZwBGb9hE3"

    const [marsRoverPosts, setMarsRoverPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getMarsRoverPosts() {
            try {
                const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${API_KEY}`)

                const data = await response.json()

                setMarsRoverPosts(data.photos)
                setIsLoading(false)

            } catch (error) {
                console.error("Rover seems to be malfunctioning", error);
            }
        }
        getMarsRoverPosts()
    }, [])

    const displayRoverPhotos = () => (
        <div className="space-feed__mars-rover">
            {marsRoverPosts.map(post =>
                <SinglePost key={post.id} post={post} />
            )}
        </div>
    )

    return (
        <div
            className={
                `${!isLoading ? "" : "space-feed--full-height "}space-feed`
            }
            role="main"
        >
            <h1 className="space-feed__title">Mars Rover API</h1>
            {
                !isLoading ? displayRoverPhotos() : <Loader />
            }
        </div>
    )
}

export default SpaceFeed
