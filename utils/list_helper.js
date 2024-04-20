const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const initialValue = 0
    const sum = blogs.reduce(
        (acc, value) => acc + value.likes,
        initialValue
    )

    return sum
}

const favoriteBlog = (blogs) => {
    const favorite = blogs.reduce(
        (prev, current) => (prev && prev.likes > current.likes) ? prev : current
        , null)

    if(!favorite) return null

    const formattedFavorite = Object.keys(favorite).reduce((acc, key) => {
        if (key !== '_id' && key !== '__v' && key !== 'url') {
            acc[key] = favorite[key]
        }

        return acc
    }, {})

    return formattedFavorite
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}