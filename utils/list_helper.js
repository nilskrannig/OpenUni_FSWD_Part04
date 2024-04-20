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

    return favorite
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}