export function getLocalStorageArray() {
    return JSON.parse(localStorage.getItem('likedPostsList')) || []
}